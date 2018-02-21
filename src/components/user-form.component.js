import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    let { dispatch } = this.props;
    dispatch(actions.submit('user',new Promise(()=> {
      debugger
        return user.lastName.match(/(\bt\S+\b)/ig) && user.firstName.match(/(\bt\S+\b)/ig) ;
    })));
  }
  
  render() {
    let { user } = this.props;

    return (
      <Form model="user"
        onSubmit={(user) => this.handleSubmit(user)}>
        <Field model="user.firstName">
          <label>First name:</label>
          <input type="text" />
        </Field>

        <Field model="user.lastName">
          <label>Last name:</label>
          <input type="text" />
        </Field>

        <button type="submit">
          Finish registration, { user.firstName } { user.lastName }!
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);