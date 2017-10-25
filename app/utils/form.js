import React from 'react';
import serialize from 'form-serialize';
import {InputControl, FileInputControl} from '../components/partials/form/InputControls';

export const formatData = formNode => {
  const data = serialize(formNode, {hash: true});
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));

  return formData;
};

export const getFormControlsDOM = formControlsData => (
  formControlsData.map(item =>
    item.type === 'file'
      ? <FileInputControl name={item.name} text={item.text} key={item.name} multiple={item.multiple}/>
      : <InputControl name={item.name} text={item.text} type={item.type} key={item.name}/>
  )
);