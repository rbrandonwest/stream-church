import React from 'react';
import { connect } from 'react-redux';
import { createChurch } from '../../actions';
import ChurchForm from './ChurchForm';

class ChurchCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createChurch(formValues);
    }

    render() {
        return (
            <div>
                <h3>Add a Chucrh</h3>
                <ChurchForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null, { createChurch })(ChurchCreate);