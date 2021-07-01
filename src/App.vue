<template>
  <div>
    <the-header/>
    <div class="container is-fluid my-3">
      <div class="card">
        <div class="card-content">
          <form action="https://twitter.com/intent/tweet" method="get" target="_blank">
            <span class="title is-5 font-nicomoji">ハッシュタグ一覧</span>
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
          </form>
        </div>
      </div>

      <div class="card has-shadow">
        <div class="card-body">
          <form action="https://twitter.com/intent/tweet" method="get" target="_blank">
            <h5 class="card-title">野球実況用ツイート画面</h5>

            <div v-for="tag in templateState.hashtags" :key="tag.name" class="form-check">
              <input
                type="checkbox"
                :id="tag.name"
                :value="tag.name"
                v-model="tweetState.hashtags"
                class="form-check-input"
              />
              <label
                :for="tag.name"
                class="form-check-label text-nowrap animated jackInTheBox"
                :class="teamColor(tag.jpName)"
              >{{ tag.jpName }}</label>
            </div>

            <b-tabs content-class="mt-2" class="mt-3">
              <b-tab title="AA" active>
                <div class="d-inline-flex flex-wrap">
                  <div v-for="t in templateState.msgs" :key="t.label" class="p-1">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary animated jackInTheBox"
                      @click="updateTweet(tweetState.tweetMsg + t.msg, tweetState.hashtags)"
                    >{{ t.label }}</button>
                  </div>
                </div>
              </b-tab>

              <b-tab title="画像AA">
                <div class="container">
                  <div class="row">

                    <div v-for="t in templateState.imgs" :key="t.label" class="col-12 col-md-3 p-1">
                      <div class="card h-100 text-center">
                        <img class="card-img-top img-fluid" :src="t.url">
                        <div class="card-body">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            @click="pushTweetPicture(t)"
                          >
                            {{ t.label }}を追加
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </b-tab>

              <b-tab title="応援歌">
                <div class="d-inline-flex flex-wrap">
                  <div v-for="song in templateState.songs" :key="song.label" class="p-1">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary animated jackInTheBox"
                      @click="setMovie(song)"
                    >{{ song.label }}</button>
                  </div>
                </div>
              </b-tab>

            </b-tabs>

            <div class="form-group mt-2 p-2">
              <label for="tweet-textarea">本文</label>
              <textarea
                v-model="tweetState.tweet"
                :rows="tweetState.tweet.split(/\n/).length"
                id="tweet-textarea"
                name="text"
                class="form-control"
                placeholder="ツイート本文"
              ></textarea>

              <div class="container">
                <div class="row">
                  <div v-for="(picture, index) in mediaState.pictures" :key="index" class="col-12 col-md-3 p-1">
                    <div class="card h-100 text-center">
                      <img class="card-img-top img-fluid" :src="picture.url">
                      <div class="card-body">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-danger"
                          @click="removePicture(index)"
                        >
                          {{ picture.label }}を削除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                v-if="Object.keys(mediaState.movieObject).length !== 0"
                type="button"
                class="mt-2 btn btn-outline-danger"
                @click="removeMovie"
              >
                応援歌『{{ mediaState.movieObject.label }}』を削除
              </button>
            </div>

            <p :class="{ 'text-danger': tweetState.tweet.length > 280 }">
              <span>文字数: {{ tweetState.tweet.length }}</span>
            </p>

            <button
              type="button"
              class="btn btn-primary"
              @click="newTweetTab(tweetState.tweet, mediaState.picturesUrl, mediaState.movieUrl)"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" /> ツイート
            </button>
          </form>
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
import "@/css/checkbox.css";
import "@/css/animate.min.css";

import { defineComponent } from 'vue';

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
