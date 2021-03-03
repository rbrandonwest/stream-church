import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ChurchForm extends React.Component {
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
                <Field name="churchName" component={this.renderInput} label="Enter Church Name" />
                <Field name="location" component={this.renderInput} label="Enter Church Location" />
                <Field name="pastor" component={this.renderInput} label="Enter Lead Pastor" />
                <Field name="description" component={this.renderInput} label="Enter a Description" />
                <Field name="denomination" component={this.renderInput} label="Enter a Denomination" />
                <Field name="website" component={this.renderInput} label="Enter a Church Website" />
                <Field name="channelName" component={this.renderInput} label="Enter Church Channel Name" />
                <Field name="channelId" component={this.renderInput} label="Enter Channel ID" />
                <Field name="thumbnail" component={this.renderInput} label="Paste a Thumbnail Link" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.churchName) {
        errors.churchName = 'You must enter a Church Name'
    }

    if (!formValues.location) {
        errors.location = 'You must enter a Church Location'
    }

    if (!formValues.pastor) {
        errors.location = 'You must enter a Lead Pastor'
    }

    if (!formValues.description) {
        errors.location = 'You must enter a Church Description'
    }

    if (!formValues.denomination) {
        errors.location = 'You must enter a Church Denomination'
    }


    if (!formValues.website) {
        errors.website = 'You must enter a Church Website'
    }


    if (!formValues.channelName) {
        errors.channelName = 'You must enter a Church Channel Name'
    }

    if (!formValues.channelId) {
        errors.channelId = 'You must enter a Channel ID'
    }

    if (!formValues.thumbnail) {
        errors.thumbnail = 'You must enter a Thumbnail'
    }

    return errors
}

export default reduxForm({
    form: 'churchForm',
    validate
})(ChurchForm);