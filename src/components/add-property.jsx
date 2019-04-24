import React from 'react';
import '../style/add-property.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({ fields: { title: event.target.value } });
    console.log(this.state.fields);
  };

  render() {
    return (
      <div className="add-property">
        <form>
          <label>
            Title:
            <input type="text" />
          </label>
          <label>
            Type:
            <input type="text" />
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
          <button type="sumbit" onSubmit={this.handleAddProperty}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
