import React, { Component } from "react";
import MockService from "../services/MockService";

class Item extends Component {
  render() {
    const id  = this.props.match.params.id;
    // console.log(MockService.getById(1));
    return (
      <div>
        <h1>Item {id}</h1>
      </div>
    );
  }
}
export default Item;
