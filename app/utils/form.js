import React from 'react';
import serialize from 'form-serialize';
import {InputControl, FileInputControl, TextAreaControl} from '../components/partials/form/InputControls';

export const formatData = (formNode, dataName = 'data') => {
  const data = serialize(formNode, {hash: true});
  const formData = new FormData();
  formData.append(dataName, JSON.stringify(data));

  return formData;
};

export const getFormControlsDOM = formControlsData => (
  formControlsData.map(item => {
    switch (item.type) {
      case 'file':
        return <FileInputControl name={item.name} text={item.text} key={item.name} multiple={item.multiple}/>;
      case 'textarea':
        return <TextAreaControl name={item.name} text={item.text} key={item.name} value={item.value}/>;
      default:
        return <InputControl name={item.name} text={item.text} type={item.type}
                             key={item.name} value={item.value} required={item.required}/>;
    }
  })
);

export const formatItems = items =>
  items.map(item => ({value: item.id, name: item.name, id: item.id}));