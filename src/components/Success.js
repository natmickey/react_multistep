import React, { Component } from 'react';
import MuiThemeProvider from 
'@material-ui/core/MuiThemeProvider';
import ProgressBar from '../ProgressBar/index';

export class Success extends Component {

    state= {
        percentage: 100
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />
                    <h1> Thank you for your submission</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
