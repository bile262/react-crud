import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import MockService from "../../services/MockService";
import AddForm from "./AddForm";

class AddItem extends Component {
  state = {
    data: MockService.getAll(),
  };

  componentDidMount(){
    
  }
  handleSubmit = (character) => {
    // console.log(this.props.history.push('/home'));
    this.props.history.push('/home');
    // this.setState({ data: [...this.state.data, character] });
    // console.log(this.state);
    
  };
  
  render() {
    return <AddForm handleSubmit={this.handleSubmit}/>;
  }
}
export default AddItem;
