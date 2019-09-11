import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { sendMessage } from '../store/actions';
import { Dispatch } from 'redux';
import {Message} from '../store';
import MessageForm from '../components/MessageForm';

type OwnProps ={socket:SocketIOClient.Socket}

const mapStateToProps =(state: AppState)=>({
   messages: state.messages
});
const mapDispatchToProps =(dispatch: Dispatch, ownProps:OwnProps)=>({
   onClick:(payload: Message)=>{
      ownProps.socket.emit('message',payload.text);
      dispatch(sendMessage(payload));
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageForm);