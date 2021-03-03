import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import SearchBar from './SearchBar';
import '../styles/Header.css'

// class Header extends React.Component {
//     componentDidMount() {
//         this.props.fetchUser(this.auth.currentUser.get().getId());
//         console.log(this.props)
//     }

//     render() {
//     return (
//         <div className="ui secondary pointing menu">
//             <Link to="/" className="item">
//                 <img src="../../images/logo.png" style={{width: '100px'}} />
//             </Link>
//             <div className="right menu">
//                 <SearchBar />
//                 <Link to="/churches" className="item">
//                     All Churches In DB
//                 </Link>
//                 <Link to="/churches/new" className="item">
//                     Add Church To DB
//                 </Link>
//                 Hello, {this.props.user.firstName}
//                 <GoogleAuth />
//             </div>
//         </div>
//     )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     return { user: state.users[this.auth.currentUser.get().getId()] }
// }

// export default connect(mapStateToProps, { fetchUser })(Header);






class Header extends React.Component {

    render() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <img src="../../images/logo.png" alt="logo image" style={{width: '100px'}} />
            </Link>
            <div className="right menu">
                <SearchBar />
                <Link to="/churches" className="item">
                    All Churches In DB
                </Link>
                <Link to="/churches/new" className="item">
                    Add Church To DB
                </Link>
                {/* Hello, {this.props.user.firstName} */}
                <GoogleAuth />
            </div>
        </div>
    )
    }
}


export default Header;