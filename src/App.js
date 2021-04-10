import React , {Component} from "react";
import Appp from "./ff";
import "./App.css";


export default class App extends Component {
  
  state = {
    fullName:"Slim El Ghoul",
    bio:"coding !",
    profession:"web developer",
    visible: false,
    count:0
    
  };
  componentDidMount(){
    this.interval = setInterval(()=>this.setState({count:this.state.count+1}),1000)};
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleClick=()=>this.setState({
    count:0,
    visible:!(this.state.visible)});

  render() {
    return(
        <React.Fragment>
         {this.state.visible ?(
           <div>
          <h1 style={{fontStyle:'italic'}}>Hi my name is {this.state.fullName}</h1>
          <h2>I try {this.state.bio} </h2>
          <h2>I am a {this.state.profession} </h2>
          <h3>I think it is attractive because you have been looking at him for {this.state.count} seconds</h3>
          </div>) : 
          <div>
          <h3>I think it is not attractive because you don't looking at him for {this.state.count} seconds</h3>
          <h4>plz click the button to show list</h4>
          </div> }
          <button  onClick={this.handleClick}> Show/Hide </button>

       </React.Fragment>
    )
  }
 }