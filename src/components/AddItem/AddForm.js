import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import studentService from "../../services/student.service";

class AddForm extends Component {
  constructor(props) {
    super(props);
  }
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    
  
    this.setState(this.initialState);
    var data = this.state;
    studentService.createStudent(data).then(() => {
      this.props.handleSubmit(this.state);
    })
  };
  render() {
    const { name, job } = this.state;
    return (
      <div>
        <h1>Add Item</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={name}
              placeholder="Enter name"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="job">Job</label>
            <input
              type="text"
              className="form-control"
              name="job"
              id="job"
              value={job}
              placeholder="Enter job"
              onChange={this.handleChange}
            ></input>
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.submitForm}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddForm;
