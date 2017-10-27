import React from 'react';
import {CITY, STREET, HOUSE_NUMBER, APARTMENT_NUMBER, ZIP_CODE} from '../../../locales';
import {getFormControlsDOM} from '../../../utils/form';

const controls = [
  {name: 'address[city]', text: CITY, type: 'text', value:'dupa'},
  {name: 'address[street]', text: STREET, type: 'text', value:'dupa'},
  {name: 'address[houseNumber]', text: HOUSE_NUMBER, type: 'number', value: 666},
  {name: 'address[apartmentNumber]', text: APARTMENT_NUMBER, type: 'number', value:666},
  {name: 'address[zipCode]', text: ZIP_CODE, type: 'text', value:'dupa'}
];

export default () => getFormControlsDOM(controls);