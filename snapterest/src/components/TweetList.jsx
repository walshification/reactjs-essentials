import React from 'react';

import Tweet from './Tweet.jsx';

const listStyle = {
  padding: '0'
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
}

class TweetList extends React.Component {
  constructor() {
    super();
    this.getTweetElement = this.getTweetElement.bind(this);
    this.getListOfTweetIds = this.getListOfTweetIds.bind(this);
  }

  getListOfTweetIds() {
    return Object.keys(this.props.tweets);
  }

  getTweetElement(tweetId) {
    const tweet = this.props.tweets[tweetId];
    const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
    let tweetElement;

    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection} />
      );
    } else {
      tweetElement = <Tweet tweet={tweet} />;
    }

    return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
  }

  render() {
    const tweetElements = this.getListOfTweetIds().map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}

module.exports = TweetList;
