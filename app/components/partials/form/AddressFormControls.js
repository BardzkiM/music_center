import React from 'react';
import {CITY, STREET, HOUSE_NUMBER, APARTMENT_NUMBER, ZIP_CODE} from '../../../locales';
import {getFormControlsDOM} from '../../../utils/form';

const controls = [
  {name: 'city', text: CITY, type: 'text'},
  {name: 'street', text: STREET, type: 'text'},
  {name: 'house_number', text: HOUSE_NUMBER, type: 'number'},
  {name: 'apartment_number', text: APARTMENT_NUMBER, type: 'number'},
  {name: 'zip_code', text: ZIP_CODE, type: 'text'}
];

export default () => getFormControlsDOM(controls);