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

export default class ModalConfirm extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p
            ref={subtitle => (this.subtitle = subtitle)}
            className="text-center"
          >
            Do you want delete {this.props.title} element?
          </p>
          <div className="d-flex justify-content-around">
            <button onClick={this.props.handleDeleteOrg} className="col-3">
              ok
            </button>
            <button onClick={this.props.closeModal}>cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}
