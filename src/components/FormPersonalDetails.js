import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from '../ProgressBar/index';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//   },
// }));



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
        percentage: 25,
        value: 0,
        setValue:0
    };
    
    // handleChangeTab = (event, newValue) => {
    //     setValue(newValue);
    // };
    
    handleChangeTab = newValue => e => {
        
        e.setValue = newValue;
        
        this.setValue({value : newValue})// setValue(newValue);
    }
    render() {
        const { values, value} = this.props;
        
          
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ProgressBar percentage={this.state.percentage} />  
                    <h4 className='titleDesc'>Choose the services you need</h4>
                    <div className='tabContainer'>
                        <Tabs
                          value={values.value}
                          onChange={this.handleChangeTab}
                          indicatorColor="primary"
                          textColor="primary"
                          variant="scrollable"
                          scrollButtons="auto"
                        >
                          <Tab label="General" />
                          <Tab label="Cleaning" />
                          <Tab label="Installation" />
                          <Tab label="Plumbing" />
                          <Tab label="Painting" />
                          <Tab label="Others" />
                          <Tab label="more" />
                        </Tabs>
                        {value === 0 && <TabContainer>General</TabContainer>}
                        {value === 1 && <TabContainer>Cleaning</TabContainer>}
                        {value === 2 && <TabContainer>Installation</TabContainer>}
                        {value === 3 && <TabContainer>Plumbing</TabContainer>}
                        {value === 4 && <TabContainer>Painting</TabContainer>}
                        {value === 5 && <TabContainer>Others</TabContainer>}
                        {value === 6 && <TabContainer>more</TabContainer>}
                    </div>
                    
                    <div className="bg-apply bg-apply-service">

                    </div>
                    <div className='actionButton'>
                        <RaisedButton
                            label="Details"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                        <RaisedButton
                            label="Location"
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

export default FormPersonalDetails