import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => {props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

// connect redux store to AddedFeature
export default connect(null,{ removeFeature })(AddedFeature);
