import * as React from "react";
import { connect } from "react-redux";
import { addOrganization } from "../actions/actions";
import { deleteOrganization } from "../actions/actions";
import { changeOrganization } from "../actions/actions";
import ModalConfirm from "../components/ModalConfirm";
import ModalInputOrg from "../components/ModalInputOrg";

class Organization extends React.Component {
  constructor() {
    super();
    // modal
    this.state = {
      modalСonfirmIsOpen: false,
      ModalInputOrgIsOpen: false,
      deleteNumber: 0,
      onChanged: false
    };
    this.closeInputModal = this.closeInputModal.bind(this);
    this.openInputModal = this.openInputModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddOrg = this.handleAddOrg.bind(this);
    this.handleDeleteOrg = this.handleDeleteOrg.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.change = this.change.bind(this);
  }
  change() {
    this.setState(previousState => {
      return { onChanged: !previousState.onChanged };
    });
  }
  changeStart(e) {
    const number = e.target.getAttribute("number");
    this.setState({ deleteNumber: number });
    console.log(number);
    this.setState({ onChanged: true });
    this.openInputModal();
  }
  closeInputModal() {
    this.setState({ ModalInputOrgIsOpen: false });
  }
  openInputModal() {
    this.setState({ ModalInputOrgIsOpen: true });
  }
  openModal(e) {
    const targetOrg = e.target.id;
    this.setState({ modalСonfirmIsOpen: true, deleteNumber: targetOrg });
  }
  closeModal() {
    this.setState({ modalСonfirmIsOpen: false });
  }
  handleAddOrg(e, data) {
    e.preventDefault();
    const newOrganization = {
      id: 2,
      title: "Ультра",
      address: "ул.Московская 2а",
      inn: "1111-2222-3333"
    };
    this.props.addOrg(data);
  }
  handleDeleteOrg(e) {
    this.closeModal();
    this.props.delOrg(this.state.deleteNumber);
    this.setState({ deleteNumber: 0 });
  }

  render() {
    var self: any = this;
    return (
      <>
        <header>
          <div className="container">
            <div className="row">
              <h1 className="mx-auto mt-5 pl-5">Organization</h1>
              <button
                type="button"
                className="btn btn-danger mr-5 py-2"
                style={{
                  height: "3rem",
                  marginTop: "3rem",
                  marginLeft: "-5rem"
                }}
                title="Exit"
              >
                LogOut
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Adress</th>
                  <th scope="col">INN</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.props.organization.map(function(item, index) {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.address}</td>
                      <td>{item.inn}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={self.changeStart}
                          number={index}
                        >
                          Change
                        </button>
                        <button
                          id={index}
                          type="button"
                          className="btn btn-outline-danger mx-2"
                          onClick={self.openModal}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-success mt-3 float-right"
              style={{ marginRight: "17%" }}
              // onClick={this.handleAddOrg}
              onClick={this.openInputModal}
            >
              Add Organization
            </button>
          </div>
        </main>
        <ModalConfirm
          modalIsOpen={this.state.modalСonfirmIsOpen}
          closeModal={this.closeModal}
          handleDeleteOrg={this.handleDeleteOrg}
          deleteNumber={this.state.deleteNumber}
          title={
            this.props.organization.length > 0
              ? this.props.organization[this.state.deleteNumber].title
              : "Org"
          }
        />
        <ModalInputOrg
          ModalInputOrgIsOpen={this.state.ModalInputOrgIsOpen}
          closeModal={this.closeInputModal}
          handleAddOrg={this.props.addOrg}
          deleteNumber={this.state.deleteNumber}
          title={
            this.props.organization.length > 0
              ? this.props.organization[this.state.deleteNumber].title
              : "Org"
          }
          orgData={this.props.organization[this.state.deleteNumber]}
          changeOrg={this.props.changeOrg}
          changed={this.change}
          onChanged={this.state.onChanged}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { organization: state.organization };
};

function mapDispatchToProps(dispatch) {
  return {
    addOrg: data => dispatch(addOrganization(data)),
    delOrg: data => dispatch(deleteOrganization(data)),
    changeOrg: data => dispatch(changeOrganization(data))
  };
}

const Org = connect(
  mapStateToProps,
  mapDispatchToProps
)(Organization);
export default Org;
