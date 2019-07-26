import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEvents, deleteEvent } from '../../actions/eventActions';
import EventModal from './eventModal';

export class EventListPage extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

  onDelete = id => {
    this.props.deleteEvent(id);
  }

  render() {
    const { events } = this.props.event
    return (
      <React.Fragment>
        <section className="section-padding">
        <EventModal/>
        { events.map(({id, name, speaker, price, description }) => (
          <div className="card" key={id}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <span>{speaker}</span>
              </h6>
              <h6 className="card-subtile mb-2 text-muted">
                <span>{price}</span>
              </h6>
              <p className="card-text">{description}</p>
              <button className="btn btn-primary btn-sm">មើល</button>
              <button className="btn btn-success btn-sm ml-2">បង្កើតថ្មី</button>
              <button className="btn btn-secondary btn-sm ml-2">កែប្រែ</button>
              <button className="btn btn-sm btn-danger ml-2" 
                      onClick={this.onDelete.bind(this, id)}>
                លុប</button>
            </div>
          </div>
          ))}
        </section>
      </React.Fragment>
    )
  }
}

EventListPage.propTypes = { 
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  event: state.event
})

export default connect(
  mapStateToProps, 
  { 
    getEvents,
    deleteEvent
  })(EventListPage);
