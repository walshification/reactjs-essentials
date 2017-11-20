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

  componentWillReceiveProps(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if(isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    });

    window.snapterest.numberOfReceivedTweets++;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');

    return (nextProps.tweet.text.length > 1);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');

    window.snapterest.numberOfDisplayedTweets++;
  }

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

    delete window.snapterest;
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
