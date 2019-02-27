import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return(
          <div className="search">
            <input onChange={this.props.searchandle} type="text" value={this.props.searchterm} name="search" placeholder="Character Name" />
          </div> 
        )
    }    
}

export default SearchBox;