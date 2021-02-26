import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'
import { fetchChurch } from '../actions';


class PlayerPage extends React.Component {

    componentDidMount() {
        this.props.fetchChurch(this.props.match.params.id);
    }

    render() {
        if (!this.props.church) {
            return <div>Loading...</div>
        }
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <div className="ui segment">
                                <div className="ui embed">
                                    <iframe title="video player" src="https://www.youtube.com/embed/pkJnyZvk1MM&ab_channel=CoralRidge" />
                                </div>
                            </div>
                        </div>
                        <div className="five wide column">
                        <div className="ui">
                            <h2 className="ui header">{this.props.church.churchName}</h2>
                            <h4>2K Members</h4>
                            <br />
                            <p>{this.props.church.description}</p>
                            <h4>{this.props.church.location}</h4>
                            <h4>Pastor: {this.props.church.pastor}</h4>
                            <h4>Website: <span><a href={`https://${this.props.church.website}`}>{this.props.church.website}</a></span></h4>
                            <button className="ui button">Visiting</button>
                            <button className="ui button">Home Church</button>
                        </div>
                        </div>
                    </div>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <div className="ui segment">
                                <Comments />
                            </div>
                        </div>
                        <div className="five wide column">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
        }
}

const mapStateToProps = (state, ownProps) => {
    return { church: state.churches[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchChurch })(PlayerPage);