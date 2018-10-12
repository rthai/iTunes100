import React, { Component } from 'react';
import styled from 'styled-components';
import List from './List';
import Subnav from './Subnav';

class App extends Component {
  constructor() {
    super()
    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    const endpoint = `https://itunes.apple.com/us/rss/topalbums/limit=100/json`;
    
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
        let albums = data.feed.entry.map(album => {
          let copy = {};
          for (let key in album) {
            if (key.match(/im:/)) {
              let newKey = key.replace(/im:/, '');
              copy[newKey] = album[key];
            } else {
              copy[key] = album[key];
            }
          }
          return copy;
        }); 
        
        this.setState({ albums });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <Subnav/>
        <List albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
