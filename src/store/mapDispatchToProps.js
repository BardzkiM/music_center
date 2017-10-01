import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

import actions from '../modules/actions';

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .mapKeys(macroCaseToCamelCase)
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

const macroCaseToCamelCase = key =>
  key
    .toLowerCase()
    .replace(/_[a-z]/g, match => match.slice(1).toUpperCase());