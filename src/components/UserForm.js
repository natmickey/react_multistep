import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import DatePicker from 'material-ui/DatePicker/DatePicker'
import moment from 'moment'

export class UserForm extends Component {
    state= {
        step: 1,
        title: '',
        description: '',
        startDate: new Date(),
        endDate: moment()
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,

        });
    }

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    onChangeStart= (e) => {
        
        console.log('this.state.startDate',this.state.startDate);
        if (typeof e.target != 'undefined'){
        this.setState({
            startDate: e.target.value,
        });
    }
    };

   
    onChangeEnd= (e) =>{
        this.setState({
            endDate: e.target.value,
        });
    }

    // Handle fields change
    handleChange = input  => e  =>{
        this.setState({[input]: e.target.value});
        //this.setState({ keywords: e.target.value });
    }

    handleChangeDate(value, e) {
        console.log(value); // this will be a moment date object
        console.log(e.target.value); // this will be a string value in datepicker input field
    }

    render() {
        const { step } = this.state;
        const { title, description, startDate, endDate, percentage} = this.state;
        const values = { title, description, startDate, endDate, percentage}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangeDate= {this.handleChangeDate}
                        //onChangeStart= {this.onChangeStart}
                        onChangeEnd= {this.onChangeEnd}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangeDate={this.handleChangedate}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success
                    />
                )
            default:
                break
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
