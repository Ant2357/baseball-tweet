<template>
  <div>
    <the-header/>
    <div class="container is-fluid my-3 px-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">

          <div class="card">
            <div class="card-content">
              <form action="https://twitter.com/intent/tweet" method="get" target="_blank">

                <span class="title is-5 font-nicomoji">ハッシュタグ一覧</span>
                <div class="mb-4">
                  <div v-for="tag in templateState.hashtags" :key="tag.name" class="field mb-0">
                    <input
                      type="checkbox"
                      :id="tag.name"
                      :value="tag.name"
                      v-model="tweetState.hashtags"
                      class="is-checkradio"
                    />
                    <label
                      :for="tag.name"
                      class="font-nicomoji"
                      :class="teamColor(tag.jpName)"
                    >{{ tag.jpName }}</label>
                  </div>
                </div>

                <div class="tabs is-boxed">
                  <ul>
                    <li :class="{ 'is-active': appState.activeTab === 'aa' }"><a @click="appState.activeTab = 'aa'">AA</a></li>
                    <li :class="{ 'is-active': appState.activeTab === 'pictures' }"><a @click="appState.activeTab = 'pictures'">画像AA</a></li>
                    <li :class="{ 'is-active': appState.activeTab === 'songs' }"><a @click="appState.activeTab = 'songs'">応援歌</a></li>
                  </ul>
                </div>
                <div class="tab-contents">
                  <div class="content" :class="{ 'is-active': appState.activeTab === 'aa' }">

                    <div class="buttons">
                      <button
                        v-for="t in templateState.msgs" :key="t.label"
                        type="button"
                        class="button is-small"
                        @click="updateTweet(tweetState.tweetMsg + t.msg, tweetState.hashtags)"
                      >
                        {{ t.label }}
                      </button>
                    </div>

                  </div>

                  <div class="content" :class="{ 'is-active': appState.activeTab === 'pictures' }">
                    <div class="columns is-multiline is-variable is-1">

                      <div v-for="t in templateState.imgs" :key="t.label" class="column is-3">

                        <div class="card h-100">
                          <div class="card-image">
                            <img class="image" :src="t.url">
                          </div>

                          <div class="card-content has-text-centered">
                            <button
                              type="button"
                              class="button-outline"
                              @click="pushTweetPicture(t)"
                            >
                              {{ t.label }}を追加
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="content" :class="{ 'is-active': appState.activeTab === 'songs' }">
                    <div class="buttons">
                      <button
                        v-for="song in templateState.songs" :key="song.label"
                        type="button"
                        class="button is-small"
                        @click="setMovie(song)"
                      >{{ song.label }}</button>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label for="tweet-textarea" class="label">本文</label>
                  <div class="control">
                    <textarea
                      v-model="tweetState.tweet"
                      :rows="tweetState.tweet.split(/\n/).length"
                      id="tweet-textarea"
                      name="text"
                      class="textarea"
                      placeholder="ツイート本文"
                    ></textarea>
                  </div>
                </div>

                <div class="columns is-multiline is-variable is-1">
                  <div v-for="(picture, index) in mediaState.pictures" :key="index" class="column is-3">

                    <div class="card h-100">
                      <div class="card-image">
                        <img class="image" :src="picture.url">
                      </div>
                      
                      <div class="card-content has-text-centered">
                        <button
                          type="button"
                          class="button-outline button-danger"
                          @click="removePicture(index)"
                        >
                          {{ picture.label }}を削除
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="field mt-4">
                  <p :class="{ 'has-text-danger': tweetState.tweet.length > 280 }">
                    <span>文字数: {{ tweetState.tweet.length }}</span>
                  </p>
                </div>

              <button
                type="button"
                class="button is-info"
                @click="newTweetTab(tweetState.tweet, mediaState.picturesUrl, mediaState.movieUrl)"
              >
                <font-awesome-icon :icon="['fab', 'twitter']" /><span class="ml-1">ツイート</span>
              </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

    <the-footer/>
  </div>
</template>

<script lang="ts">
import 'bulma/css/bulma.css';
import "@/css/style.css";
import "@/css/text.css";
import "@/css/tabs.css";
import "@/css/button.css";
import "@/css/checkbox.css";
import "@/css/animate.min.css";

import { defineComponent, reactive } from 'vue';

import { useTemplate } from '@/composition/template';
import { useTweet } from '@/composition/tweet';
import { useMedia } from '@/composition/media';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {

    const appState = reactive<{
      activeTab: string
    }>({
      activeTab: "aa"
    });

    // テンプレート一覧(AA, AA画像, 応援歌一覧, ハッシュタグ一覧)
    const { templateState } = useTemplate();

    // ツイート関連の機能
    const { tweetState,  updateTweet} = useTweet();

    // メディア(画像 or 動画)関連の機能
    const { mediaState, pushTweetPicture, removePicture, setMovie, removeMovie } = useMedia();

    /**
    *  新規タブで、ツイート画面を開く
    */
    const newTweetTab = (text: string, picturesUrl: string, movieUrl: string): void => {
      const tweet = encodeURIComponent(`${text}${picturesUrl} ${movieUrl}`);
      window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
    }

    const teamColor = (tagJpName: string): { [s: string]: boolean } => {
      return {
        "text-giants": tagJpName === "#読売巨人軍",
        "text-baystars": tagJpName === "#横浜DeNAベイスターズ",
        "text-tigers": tagJpName === "#阪神タイガース",
        "text-carp": tagJpName === "#広島東洋カープ",
        "text-dragons": tagJpName === "#中日ドラゴンズ",
        "text-swallows": tagJpName === "#東京ヤクルトスワローズ",
        "text-seibulions": tagJpName === "#埼玉西武ライオンズ",
        "text-sbhawks": tagJpName === "#福岡ソフトバンクホークス",
        "text-rakuteneagles": tagJpName === "#東北楽天ゴールデンイーグルス",
        "text-chibalotte": tagJpName === "#千葉ロッテマリーンズ",
        "text-fighters": tagJpName === "#北海道日本ハムファイターズ",
        "text-bs": tagJpName === "#オリックス・バファローズ",
      }
    }

    return {
      // State
      appState,
      templateState,
      tweetState,
      mediaState,
      // Function
      newTweetTab,
      teamColor,
      updateTweet,
      pushTweetPicture,
      removePicture,
      setMovie,
      removeMovie
    };
  }
});
</script>