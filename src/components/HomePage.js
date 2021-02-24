import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { useHistory } from "react-router-dom";
import MockService from "../services/MockService";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = (data) => {
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/home/${row}`);
  };
  const rows = data.data.map((item, index) => {
    return (
      <tr key={index} onClick={() => handleRowClick(index)}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};
class HomePage extends Component {
  state = {
    data: MockService.getAll(),
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>HomePage</h1>
        <table className="table table table-hover">
          <TableHeader />
          <TableBody data={data} />
        </table>
      </div>
    );
  }
}
export default HomePage;
