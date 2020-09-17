import allTags from "@/assets/json/tagInfo.json";

import { reactive, computed, watch, ComputedRef } from '@vue/composition-api';

const useTweet = () => {
  const tweetState = reactive<{
      tweet: string;
      tweetMsg: ComputedRef<string>;
      checkedTags: string[];
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
      checkedTags: [],
      allTags: allTags,
    });

  const updateTweet = (msg: string, hashtags: string[]): void => {
    tweetState.tweet = `${msg}\n${hashtags.join("\n")}`;
  }

  const addTweetMsg = (addMsg: string): void => {
    updateTweet(tweetState.tweetMsg + addMsg, tweetState.checkedTags);
  }

  watch(
    () => tweetState.checkedTags,
    checkedTags => {
      // ツイートを更新(ハッシュタグの状況反映)
      updateTweet(tweetState.tweetMsg, checkedTags);
    }
  );

  return {
    tweetState,
    addTweetMsg
  }
};

export { useTweet };