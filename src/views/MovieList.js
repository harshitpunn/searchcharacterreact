import React, { Component } from 'react';

class MovieList extends Component {
    render() {
        return(
            <div className="container-key" >
            { this.props.movies.map((character, index) =>
                <div className="card" key={index} >
                  <img className="profile-image" src={character.image} alt={character.name} />
                  <button onClick={ this.props.triggerParentUpdate} className="front-element" value={character.name}>Delete</button>
                  <div className="card-container">
                    <h4>{ character.name}</h4>
                    <h4>{ character.yearOfBirth}</h4>
                  </div>
                </div>
            )}
          </div>
        )
    }    
}

export default MovieList;