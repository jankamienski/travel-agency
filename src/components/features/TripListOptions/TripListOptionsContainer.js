import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTagFilter, changeDurationFrom,changeDurationTo} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeTagFilter: tag => dispatch(changeTagFilter(tag)),
  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
