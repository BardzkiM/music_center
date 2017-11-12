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
    this.events = [
      {
        'title': 'rented',
        'start': new Date(2017, 11, 11, 12, 0, 0),
        'end': new Date(2017, 11, 11, 14, 0, 0)
      },
      {
        'title': 'rented',
        'start': new Date(2017, 11, 11, 14, 0, 0),
        'end': new Date(2017, 11, 11, 15, 0, 0)
      },
      {
        'title': 'rented',
        'start': new Date(2017, 11, 11, 19, 0, 0),
        'end': new Date(2017, 11, 11, 20, 0, 0)
      },
      {
        'title': 'rented',
        'start': new Date(2017, 11, 11, 21, 0, 0),
        'end': new Date(2017, 11, 11, 22, 0, 0),
      },
    ];

    // this.events = this.props.events.map((event) => {
    //   return (
    //     {
    //       title: 'rented',
    //       start: new Date(event.startDate),
    //       end: new Date(event.endDate)
    //     }
    //   );
    // });
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
  // events: PropTypes.array
};