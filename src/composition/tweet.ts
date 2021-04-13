import allTags from "@/assets/json/hashtags.json";

import { reactive, computed, watch, ComputedRef } from '@vue/composition-api';

type TweetState = {
  tweet: string;
  tweetMsg: string;
  hashtags: string[];
  allTags: { [x: string]: string; }[];
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
      allTags: { [s: string]: string }[];
    }>({
      tweet: "",
      // ツイートの本文部分(ハッシュタグは含まない)
      tweetMsg: computed((): string => {
        const tagNames: string[] = tweetState.allTags.slice().map(tag => tag.name);
        // ハッシュタグを除去
        return tagNames
          .reduce((acc, tagName) => acc.split(tagName).join(""), tweetState.tweet.slice())
          .trim();
      }),
      hashtags: [],
      allTags: allTags,
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
