import React from 'react';
import PropTypes from 'prop-types';
import ReactBigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Calendar.scss';

//calendar need to be localized by moment lib
ReactBigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  events = [];

  getEvents = () => {

    this.events = this.props.events.map((event) => {
      return (
        {
          title: 'rented',
          start: new Date(event.startDate),
          end: new Date(event.endDate)
        }
      );
    });
  };

  componentWillMount() {
    this.getEvents();
  }

  render() {
    return (
      <ReactBigCalendar
        events={this.events}
        selectable={false}
        defaultView='week'
        views={['week']}
      />);
  }
}

Calendar.propTypes = {
  events: PropTypes.array
};