import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => {
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };
  
  
};

export default DeleteLastItem;