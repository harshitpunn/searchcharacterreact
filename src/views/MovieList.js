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
                    <div className="wrapper">
                        <span className="heading">{ character.name}</span>
                        <span className="heading dob">{ character.yearOfBirth}</span>
                    </div>

                  </div>
                </div>
            )}
          </div>
        )
    }    
}

export default MovieList;