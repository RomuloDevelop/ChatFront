import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { setVisibilityFilterContactsAction } from '../store/actions';
import { Dispatch } from 'redux';
import SearchInput from '../components/SearchInput';

const mapStateToProps =(state: AppState)=>({
   filter: state.visibilityFilterContacts
});
const mapDispatchToProps =(dispatch: Dispatch)=>({
   onClick:(filter: string)=>{
      dispatch(setVisibilityFilterContactsAction(filter));
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);