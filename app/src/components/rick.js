import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchJackson } from "../store/actions/actions";
// import Morty from './morty'

const MichaelJackson = props => {
  useEffect(() => {
    props.fetchJackson();
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {/* <Morty/> */}
      <div className="jacksonCard">
        {props.isFetching && (
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {props.quote.name && <h3>Name: {props.quote.name}</h3>}
        {props.quote.image && <img src={props.quote.image}/>}
        {props.quote.gender && <h3>Gender: {props.quote.gender}</h3>}
        {props.quote.species && <h3>Species: {props.quote.species}</h3>}
        {props.quote.type && <h3>Type: {props.quote.type}</h3>}
        {props.quote.created && <h3>When was he created: {props.quote.created}</h3>}
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    quote: state.jackson.quote,
    isFetching: state.jackson.isFetching,
    error: state.jackson.error
  };
};

export default connect(
  mapStateToProps,
  { fetchJackson }
)(MichaelJackson);
