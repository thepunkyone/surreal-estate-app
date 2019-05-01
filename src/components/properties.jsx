import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropertyCard from './property-card';
import Alert from './alert';
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
    const url = 'http://localhost:3000/api/v1/PropertyListing/';
    axios.get(url)
      .then(({ data: properties }) => {
        this.setState({ properties });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.isError && <Alert message="Server error! Could not retrieve properties." />}
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
      </Fragment>
    );
  }
}

export default Properties;
