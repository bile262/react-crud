import React, { Component } from "react";
import studentService from "../services/student.service";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.loadStudent = this.loadStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.state = {
      name: "",
      job: "",
    };
  }
  initialState = {
    name: "",
    job: "",
  };
  componentDidMount() {
    this.loadStudent();
  }
  loadStudent() {
    studentService
      .getById(this.props.match.params.id)
      .then((rs) => {
        this.setState({
          name: rs.data.name,
          job: rs.data.job,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  updateStudent(id,data) {
    studentService.updateStudent(id,data).then(() => {
      this.props.history.push('/home');
    });
  }
  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    var data = this.state;
    this.updateStudent(this.props.match.params.id,data);
  };
  render() {
    const { name, job } = this.state;
    return (
      <div>
        <h1>Edit Item</h1>
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
            Edit
          </button>
        </form>
      </div>
    );
  }
}
export default EditItem;
