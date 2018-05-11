import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';

class SubjectList extends Component {

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
                <a href='/subject/new' className='btn btn-primary mb-4'>Create new subject</a>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Puzzle</td>
                      <td>01/01/2000</td>
                    </tr>
                  </tbody>

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default SubjectList;