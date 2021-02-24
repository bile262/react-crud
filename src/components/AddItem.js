import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class AddItem extends Component {
  render() {
    return (
      <div>
          <h1>Add Item</h1>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" ></input>
          </div>
          <div className="form-group">
            <label for="job">Job</label>
            <input type="text" className="form-control" id="job" placeholder="Enter job" ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default AddItem;
