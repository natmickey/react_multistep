import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { makeStyles } from '@material-ui/core/styles'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage+25});
        this.props.nextStep();
    }

    back = e => {

    };

    state= {
        percentage: 10
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <ProgressBar percentage={this.state.percentage} />
                    <h4>Tell us what you are looking for?</h4>
                    <TextField
                        hintText="Title"
                        label="Title"
                        floatingLabelText="Title"
                        placeholder="I'd like to Paint my home for the Christmas"
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <br/>
                    <TextField
                        hintText="Description"
                        floatingLabelText="Description"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Cancel"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = makeStyles(theme => ({
    button: {
        margin : 15,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

export default FormUserDetails
