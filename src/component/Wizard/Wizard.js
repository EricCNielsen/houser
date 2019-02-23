import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import Step1 from './Stepone'
import Step2 from './Steptwo'
import Step3 from './Stepthree'


function Wizard(props) {
    return (
        <div>
            <div class='cancel'>
                <button onClick={() => props.history.push('/')}>Cancel</button>
            </div>
            <div>
                <Route path='/wizard/step1' component={Step1} />
                <Route path='/wizard/step2' component={Step2} />
                <Route path='/wizard/step3' component={Step3} />
            </div>
        </div>
        )
}


export default Wizard