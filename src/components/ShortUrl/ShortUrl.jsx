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

  handleSubmit = async(event) => {
    event.preventDefault();
    const shortUrl = await shortener(this.state.longUrl);
    this.setState({ shortUrl });
  }

  render() {
    const { longUrl, shortUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={longUrl} onChange={this.handleChange} />
          <button>Get Short Url</button>
        </form>
        {
          shortUrl && <a href={shortUrl}>{shortUrl}</a>
        }
      </div>
    );
  }
}
