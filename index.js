const request = require('request');
const fs = require('fs');
const url = require('url');
const OAuth = require('oauth');
const Twitter = require('twitter');
const env = require('dotenv').load();

const userID = 842095599100997636;

const {
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_API_KEY,
  TWITTER_CONSUMER_API_SECRET,
} = process.env;

const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${userID}&count=200&include_rts=false&trim_user=true&${
  max_id ? max_id : ''
}`;
