import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import FormLocation from './location'
import FormContact from './contact'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state= {
        step: 1,
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        value:''
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
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
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { title, description, startDate, endDate} = this.state;
        const values = { title, description, startDate, endDate}

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
                        <FormLocation
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 4:
                    return (
                        <FormContact 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    )
            case 5:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Success prevStep={this.prevStep} />
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
