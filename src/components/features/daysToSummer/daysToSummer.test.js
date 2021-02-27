import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  daysDescription: '.daysDescription',
};

const mockProps = {
  daysDescription: '',
};

//beforeAll(() => {
//  const utilsModule = jest.requireActual('../../../utils/formatDays.js');
//  utilsModule.formatDays = jest.fn(days => days);
//});

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow (<DaysToSummer />);
    expect(component).toBeTruthy();
  });


  it('should render description', () => {
    const component = shallow (<DaysToSummer />);
    expect(component.exists(select.daysDescription)).toEqual(true);
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDaysAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.daysDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDaysAtDate('2021-06-20', '1 day to summer');
  checkDaysAtDate('2021-12-22', '184 days to summer');
  checkDaysAtDate('2021-10-04', '105 days to summer');
});

//czy ma poprawne klasy names
// shold render headings
  

// check description at date  czy sumemr time is = ...xxx
// czy jak pdoam date  xx  czy dajac iles to bede mia ltyle days to summer
