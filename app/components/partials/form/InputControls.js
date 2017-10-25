import * as React from 'react';
import PropTypes from 'prop-types';

const InputControl = ({name, text, type, value}) => (
  <div className="form-row">
    <label htmlFor={name} className="">{text}</label>
    <input id={name} required type={type} className=""
           defaultValue={value} name={name} placeholder={text}/>
  </div>
);

InputControl.PropTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

const FileInputControl = ({name, text, multiple}) => (
  <div className="form-row">
    <label htmlFor={name} className="">{text}</label>
    {
      !multiple &&
      <input id={name} type="file" className="" name={name} placeholder={text}/>
    }
    {
      multiple &&
      <input id={name} type="file" className="" name={name} placeholder={text} multiple/>
    }
  </div>
);

FileInputControl.PropTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  multi: PropTypes.bool
};

const SubmitControl = ({text}) => (
  <input type="submit" className="" value={text}/>
);

SubmitControl.PropTypes = {
  text: PropTypes.string.isRequired
};

export {InputControl, FileInputControl, SubmitControl};