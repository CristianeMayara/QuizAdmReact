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
import { thunkCreateSubject } from "../../../actions/Subject/SubjectThunk";

class SubjectCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: {
        name: "",
        description: ""
      }
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleCreate(subject) {
    return this.props.createSubject(subject);
  }

  handleChangeInput(event) {
    const { target } = event;
    const { value, name } = target;

    let { subject } = this.state;
    subject[name] = value;

    return this.setState({ subject });
  }

  render() {
    console.log(this.state);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>Listing</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Subject Name:</Label>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter subject name"
                      onChange={this.handleChangeInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="description">Subject Description:</Label>
                    <Input
                      name="description"
                      type="textarea"
                      onChange={this.handleChangeInput}
                      placeholder="Enter subject description"
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => this.handleCreate(this.state.subject)}
                >
                  Create
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
    subject: state.subjectStore.newSubject
  };
};

const mapDispathToProps = dispatch => {
  return {
    createSubject: subject => dispatch(thunkCreateSubject(subject))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SubjectCreate);
