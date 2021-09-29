import React, { Component } from 'react'

export default class ShortUrl extends Component {
  state = {
    longUrl: ''
  }

  handleChange = ({ target }) => {
    this.setState({ longUrl: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.longUrl);
    fetch(
      // eslint-disable-next-line max-len
      'https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `url=${this.state.longUrl}`
      })
      .then(res => res.json())
      .then(console.log);
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
