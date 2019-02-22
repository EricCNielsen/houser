import React, { Component } from 'react';
import axios from 'axios';


class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state= {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleAddressChange=this.handleAddressChange.bind(this)
        this.handleCityChange=this.handleCityChange.bind(this)
        this.handleStateChange=this.handleStateChange.bind(this)
        this.handleZipChange=this.handleZipChange.bind(this)
        this.createHouse=this.createHouse.bind(this)
    }

    handleNameChange(val) { console.log(val)
        this.setState({
        name:val
        })
    }
    handleAddressChange(val) { console.log(val)
        this.setState({
        address:val
        })
    }
    handleCityChange(val) { console.log(val)
        this.setState({
        city:val
        })
    }
    handleStateChange(val) { console.log(val)
        this.setState({
        state:val
        })
    }
    handleZipChange(val) { console.log(val)
        this.setState({
            zip:val
        })
    }
    createHouse() {
        axios.post('/api/house', this.state).then(res => {
            this.props.history.push('/')
        })
    }

    // }
    render() {
        return (
            <div>
                <div class='cancel'>
                    <button onClick={() => this.props.history.push('/')}>Cancel</button>
                </div>
                <div class='form-container'>
                    <div>
                        <p>Property Name</p>
                        <input value={this.state.name} type='text' onChange={(e) => this.handleNameChange(e.target.value)}/>
                    </div>
                    <div>
                        <p>Address</p>
                        <input value={this.state.address} type='text' onChange={(e) => this.handleAddressChange(e.target.value)}/>
                    </div> 
                    <div>
                        <p>City</p>
                        <input value={this.state.city} type='text' onChange={(e) => this.handleCityChange(e.target.value)}/>
                    </div>
                    <div>
                        <p>State</p>
                        <input value={this.state.state} type='text' onChange={(e) => this.handleStateChange(e.target.value)}/>
                    </div>
                    <div>
                        <p>Zip</p>
                        <input value={this.state.zip} type='number' onChange={(e) => this.handleZipChange(e.target.value)}/>
                    </div>
                    <button onClick={this.createHouse}>Create</button>
                </div>
             </div>
        )
    }

}

export default Wizard