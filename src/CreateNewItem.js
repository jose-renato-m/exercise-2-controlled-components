import React from 'react';
import PropTypes from 'prop-types';

class CreateNewItem extends React.Component {
	state = {
      value: '',
    };

	handleChange = event => {
      this.setState({ value: event.target.value });
    };
};

export default CreateNewItem;