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
import { thunkCreateUser } from "../../../actions/User/UserThunk";

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleCreate(user) {
    this.props.createUser(user);
    this.props.history.push("user/list");
  }

  handleChangeInput(event) {
    const { target } = event;
    const { value, name, email, password } = target;

    let { user } = this.state;
    user[name] = value;

    return this.setState({ user });
  }

  render() {
    console.log(this.state.user);
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
                      placeholder="Enter user name"
                      onChange={this.handleChangeInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      name="email"
                      type="text"
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
                  onClick={() => this.handleCreate(this.state.user)}
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
    user: state.userStore.newUser
  };
};

const mapDispathToProps = dispatch => {
  return {
    createUser: user => dispatch(thunkCreateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(UserEdit);
