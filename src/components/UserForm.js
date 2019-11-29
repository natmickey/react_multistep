import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import DatePicker from 'material-ui/DatePicker/DatePicker'

export class UserForm extends Component {
    state= {
        step: 1,
        title: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(+10),
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

    // Handle fields change
    handleChange = input => e => {
        //this.setState({[input]: e.target.value});
        //this.setState({ keywords: e.target.value });
        this.setState({
            [input]: e.target.value
        });
    }

    handleChangeDate = date => e => {
        this.setState({
          dueDate: date,
          startDate: date
        }, () => console.log(this.state.dueDate));
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
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
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
