import './App.css';
import {Component} from "react";
import {connect, sendMsg} from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

class App extends Component {

    componentDidMount() {
        connect((msg) => {
            console.log("New Message")
            this.setState(prevState => ({
                chatHistory: [...this.state.chatHistory, msg]
            }))
            console.log(this.state);
        });
    }

    constructor(props) {
    super(props);
    this.state = {
        chatHistory: []
    }
  }

  send() {
    console.log("test");
    sendMsg("test");
  }

  render() {
    return (
        <div className="App">
            <Header />
            <ChatHistory chatHistory={this.state.chatHistory} />
          <button onClick={this.send}>Hit</button>
        </div>
    );
  }
}


export default App;
