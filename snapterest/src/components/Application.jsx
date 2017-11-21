import React from 'react';

import Collection from './Collection.jsx';
import Stream from './Stream.jsx';

import template from '../index.html';

class Application extends React.Component {
  constructor() {
    super();
    this.addTweetToCollection = this.addTweetToCollection.bind(this);
    this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
    this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
    this.state = { collectionTweets: {} };
  }

  addTweetToCollection(tweet) {
    const collectionTweets = this.state.collectionTweets;
    collectionTweets[tweet.id] = tweet;
    this.setState({
      collectionTweets: collectionTweets
    });
  }

  removeTweetFromCollection(tweet) {
    const collectionTweets = this.state.collectionTweets;
    delete collectionTweets[tweet.id];
    this.setState({
      collectionTweets: collectionTweets
    })
  }

  removeAllTweetsFromCollection() {
    this.setState({
      collectionTweets: {}
    })
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">

            <Stream onAddTweetToCollection={this.addTweetToCollection} />

          </div>
          <div className="col-md-8">

            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />

          </div>
        </div>

      </div>
    );
  }
};

module.exports = Application;
