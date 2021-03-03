import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="firstName" component={this.renderInput} label="Enter Your First" />
                <Field name="lastName" component={this.renderInput} label="Enter Your Last Name" />
                <Field name="email" component={this.renderInput} label="Enter Your Email" />
                <Field name="location" component={this.renderInput} label="Enter Your Location (City, ST)" />
                <Field name="avatar" component={this.renderInput} label="Enter an Avatar (URL)" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.firstName) {
        errors.churchName = 'You must enter your First Name'
    }

    if (!formValues.lastName) {
        errors.location = 'You must enter your Email'
    }

    if (!formValues.email) {
        errors.location = 'You must enter your Last Name'
    }

    if (!formValues.location) {
        errors.location = 'You must enter your Location'
    }

    if (!formValues.avatar) {
        errors.location = 'You must enter an Avatar (URL)'
    }


    return errors
}

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);