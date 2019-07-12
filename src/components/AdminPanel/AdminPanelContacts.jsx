import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminPanelContacts extends Component {
  constructor(props) {
    super(props);

    this.addressRef = React.createRef();
    this.telephoneRef = React.createRef();
    this.emailRef = React.createRef();
    this.props.getContacts();

    this.state = {
      isVisible: undefined
    };
  }

  visibleChange = async () => {
    await this.props.toggleContactVisibility();

    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  componentDidUpdate = () => {
    if (this.props.adminPanel.isVisible !== this.state.isVisible) {
      this.setState({
        isVisible: this.props.adminPanel.isVisible
      });
    }
  };

  render() {
    return (
      <>
        {this.props.adminPanel.isContactsLoading ? (
          <div className="preloader" data-uk-spinner="ratio: 3" />
        ) : (
          <div className="admin-contacts-wrap">
            <h3>Address</h3>
            <div className="contact-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.adminPanel.address}
                ref={this.addressRef}
              />
              <a
                className="btn"
                onClick={() =>
                  this.props.editAddress(this.addressRef.current.value)
                }
              >
                Edit
              </a>
            </div>
            <h3>Telephone</h3>
            <div className="contact-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.adminPanel.telephone}
                ref={this.telephoneRef}
              />
              <a
                className="btn"
                onClick={() =>
                  this.props.editTelephone(this.telephoneRef.current.value)
                }
              >
                Edit
              </a>
            </div>
            <h3>Email</h3>
            <div className="contact-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.adminPanel.email}
                ref={this.emailRef}
              />
              <a
                className="btn"
                onClick={() =>
                  this.props.editEmail(this.emailRef.current.value)
                }
              >
                Edit
              </a>
            </div>
            <label className="mt-1">
              <input
                className="uk-checkbox mr-1"
                type="checkbox"
                checked={this.state.isVisible}
                onChange={this.visibleChange}
              />
              Visible
            </label>
          </div>
        )}
      </>
    );
  }
}

AdminPanelContacts.propTypes = {
  getContacts: PropTypes.func,
  editAddress: PropTypes.func,
  editTelephone: PropTypes.func,
  editEmail: PropTypes.func,
  toggleContactVisibility: PropTypes.func,
  adminPanel: PropTypes.object
};

export default AdminPanelContacts;
