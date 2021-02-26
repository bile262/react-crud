import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { useHistory } from "react-router-dom";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = (characterData) => {
  const history = useHistory();
  const handleRowClick = (row, path) => {
    history.push(`/${path}/${row}`, row);
  };
  // console.log(characterData);
  const rows = characterData.characterData.map((row, index) => {
    console.log(row.id);
    return (
      <tr key={row.id + "Table"}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => characterData.removeCharacter(row.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleRowClick(row.id, 'home')}
          >
            Detail
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleRowClick(row.id, 'home/edit')}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    // console.log(characterData);
    return (
      <table className="table table-hover">
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}
export default Table;
