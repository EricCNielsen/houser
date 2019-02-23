import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';


class Dashboard extends Component {
    constructor (props) {
        super(props)

        this.state = {
        houses: []
        }
        this.getHouses=this.getHouses.bind(this)
        this.deleteHouse=this.deleteHouse.bind(this)
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houses').then (resp => {
            this.setState({
                houses: resp.data
            })
        })
    }
    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(res => 
            this.getHouses()
        )
    }

    render() {
        return (
            <div className='dash'>
                <div>
                    <button onClick={() => this.props.history.push('/wizard/step1')}>Add New Property</button>
                </div>
                <div>
                    {this.state.houses.map(el => {
                       return <House 
                            house={el} 
                            deleteHouse={this.deleteHouse} 
                            key={el.id} />
                    })}
                </div>
            </div>

        )
    }   

}

export default Dashboard