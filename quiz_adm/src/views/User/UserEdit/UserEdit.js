import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  Form,
  Input,
  Label,
  Button,
  CardBody,
  FormGroup,
  CardFooter,
  CardHeader
} from "reactstrap";
import { connect } from "react-redux";
import { thunkEditUser, thunkFetchUser } from "../../../actions/User/UserThunk";

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleCreate = this.handleEdit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  async componentWillMount() {
    let { id } = this.props.match.params;

    await this.props.fetchUser(id);

    this.setState({ ...this.state, user: this.props.editUser.user });
  }

  handleEdit(user) {
    this.props.handleEditUser(user);
    this.props.history.push("user/list");
  }

  handleChangeInput(event) {
    const { target } = event;
    const { value, name } = target;

    let { user } = this.state;
    user[name] = value;

    return this.setState({ user });
  }

  render() {
    console.log("render-user", this.props);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>Edit a User</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      name="name"
                      type="text"
                      value={this.state.user.name}
                      placeholder="Enter user name"
                      onChange={this.handleChangeInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      name="email"
                      type="text"
                      value={this.state.user.email}
                      onChange={this.handleChangeInput}
                      placeholder="Enter user email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input
                      name="password"
                      type="text"
                      onChange={this.handleChangeInput}
                      placeholder="Enter user password"
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => this.handleEdit(this.state.user)}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editUser: state.userStore.editUser
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleEditUser: user => dispatch(thunkEditUser(user)),
    fetchUser: id => dispatch(thunkFetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(UserEdit);
