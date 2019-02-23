import React, { Component } from 'react'
import {connect} from 'react-redux'

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    handleChange(val) {
        this.setState({
            img:val
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>Insert Image URL:</p>
                    <input value={this.state.img} type='text' onChange={(e) => this.handleChange(e.target.value)} />
                </div>
                <button onClick={() => this.props.history.push('/wizard/step3')}>Next Step</button>
            </div>

        )
    }
}

export default Step2