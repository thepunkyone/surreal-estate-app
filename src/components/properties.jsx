import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import PropertyCard from './property-card';
import Alert from './alert';
import apiUrl from '../config';
import '../style/properties.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      favourites: [],
      search: '',
      isError: false,
      saveError: false,
    };
  }

  buildQueryString = (operation, valueObj) => {
    const { search } = this.props.location;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encoding: false });
  };

  checkFavourite = (propertyId) => {
    return this.state.favourites.some(favourite => favourite.propertyListing._id === propertyId);
  };

  componentDidMount() {
    this.getProperties();
    const { userId } = this.props;
    if (userId !== null) {
      this.getFavourites();
    }
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    const { userId } = this.props;
    if (prevProps.location.search !== search) {
      axios.get(`${apiUrl}/PropertyListing/${search}`)
        .then(({ data: properties }) => {
          this.setState({ properties });
        })
        .catch(() => {
          this.setState({ isError: true });
        });
    }

    if (userId !== prevProps.userId) {
      this.getFavourites();
    }
  }

  getFavourites = () => {
    axios.get(`${apiUrl}/Favourite/?populate=propertyListing`)
      .then(({ data }) => {
        const favourites = data.filter(favourite => favourite.fbUserId === this.props.userId);
        this.setState({ favourites });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  getProperties = () => {
    axios.get(`${apiUrl}/PropertyListing/`)
      .then(({ data: properties }) => {
        this.setState({ properties });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  handleRemoveProperty = (propertyId) => {
    const favourite = this.state.favourites.find(property => {
      return property.propertyListing._id === propertyId;
    });
    axios.delete(`${apiUrl}/Favourite/${favourite._id}`)
      .then(() => {
        this.getFavourites();
        this.getProperties();
      })
      .catch(() => {
        this.setState({ saveError: true });
      });
  };

  handleSaveProperty = (propertyId) => {
    axios.post(
      `${apiUrl}/Favourite/`,
      {
        propertyListing: propertyId,
        fbUserId: this.props.userId,
      }
    )
      .then(() => {
        this.getFavourites();
        this.getProperties();
      })
      .catch(() => {
        this.setState({ saveError: true });
      });
  };


  handleSearch = (event) => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };

  render() {
    return (
      <Fragment>
        {this.state.isError && <Alert message="Server error! Could not retrieve properties." />}
        {this.state.saveError && <Alert message="Server error! Could not edit saved properties." />}
        <div className="flex-wrapper">
          <div className="sort-fields">
            <form className="search-form" onSubmit={this.handleSearch}>
              <input
                type="text"
                value={this.state.search}
                onChange={event => this.setState({ search: event.target.value })}
              />
              <button type="submit" value="Submit">
                <FontAwesomeIcon icon="search" className="search-icon" />
              </button>
            </form>
            <span className="filter-title">Filter by city</span>
            <Link to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
            <Link to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
            <Link to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
            <Link to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
            <span className="filter-title">Sort by</span>
            <Link to={this.buildQueryString('sort', { price: 1 })}>Price Ascending</Link>
            <Link to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
          </div>
          <div className="properties">
            {this.state.properties.map(property => {
              return (
                <PropertyCard
                  userId={this.props.userId}
                  key={property._id}
                  onSaveProperty={this.handleSaveProperty}
                  onRemoveProperty={this.handleRemoveProperty}
                  isFavourite={this.checkFavourite(property._id)}
                  {...property} // use of spread operator from walkthrough
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
