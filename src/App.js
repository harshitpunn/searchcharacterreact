import React, { Component } from 'react';
import SearchBox from './views/SearchBox';
import MovieList from './views/MovieList';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters : [],
      term: '',
      isLoaded: false
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount(){
    try {
     await fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then(res => res.json())
      .then(json => this.setState({ characters: json.slice(0,10), isLoaded: true}));      
    } catch(e) {
        console.error(e);
    }

  }
      
  searchHandler(event){
    this.setState({ term: event.target.value })
  }

  deleteMovie(e){
    console.log(e.target.value);
    var array = [...this.state.characters]; 
    var index =  array.findIndex(x => x.name== e.target.value);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ characters: array})
    }

    console.log(this.state.characters);
  }
  render() {
    const {term,characters} =this.state;
    var loading = this.state.isLoaded ;
    let filteredData = characters.filter(
      (character) => {
        return character.name.toLowerCase().includes(term.toLowerCase()) 
      }
    ); 
    return (

        <div className="container">
            <SearchBox searchandle={this.searchHandler} searchterm={this.state.term}  />
            
                    { loading ? 
                      (<p></p>)
                     : 
                      (<h4>Loading...</h4>)
                    }

            
            
            <MovieList movies= {filteredData } triggerParentUpdate={this.deleteMovie} />

        </div>
    );
  }
}

export default App;
