import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChurches } from '../actions'

class VidList extends React.Component {
    componentDidMount() {
        this.props.fetchChurches();
    }

    renderList() {
        return this.props.churches.map(church => { //Maybe use .slice(0,4)
            return (
                <div className="ui card column">
                    <div className="image">
                        <img src={church.thumbnail} style={{height: '200px'}}></img>
                    </div>
                    <div className="content">
                        <a className="header" href={`/churches/${church.id}`}>{church.churchName}</a>
                        <div className="meta">
                            {church.location}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        // if (!this.church){
        //     return (
        //         <div className="ui">
        //         <p></p>
        //         <div className="ui active inverted dimmer">
        //           <div className="ui loader"></div>
        //         </div>
        //       </div>
        //     )
        // }


        return (
            <div className="ui link cards four column">
            {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { churches: Object.values(state.churches) }
}

export default connect(mapStateToProps, { fetchChurches })(VidList);