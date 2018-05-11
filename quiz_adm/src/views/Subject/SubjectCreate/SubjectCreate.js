import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

class SubjectCreate extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xs='12' md='12'>
            <Card>
              <CardHeader>
                Listing
                </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor='name'>Subject Name:</Label>
                    <Input type='text' name='name' placeholder='Enter subject name'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='description'>Subject Description:</Label>
                    <Input type='textarea' name='name' placeholder='Enter subject description'></Input>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

const mapStateToPropos = (state) => {
  return {

  }
}

const mapDispathToProps = (dispath) => {
  return {

  }
}

export default connect(mapStateToPropos, mapDispathToProps)(SubjectCreate);