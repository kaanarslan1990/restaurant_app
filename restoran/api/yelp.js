import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer PJ7ZpbDfRkLqwxebgkPDfBViVFHC5hAL6QEWIsWjZnlSU83vFVBAWYQZ7W2sShEIu_GPiaf9dxOhNtVhbb6Y2UZqjF089JhAswJ-bC-KIdphIhScrhpi2SDR8Wv3ZXYx',
  },
});
