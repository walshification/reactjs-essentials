import TweetUtils from './TweetUtils';

function getNumberOfTweetsInCollection(collection) {
  const listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
  return listOfCollectionTweetIds.length;
}

function isEmptyCollection(collection) {
  return (getNumberOfTweetsInCollection(collection) === 0);
}

module.exports = {
  getNumberOfTweetsInCollection,
  isEmptyCollection
};
