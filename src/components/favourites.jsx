import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../config';
import Alert from './alert';
import '../style/favourites.css';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      isError: false,
      saveError: false,
    };
  }

  componentDidMount() {
    this.getFavourites();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
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

  handleRemoveFavourite = (favouriteId) => {
    axios.delete(`${apiUrl}/Favourite/${favouriteId}`)
      .then(() => {
        this.getFavourites();
      })
      .catch(() => {
        this.setState({ saveError: true });
      });
  };

  render() {
    return (
      <div className="favourites">
        {this.state.isError && <Alert message="Could not retrieve saved properties! Try again later." />}
        {this.state.saveError && <Alert message="Could not edit saved properties! Try again later." />}
        {
          this.state.favourites.map(favourite => {
            return (
              <div key={favourite._id} favourite-id={favourite._id} className="favourite">
                <span>{favourite.propertyListing.title}</span>
                <button className="remove" onClick={() => this.handleRemoveFavourite(favourite._id)}>Remove</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Favourites;
