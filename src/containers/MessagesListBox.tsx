import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { deleteMessage } from '../store/actions';
import { Dispatch } from 'redux';
import MessageList from '../components/MessageList';

const mapStateToProps =(state: AppState)=>({
   messages: state.messages
});
const mapDispatchToProps =(dispatch: Dispatch)=>({
   onClick:(timestamp: number)=>dispatch(deleteMessage(timestamp))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);