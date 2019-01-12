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
    this.state = this.props.orgData;

    this.handleChange = this.handleChange.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.handleChangeOrg = this.handleChangeOrg.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  addInfo(e) {
    e.preventDefault();
    const data = this.state;
    this.props.handleAddOrg(data);
    this.props.closeModal();
  }
  handleChangeOrg(e) {
    e.preventDefault();
    const dataOrganization = this.state;
    const numberOrg = this.props.deleteNumber;
    const data = {
      dataOrg: dataOrganization,
      number: numberOrg
    };
    this.props.changeOrg(data);
    this.props.closeModal();
    this.props.changed();
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
              <input
                defaultValue={this.state.id}
                type="text"
                name="id"
                onChange={this.handleChange}
              />
            </label>
            <label className="">
              Title
              <br />
              <input
                defaultValue={this.state.title}
                type="text"
                name="title"
                onChange={this.handleChange}
              />
            </label>
            <label className="">
              Adress
              <br />
              <input
                defaultValue={this.state.address}
                type="text"
                name="address"
                onChange={this.handleChange}
              />
            </label>
            <label className="">
              INN
              <br />
              <input
                defaultValue={this.state.inn}
                type="text"
                name="inn"
                onChange={this.handleChange}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              style={this.props.onChanged ? { display: "none" } : null}
              // onClick={this.props.handleAddOrg}
              onClick={this.addInfo}
            />
            <input
              type="submit"
              value="Change"
              style={!this.props.onChanged ? { display: "none" } : null}
              // onClick={this.props.handleAddOrg}
              onClick={this.handleChangeOrg}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
