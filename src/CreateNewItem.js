import React from 'react';
import PropTypes from 'prop-types';

class CreateNewItem extends React.Component {
	state = {
      value: '',
    };

	handleChange = event => {
      this.setState({ value: event.target.value });
    };

	addItem = event => {
      event.preventDefault();
      this.props.onAddItem(this.state.value);
    };

	inputIsEmpty = () => {
      return this.state.value === '';
    };
};

export default CreateNewItem;