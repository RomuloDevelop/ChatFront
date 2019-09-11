import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { deleteContact } from '../store/actions';
import { Dispatch } from 'redux';
import ChatList from '../components/ChatList';

const mapStateToProps =(state: AppState)=>({
   contacts: state.contacts,
   filter: state.visibilityFilterContacts
});
const mapDispatchToProps =(dispatch: Dispatch)=>({
   onClick:(id: string)=>dispatch(deleteContact(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ChatList);