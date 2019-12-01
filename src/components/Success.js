import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {

    back = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage - 20});
        this.props.prevStep();
    };
    state= {
        percentage: 100
    };
    render() {
        return (
            <div className='successMessage'>
            <h1>Great! Your work request hasbeen submitted</h1>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div className='successMessageContainer'>
                            <div className="bg-apply-success"></div>
                            <p>Work Request Id: #9E9E9EG7823</p>
                            <h3>Sit back and Relax while we do the work in finding the right Handyman service for you!</h3>
                            <div className='actionButton'>
                                <RaisedButton
                                    label="View Summary"
                                    primary={false}
                                    style={styles.back}
                                    onClick={this.back}
                                    id="backToSummary"
                                />
                            </div>
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default Success
const styles = {
    continue: {
        margin : 15

    },
    back:{
        margin : 15,
        color:'#0275D8',
        borderColor:'#03A9F4',
        backgroundColor:'#fff'
    }

}