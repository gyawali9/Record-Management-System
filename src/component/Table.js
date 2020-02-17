import React from "react";
import { toast } from "react-toastify";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      id: "",
      name: "",
      contact: "",
      error: {}
    };
  }
  handleDelete = id => {
    // console.log("delete");
    // console.log(id);
    this.props.delete(id);
  };
  handleEdit = record => {
    // console.log("for edit")
    this.setState({
      isEditing: true,
      id: record.id,
      name: record.name,
      contact: record.contact
    });
    // console.log(record)
  };
  handleChange = e => {
    // console.log("hello");
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log("submitted");
    const { id, name, contact } = this.state;
    if (id === "") {
      return this.setState({ error: { id: "Please Enter Your ID!" } });
    } else if (name === "") {
      return this.setState({ error: { name: "Please Enter Your Name!" } });
    } else if (contact === "") {
      return this.setState({ error: { contact: "Please Enter Your Contact" } });
    }
    this.props.edit(this.state);
    this.setState({ error: {}, isEditing: false });
  };
  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <div className="card w-50 mx-auto">
            <div
              className="card-header"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Edit Form
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="id">Id:</label>
                  <input
                    type="number"
                    id="id"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.id}
                    name="id"
                  />
                  <span style={{ color: "red" }}>{this.state.error.id}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                  />
                  <span style={{ color: "red" }}>{this.state.error.name}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Contact Number:</label>
                  <input
                    type="number"
                    id="contact"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.contact}
                    name="contact"
                  />
                  <span style={{ color: "red" }}>
                    {this.state.error.contact}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn-sn"
                  style={{ backgroundColor: "red" }}
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return (
      <table className="table table-dark w-50 mx-auto mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {this.props.record.map(record => {
            return (
              <tr>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.contact}</td>
                <td>
                  <i
                    onClick={() => this.handleDelete(record.id)}
                    className="fas fa-trash"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => this.handleEdit(record)}
                    className="fas fa-edit"
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
