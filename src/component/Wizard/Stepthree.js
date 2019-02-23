import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateMortgage, clear } from './../../ducks/reducer'

class Step3 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            mortgage:0,
            recommended:0,
            rent:0,
        }
        this.handleMortgage=this.handleMortgage.bind(this)
        this.handleRent=this.handleRent.bind(this)
        this.createHouse=this.createHouse.bind(this)
    }

    componentDidMount() {
        let { mortgage, rent } = this.props
        this.setState({
            mortgage,
            rent
        })
    }

    handleMortgage(val) {
        this.setState({
            mortgage:val
        })
    }
    handleRent(val) {
        this.setState({
            rent:val
        })
    }
    createHouse() {
        let { name, address, city, state, zip, img } = this.props
        let house = {
            name,
            address,
            city,
            state,
            zip,
            img,
            ...this.state
        }
        axios.post('/api/house', house).then(res => {
            this.props.clear()
            this.props.history.push('/')
        })
    }

    render () {
        return(
            <div>
                <div>
                    <p>Mortgage Amount:</p>
                    <input type='number' value={this.state.mortgage} onChange={(e) => this.handleMortgage(e.target.value)} />
                </div>
                <div>
                    <p>Monthly Rent:</p>
                    <input type='number' value={this.state.rent} onChange={(e) => this.handleRent(e.target.value)} />
                </div>

                <button onClick={this.createHouse}>Create</button>

            </div>
        )

    }
}

function mapStateToProps(state) {
    return state
}

export default connect (mapStateToProps, {updateMortgage, clear})(Step3)