import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentWillMount() {
    console.log('hey from cwm');
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        A list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
