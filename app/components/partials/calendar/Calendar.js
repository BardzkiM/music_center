import React from 'react';
import PropTypes from 'prop-types';
import ReactBigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Calendar.scss';

//calendar need to be localized by moment lib
ReactBigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  getEvents = (nextProps) => {
    const { events } = nextProps;

    if (events) {
      this.setState({
        events: events.map((event) => {
          return ({
            title: 'rented',
            start: new Date(event.startDate),
            end: new Date(event.endDate)
          });
        })
      });
    }
    else {
      this.setState({events: []});
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.events !== nextProps) {
      this.getEvents(nextProps);
    }
  }

  render() {
    return (
      <ReactBigCalendar
        events={this.state.events}
        selectable={false}
        defaultView='week'
        views={['week']}
      />);
  }
}

Calendar.propTypes = {
  events: PropTypes.array
};