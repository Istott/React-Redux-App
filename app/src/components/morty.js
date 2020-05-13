import React from 'react';
import { connect } from "react-redux";
import Rick from './rick';

const Morty = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
          {props.data.map(item => (
            <Rick key={item.id} data={item} />
          ))}
        <p>You can purchase items from the store.</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    car: state.car
  };
};

export default connect(
  mapStateToProps,
  {}
)(Morty);