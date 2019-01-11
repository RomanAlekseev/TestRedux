import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default class ModalInputOrg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      adress: "",
      inn: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.ModalInputOrgIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="col-12">
            <label className="">
              ID
              <br />
              <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <label className="">
              Title
              <br />
              <input type="text" name="title" onChange={this.handleChange} />
            </label>
            <label className="">
              Adress
              <br />
              <input type="text" name="adress" onChange={this.handleChange} />
            </label>
            <label className="">
              INN
              <br />
              <input type="text" name="inn" onChange={this.handleChange} />
            </label>
            <input
              type="submit"
              value="Submit"
              onClick={this.props.handleAddOrg}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
