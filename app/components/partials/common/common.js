import React from 'react';
import {getErrorMessage, LOADING} from '../../../locales';

export const Loading = () => (
  <div>{LOADING}</div>
);

export const ErrorMessage = ({message}) => (
  <div>{getErrorMessage(message)}</div>
);

export const InfoMessage = ({message}) => (
  <div>{message}</div>
);

export const AddressView = ({address: {street, houseNumber, apartmentNumber, city, zipCode}}) => (
  <div>
    <div>{street} {houseNumber}/{apartmentNumber}</div>
    <div>{city}, {zipCode}</div>
  </div>
);
