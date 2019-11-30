import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar/index';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage + 25});
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage - 25});
        this.props.prevStep();
    };

    state= {
        percentage: 35
    };

    render() {
        const { values, handleChange, onChange1 } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />  
                    <h4>Form personal details</h4>
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your city"
                        floatingLabelText="city"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your bio"
                        floatingLabelText="bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin : 15
    }
}

export default FormPersonalDetails
