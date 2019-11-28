import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar/index';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.setState ({percentage: this.state.percentage + 25});
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage - 25});
        this.props.prevStep();
    };

    state= {
        percentage: 60
    };

    render() {
        const { values: {firstName,lastName,email,occupation,city,bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />  
                    <h4>Confirm User Details</h4>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText= { firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText= { lastName }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText= { email }
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText= { occupation }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText= { city }
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText= { bio }
                        />                        
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
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

export default Confirm
