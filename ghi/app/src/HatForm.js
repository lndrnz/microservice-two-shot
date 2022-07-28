import React from 'react';

class HatForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            fabric: '',
            style_name: '',
            color: '',
            picture_url: '',
            location: '',
            locations: [],
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFabricChange = this.handleFabricChange.bind(this)
        this.handleStyleNameChange = this.handleStyleNameChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handlePictureURLChange = this.handlePictureURLChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.locations;
        console.log(data);

        const hatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
          const newHat = await response.json();
          console.log(newHat);

          const cleared = {
            name: '',
            fabric: '',
            style_name: '',
            color: '',
            picture_url: '',
            location: '',
          };
          this.setState(cleared);
        }
    }
    
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleFabricChange(event) {
        const value = event.target.value;
        this.setState({fabric: value})
    }

    handleStyleNameChange(event) {
        const value = event.target.value;
        this.setState({style_name: value})
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }

    handlePictureURLChange(event) {
        const value = event.target.value;
        this.setState({picture_url: value})
    }

    handleLocationChange(event) {
        const value = event.target.value;
        this.setState({location: value})
    }    

    async componentDidMount() {
        const url = 'http://localhost:8100/api/locations/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();

          this.setState({locations: data.locations});

        }
      }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new hat!</h1>
                        <form onSubmit={this.handleSubmit} id="create-hat-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleFabricChange} value={this.state.fabric} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control"/>
                            <label htmlFor="fabric">Fabric</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleStyleNameChange} value={this.state.style_name} placeholder="Style Name" required type="text" name="style_name" id="style_name" className="form-control"/>
                            <label htmlFor="style_name">Style Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handlePictureURLChange} value={this.state.picture_url} placeholder="Picture URL" type="url" name="picture_url" id="picture_url" className="form-control"/>
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleLocationChange} value={this.state.location} required name="location" id="location" className="form-select">
                            <option value="">Choose a location</option>
                            {this.state.locations.map(location => {
                                return (
                                    <option key={location.href} value={location.href}>
                                    {location.closet_name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default HatForm;