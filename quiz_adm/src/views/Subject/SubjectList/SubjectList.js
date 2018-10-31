import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  CardBody,
  CardHeader
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { thunkFetchSubjectList } from "./../../../actions/Subject/SubjectThunk";

class SubjectList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubjectList();
  }

  render() {
    console.log(this.props.subjectList);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>Listing</CardHeader>
              <CardBody>
                <Link to="/subject/new" className="btn btn-primary mb-4">
                  Create new subject
                </Link>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Puzzle</td>
                      <td>01/01/2000</td>
                      <td>
                        <Button color="warning">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToPropos = state => {
  return {
    subjectList: state.subjectStore.subjectList
  };
};

const mapDispathToProps = dispatch => {
  return {
    fetchSubjectList: () => dispatch(thunkFetchSubjectList())
  };
};

export default connect(
  mapStateToPropos,
  mapDispathToProps
)(SubjectList);
