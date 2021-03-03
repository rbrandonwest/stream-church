import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchChurch, editChurch } from '../../actions';
import ChurchForm from './ChurchForm';

class ChurchEdit extends React.Component {
    componentDidMount() {
        this.props.fetchChurch(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editChurch(this.props.match.params.id, formValues);
    }
    
    render() {
        if (!this.props.church) {
            return <div>Loading...</div>
        }
    return (
        <div>
            <h3>Edit a Church</h3>
            <ChurchForm
                initialValues={_.pick(this.props.church, 'churchName', 'location', 'pastor', 'description', 'website', 'denomination', 'channelName', 'channelId', 'thumbnail')}
                onSubmit={this.onSubmit}
            />
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { church: state.churches[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchChurch, editChurch })(ChurchEdit);