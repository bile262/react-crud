import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import studentService from "../../services/student.service";
import Table from "./Table";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.retrieveStudents = this.retrieveStudents.bind(this);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.retrieveStudents();
  }
  retrieveStudents() {
    studentService
      .getAll()
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  removeCharacter = (id) => {
    // const { data } = this.state;
    studentService.deleteStudent(id).then(() => {
      this.retrieveStudents();
      this.props.history.push('/home');
    });
    // this.setState({
    //   data: data.filter((character, i) => {
    //     return i !== id;
    //   }),
    // });
    
     
  };
  render() {
    const { data } = this.state;
    // console.log(data);
    return (
      <div>
        <h1>HomePage</h1>
        <Table characterData={data} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}
export default HomePage;
