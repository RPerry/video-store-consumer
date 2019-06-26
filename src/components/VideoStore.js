import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VideoStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: "",
            currentCustomer: "",
        };
    }

    currentCustomerCallback = (customerID) => {
        this.setState({
            currentCustomer: customerID,
        })
    }

    currentMovieCallback = (movie) => {
        this.setState({
            currentMovie: movie,
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="current_selections">
                <p>Current Selections Will Go Here </p>
                <p>{this.state.currentCustomer} </p>;
            </div>
        )
    }
}

VideoStore.propTypes = {
    currentCustomerCallback: PropTypes.func
}

export default VideoStore;