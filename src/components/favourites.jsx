import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../config';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      isError: false,
      saveError: false,
    };
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

  handleRemoveProperty = (propertyId) => {
    const favourite = this.state.favourites.find(property => {
      return property.propertyListing._id === propertyId;
    });
    axios.delete(`${apiUrl}/Favourite/${favourite._id}`)
      .then(() => {
        this.getFavourites();
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
      })
      .catch(() => {
        this.setState({ saveError: true });
      });
  };

  render() {
    return (
      <div>favourites</div>
    );
  }
}

export default Favourites;