import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CustomSelect.scss';

const Item = ({item, onSelect}) =>
  <div className="item" onClick={onSelect} value={item.value}>{item.name}</div>;

class CustomSelect extends React.Component {
  constructor() {
    super();
    this.state = {expanded: false, selected: null};
  }

  componentWillMount() {
    this.setState({selected: this.props.items[0]});
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = ({target}) => {
    if (!this.customSelect.contains(target)) {
      this.setState({expanded: false});
    }
  };

  getList() {
    return this.props.items.map(item => <Item item={item} key={item.name + item.id} onSelect={this.changeSelectedItem}/>);
  }

  toggle = () => this.setState({expanded: !this.state.expanded});

  changeSelectedItem = ({target}) => {
    const value = target.getAttribute('value');
    const selected = this.props.items.find(item => item.value == value);

    this.setState({expanded: !this.state.expanded, selected});
  };

  render() {
    const {state: {selected, expanded}, props: {name, label}} = this;
    const iconClasses = classNames('icon', {
        'icon-up-dir': expanded,
        'icon-down-dir': !expanded
      }),
      expandedItemClasses = classNames('dropdown form-input-control', {'expanded': expanded});

    return (
      <div className="CustomSelect form-row" ref={el => this.customSelect = el}>
        <input type="hidden" className="form-input-control" name={name} value={selected.value}/>
        <label htmlFor={name} className="form-label">{label}</label>
        <div className={expandedItemClasses}>
          <div className="selected" tabIndex={0} onClick={this.toggle}>
            <span className="selectText">{selected.name}</span>
            <span className={iconClasses}/>
          </div>
          <div className="list">
            {this.getList()}
          </div>
        </div>
      </div>
    );
  }
}

CustomSelect.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CustomSelect;