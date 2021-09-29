const URL = 'https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten';

export const shortener = (longUrl) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Origin: null,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `url=${longUrl}`
  })
    .then(res => res.json())
    .then(json => json.result.url);
};
