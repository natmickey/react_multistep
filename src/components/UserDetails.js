import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
// import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar';

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.setState ({percentage: this.state.percentage+20});
        this.props.nextStep();
    }

    back = e => {

    };

    state= {
        percentage: 0
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                <ProgressBar percentage={this.state.percentage} />
                    <h4 className='titleDesc'>Tell us what you are looking for?</h4>
                    <TextField
                        label="Title"
                        placeholder="I'd like to Paint my home for the Christmas"
                        autoFocus= 'true'
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                        className='required textInput'
                        id='titleTxtBox'
                    />
                    <br/>
                    <TextField
                        label='Description'
                        placeholder="I could add more details on paintingmy home. I'd like to paint in santa theme"
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                        className='required textInput'
                        variant="outlined"
                        color="secondary"
                        multiline
                        rowsMax="4"
                        notched = 'false'
                        id='descTxtBox'
                    />
                    <br/>
                    <p className='dateTitle'>Expected Timeline</p>
                    <div className='dateContainer'>
                        <TextField
                            label = "Start Date:"
                            name= "Start Date"
                            hintText="Start Date"
                            floatingLabelText="Start Date"
                            type="date"
                            onChange={handleChange('startDate')}
                            defaultValue={values.startDate}
                            InputLabelProps={{
                                shrink: true,
                              }}
                            id='stDateTxtBox'
                        />
                        <TextField
                            label = "End Date:"
                            name= "End Date"
                            hintText="End Date"
                            floatingLabelText="End Date"
                            type="date"
                            onChange={handleChange('endDate')}
                            defaultValue={values.endDate}
                            InputLabelProps={{
                                shrink: true,
                              }}
                            id='endDateTxtBox'
                        />
                    </div>
                    <br/>
                    <br/>
                    <div className='actionButton'>
                        <RaisedButton
                            label="Cancel"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                            id= 'cancelButton'
                        />
                        <RaisedButton
                            label="Services"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                            id= 'servicesButton'
                        />
                    </div>
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
        width: 500,
    }
}));


export default UserDetails
