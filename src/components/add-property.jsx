import React from 'react';
import '../style/add-property.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Manchester',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({ fields: { [event.target.name]: event.target.value } });
  };

  render() {
    return (
      <div className="add-property">
        <form>
          <label>
            Title:
            <input name="title" value={this.state.fields.title} type="text" onChange={this.handleFieldChange} />
          </label>
          <label>
            Type:
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
            Bedrooms:
            <input type="number" />
          </label>
          <label>
            Bathrooms:
            <input type="number" />
          </label>
          <label>
            Price:
            <input type="number" />
          </label>
          <label>
            City:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit" onClick={this.handleAddProperty}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
