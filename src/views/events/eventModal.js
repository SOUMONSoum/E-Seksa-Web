import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';

import { createEvent } from '../../actions/eventActions';

export class EventModal extends Component {
  state = {
    modal: false,
    name: '',
    speaker: '',
    price: 0.0,
    event_date: new Date(),
    description: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.speaker]: e.target.value });
    this.setState({ [e.target.price]: e.target.value });
    this.setState({ [e.target.event_date]: e.target.value });
    this.setState({ [e.target.description]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      name: this.state.name,
      speaker: this.state.speaker,
      price: this.state.price,
      event_date: this.state.event_date,
      description: this.state.description
    }

    this.props.createEvent(newEvent);

    this.toggle();
  }

  render() {
    return (
      <React.Fragment>
        <Button
          color='primary'
          onClick={this.toggle}
          className='mb-3'
        >បង្កើតថ្មី</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            className="text-center"
            toggle={this.toggle}>
            បង្កើតថ្មីព្រឹត្តិការថ្មី
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">ឈ្មោះ</Label>
                <Input
                  type="text"
                  name="name"
                  id="event"
                  placeholder="ឈ្មោះព្រឹត្តិការណ៍..."
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="speaker">អ្នកអត្តិធ្យាយ</Label>
                <Input
                  type="text"
                  name="speaker"
                  id="event"
                  placeholder="អ្នកអត្តិធ្យាយព្រឹត្តិការណ៍..."
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">តម្លៃ</Label>
                <Input
                  type="number"
                  name="price"
                  id="event"
                  placeholder="តម្លៃនៃព្រឹត្តិការណ៍..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='event date'>ថ្ងៃចាបើផ្តើម</Label>
                <Input
                  type="date"
                  name="event date"
                  id="event"
                  placeholder="ថ្ងៃចាបើផ្តើមនៃព្រឹត្តិការណ៍..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">ពិពណ៍រនា</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="event"
                  rows="5"
                  cols="28"
                  placeholder="ពិពណ៍រនាអំពីព្រឹត្តិការណ៍..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color='primary' className="btn btn-block btn-lg">បង្កើតថ្មី</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { createEvent })(EventModal);
