jest.dontMock('../TweetUtils');

import TweetUtils from '../TweetUtils';

describe('Tweet utilities module', () => {
  it('returns an array of tweet ids', () => {
    const tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    const expectedListOfTweetIds = [ 'tweet1', 'tweet2', 'tweet3' ];
    const actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
