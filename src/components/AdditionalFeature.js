import React from 'react';
import { connect } from 'react-redux';

import { ADD_FEATURE, addFeature } from '../actions';


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
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

// connect redux store to AdditionalFeature
export default connect(mapStateToProps,{ addFeature })(AdditionalFeature);
