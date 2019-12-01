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
        percentage: 100
    };

    render() {
        const { values: {title,description} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />  
                    <h4 className='titleDesc'>Here is your work Summary</h4>
                    <List className='summaryListContainer'>
                        <ListItem
                            primaryText = {title}
                        />
                        <ListItem
                            primaryText= { description }
                        />
                        
                    </List>
                    <div className="bg-apply bg-apply-summary"></div>
                    <div className='actionButton'>
                        <RaisedButton
                            label="Contact"
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

export default Confirm
