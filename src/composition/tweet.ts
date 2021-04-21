import { reactive, computed, watch, ComputedRef } from '@vue/composition-api';

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
      // ツイートの本文部分(ハッシュタグは含まない)
      tweetMsg: computed((): string => tweetState.tweet
        .replace(/#.*/g, "")
        .trim()
      ),
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
