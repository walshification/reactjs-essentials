import React from 'react';
import ReactDom from 'react-dom';

import Header from './Header.jsx';
import Tweet from './Tweet.jsx';

class StreamTweet extends React.Component {
  constructor() {
    super();
    console.log('[Snapterest] StreamTweet: 1. Running constructor()');
    this.state = {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  }

  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    })

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }

  componentDidMount() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

    const componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  render() {
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection} />
      </section>
    );
  }
}

module.exports = StreamTweet;
