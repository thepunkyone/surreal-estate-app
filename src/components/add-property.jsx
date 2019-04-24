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
    console.log(this.state.fields);
  };

  render() {
    return (
      <div className="add-property">
        <form onSubmit={this.handleAddProperty}>
          <button type="sumbit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
