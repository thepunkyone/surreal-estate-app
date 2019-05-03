import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './property-card';
import Alert from './alert';
import apiUrl from '../config';
import '../style/properties.css';

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
    };
  }

  componentDidMount() {
    const url = `${apiUrl}/PropertyListing/`;
    axios.get(url)
      .then(({ data: properties }) => {
        this.setState({ properties });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`${apiUrl}/PropertyListing${search}`)
        .then(({ data: properties }) => {
          this.setState({ properties });
        })
        .catch(() => {
          this.setState({ isError: true });
        });
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.isError && <Alert message="Server error! Could not retrieve properties." />}
        <div className="flex-wrapper">
          <div className="city-search">
            <span>Filter by city</span>
            <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
            <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
            <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
            <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
          </div>
          <div className="properties">
            {this.state.properties.map(property => {
              return (
                <PropertyCard
                  key={property._id}
                  {...property} //use of spread operator from walkthrough
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Properties;
