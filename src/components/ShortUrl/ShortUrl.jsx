import React, { Component } from 'react';
import { shortener } from '../../services/url-shortener';

export default class ShortUrl extends Component {
  state = {
    longUrl: '',
    shortUrl: null
  }

  handleChange = ({ target }) => {
    this.setState({ longUrl: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.longUrl);
    shortener(this.state.longUrl)
      .then(shortUrl => this.setState({ shortUrl }));
  }

  render() {
    const { longUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={longUrl} onChange={this.handleChange} />
          <button>Get Short Url</button>
        </form>
      </div>
    );
  }
}
