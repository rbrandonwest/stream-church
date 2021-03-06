import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { fetchUser } from '../actions';
import history from '../history';


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1054262569964-v1iugrojkn4pe3ci9bocbl4666uebkef.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

        // this.props.fetchUsers();

    }
    

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            //Added
            const fetchPromise = fetch(`http://localhost:3001/users/?userId=${this.auth.currentUser.get().getId()}`);
            console.log(this.auth.currentUser.get().getId());
            
            fetchPromise
                .then(response => response.json())
                .then(data => {
                    if (data.length === 0) {
                        console.log("NEW USER")
                        history.push('/users/new')
                    } else {
                        console.log("EXISTING USER")
                    }
                }).then(console.log(this.props.fetchUser(`/?userId=${this.auth.currentUser.get().getId()}`)))
                
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div className="item">
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut, fetchUser })(GoogleAuth);