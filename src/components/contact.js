import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar/index';

export class FormContact extends Component {
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
        percentage: 75,
    };
    
    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />  
                    <h4 className='titleDesc'>Choose the Contact Information</h4>
                    
                    <div className="bg-apply bg-apply-contact"></div>
                    <div className='actionButton'>
                        <RaisedButton
                            label="Location"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                        <RaisedButton
                            label="Preview"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        
                    </div>
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

export default FormContact;