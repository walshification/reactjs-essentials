import React from 'react';
import ReactDOMServer from 'react-dom/server';

import CollectionControls from './CollectionControls.jsx';
import Header from './Header.jsx';
import TweetList from './TweetList.jsx';

class Collection extends React.Component {
  constructor() {
    super();
    this.createHtmlMarkupStringOfTweetList = this.createHtmlMarkupStringOfTweetList.bind(this);
    this.getListOfTweetIds = this.getListOfTweetIds.bind(this);
    this.getNumberOfTweetsInCollection = this.getNumberOfTweetsInCollection.bind(this);
  }
  createHtmlMarkupStringOfTweetList() {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  }

  getListOfTweetIds() {
    return Object.keys(this.props.tweets);
  }

  getNumberOfTweetsInCollection() {
    return this.getListOfTweetIds().length;
  }

  render() {
    const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if(numberOfTweetsInCollection > 0) {
      const tweets = this.props.tweets;
      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      const removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

            <TweetList
              tweets={tweets}
              onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
}

module.exports = Collection;
