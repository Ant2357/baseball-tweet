import { reactive, computed, watch, ComputedRef } from 'vue';

import allHashtags from "@/assets/json/hashtags.json";

type TweetState = {
  tweet: string;
  tweetMsg: string;
  hashtags: string[];
}

interface UseTweet {
  tweetState: TweetState;
  updateTweet: (msg: string, hashtags: string[]) => void;
}

export const useTweet = (): UseTweet => {
  const tweetState = reactive<{
    tweet: string;
    tweetMsg: ComputedRef<string>;
    hashtags: string[];
  }>({
    tweet: "",
    // ツイートの本文部分(hashtags.json内にあるハッシュタグは含まない)
    tweetMsg: computed((): string => {
      const tagNames: string[] = allHashtags.slice().map(tag => tag.name);
      // ハッシュタグを除去
      return tagNames
        .reduce((acc, tagName) => acc.split(tagName).join(""), tweetState.tweet.slice())
        .trim();
    }),
    hashtags: []
  });

  const updateTweet = (msg: string, hashtags: string[]): void => {
    tweetState.tweet = `${msg}\n${hashtags.join("\n")}`;
  }

  watch(
    () => tweetState.hashtags,
    hashtags => {
      // ツイートを更新(ハッシュタグの状況反映)
      updateTweet(tweetState.tweetMsg, hashtags);
    }
  );

  return {
    tweetState,
    updateTweet
  }
};
