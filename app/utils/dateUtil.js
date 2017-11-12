import moment from 'moment';

export const getFormattedDate = time => moment(time).format('hh:mm DD-MM-YYYY');