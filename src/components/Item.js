import React, { Component } from "react";
import studentService from "../services/student.service";

class Item extends Component {
  constructor(props) {
    super(props);
    this.getStudent = this.getStudent.bind(this);
    this.state = {
      character: {},
    };
  }
  componentDidMount() {
    this.getStudent(this.props.match.params.id);
  }
  getStudent(id) {
    studentService
      .getById(id)
      .then((rs) => {
        this.setState({
          character: rs.data,
        });
        console.log(rs.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { character } = this.state;
    return (
      <div>
        <h1>Item</h1>
        <h2>{character.name}</h2>
        <h2>{character.job}</h2>
      </div>
    );
  }
}
export default Item;
