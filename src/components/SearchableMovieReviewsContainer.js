import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nu8cZn7j07iGaS47Xrn6d5nmYwrquAYu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

   handleClick(e) {
    e.preventDefault()
       fetch(URL)
       .then(resp => resp.json())
       .then(data => this.setState({
           reviews: data.results
       }))
   }

   searchTermChange = (e) => {
       this.setState({searchTerm: e.target.value})
   }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleClick(event)}>
                <input type="text" onChange={this.searchTermChange}></input>
                <input type="submit"></input>
                <MovieReviews reviews={this.state.reviews}/>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer