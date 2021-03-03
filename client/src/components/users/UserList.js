import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../actions'

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    // renderAdmin(church) {
    //     if (church.userId === this.props.currentUserId) {
    //         return <div>Edit/Delete</div>
    //     }
    // }

    renderList() {
        if (this.props.isSignedIn) {
        return this.props.users.map(user => {
            return (
                <div className="item" key={user.id}>
                    <div className="right floated content">
                        <Link className="ui button primary" to={`/users/edit/${user.id}`}>Edit</Link>
                        <button className="ui button negative">Delete</button>
                    </div>

                    <div className="header">{user.firstName}</div>
                    <div className="lastName" style={{color: 'gray', fontSize: '10px'}}>{user.lastName}</div>
                    <div className="location">{user.location}</div>
                </div>
            )
        })
    }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/users/new" className="ui button primary">
                        Add User
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: Object.values(state.users), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { fetchUsers })(UserList);