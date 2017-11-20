import React from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';

import StreamTweet from './StreamTweet.jsx';
import Header from './Header.jsx';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: null
    }
  }

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet(tweet) {
    this.setState({
      tweet: tweet
    });
  }

  render() {
    const tweet = this.state.tweet;
    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection} />
      );
    }
    return (
      <Header text='Waiting for public photos from Twitter...' />
    );
  }
}

module.exports = Stream;
