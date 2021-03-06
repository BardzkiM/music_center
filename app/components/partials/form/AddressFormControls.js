import React from 'react';
import {CITY, STREET, HOUSE_NUMBER, APARTMENT_NUMBER, ZIP_CODE} from '../../../locales';
import {getFormControlsDOM} from '../../../utils/form';

const controls = [
  {name: 'address[city]', text: CITY, type: 'text'},
  {name: 'address[street]', text: STREET, type: 'text'},
  {name: 'address[houseNumber]', text: HOUSE_NUMBER, type: 'number'},
  {name: 'address[apartmentNumber]', text: APARTMENT_NUMBER, type: 'number'},
  {name: 'address[zipCode]', text: ZIP_CODE, type: 'text'}
];

const addDefaultValues = values =>
  controls.forEach(control =>
    control.value = values[control.name.replace(/.*\[|]/gi, '')]
  );

export default ({values = {}}) => {
  addDefaultValues(values);
  return getFormControlsDOM(controls)
};