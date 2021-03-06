import * as React from 'react';
import PropTypes from 'prop-types';
import './InputControls.scss';

const InputControl = ({name, text, type, value, required}) => (
  <div className={`form-row ${type}`}>
    <label htmlFor={name} className="">{text}</label>
    <input id={name} required={required} type={type} className=""
           defaultValue={value} name={name} placeholder={text}/>
  </div>
);

InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool
};

InputControl.defaultProps = {required: true};

const FileInputControl = ({name, text, multiple}) => (
  <div className="form-row">
    <label htmlFor={name} className="">{text}</label>
    {
      !multiple &&
      <input id={name} type="file" className="" name={name} placeholder={text} accept="image/*"/>
    }
    {
      multiple &&
      <input id={name} type="file" className="" name={name} placeholder={text} accept="image/*" multiple/>
    }
  </div>
);

FileInputControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  multi: PropTypes.bool
};

const TextAreaControl = ({name, text, value}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label">{text}</label>
    <textarea name={name} id={name}>{value}</textarea>
  </div>
);

TextAreaControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string
};

const SubmitControl = ({text}) => (
  <input type="submit" className="button" value={text}/>
);

SubmitControl.propTypes = {
  text: PropTypes.string.isRequired
};

export {InputControl, FileInputControl, SubmitControl, TextAreaControl};