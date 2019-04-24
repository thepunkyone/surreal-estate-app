import React from 'react';
import '../style/add-property.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Manchester',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        city: '',
        email: '',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({ fields: { ... { [event.target.name]: event.target.value } } });
  };

  render() {
    return (
      <div className="add-property">
        <form>
          <label>
            <span>Title:</span>
            <input name="title" value={this.state.fields.title} type="text" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Type:</span>
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label>
            <span>Bedrooms:</span>
            <input name="bedrooms" value={this.state.fields.bedrooms} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Bathrooms:</span>
            <input name="bathrooms" value={this.state.fields.bathrooms} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Price:</span>
            <input name="price" value={this.state.fields.price} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>City:</span>
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label>
            <span>Email:</span>
            <input name="email" value={this.state.fields.email} type="email" onChange={this.handleFieldChange} />
          </label>
          <button type="submit" onClick={this.handleAddProperty}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
