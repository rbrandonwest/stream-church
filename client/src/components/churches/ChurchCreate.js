import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createChurch } from '../../actions';

class ChurchCreate extends React.Component {
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
        this.props.createChurch(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="churchName" component={this.renderInput} label="Enter Church Name" />
                <Field name="zipcode" component={this.renderInput} label="Enter Church Zip Code" />
                <Field name="channelName" component={this.renderInput} label="Enter Church Channel Name" />
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

    if (!formValues.zipcode) {
        errors.zipcode = 'You must enter a Church Zip Code'
    }

    if (!formValues.channelName) {
        errors.channelName = 'You must enter a Church Channel Name'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'churchCreate',
    validate
})(ChurchCreate);

export default connect(null, { createChurch })(formWrapped);