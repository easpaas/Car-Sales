import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => {props.removeFeature(props.feature.id)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

// connect redux store to AddedFeature
export default connect(mapStateToProps,{ removeFeature })(AddedFeature);
