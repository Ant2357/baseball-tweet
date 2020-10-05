<template>
  <div>
    <div class="container my-3">

      <div class="card shadow">
        <div class="card-body">
          <form action="https://twitter.com/intent/tweet" method="get" target="_blank">
            <h5 class="card-title">野球実況用ツイート画面</h5>

            <div v-for="tag in tweetState.allTags" :key="tag.name" class="form-check">
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
                  <div v-for="t in templateState.templateMsgs" :key="t.label" class="p-1">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary animated jackInTheBox"
                      @click="addTweetMsg(t.msg)"
                    >{{ t.label }}</button>
                  </div>
                </div>
              </b-tab>

              <b-tab title="画像AA">
                <div class="container">
                  <div class="row">

                    <div v-for="t in templateState.templateImgs" :key="t.label" class="col-12 col-md-3 p-1">
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

              <b-tab title="応援歌(作成中)">
                <div class="d-inline-flex flex-wrap">
                  <div v-for="song in templateState.templateSongs" :key="song.label" class="p-1">
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
              <span>文字数:</span>
              <animated-number
                :value="tweetState.tweet.length"
                :round="true"
                :duration="500"
              />
            </p>

            <button
              type="button"
              class="btn btn-primary"
              @click="newTweetTab(tweetState.tweet, mediaState.pictures)"
            >送信</button>

          </form>
        </div>
      </div>
    </div>

    <v-footer/>
  </div>
</template>

<script lang="ts">
import "@/css/bootstrap.min.css";
import "@/css/style.css";
import "@/css/text.css";
import "@/css/checkbox.css";
import "@/css/animate.min.css";

// @ts-ignore
import AnimatedNumber from "animated-number-vue";

import { defineComponent } from '@vue/composition-api';

import { useTemplate } from '@/composition/template.ts';
import { useTweet } from '@/composition/tweet.ts';
import { useMedia } from '@/composition/media.ts';

import VFooter from '@/components/VFooter.vue';

export default defineComponent({
  components: {
    AnimatedNumber,
    VFooter
  },
  setup() {

    // テンプレート一覧(AA, AA画像, 応援歌一覧)
    const { templateState } = useTemplate();

    // ツイート関連の機能
    const { tweetState, addTweetMsg } = useTweet();

    // メディア(画像 or 動画)関連の機能
    const { mediaState, pushTweetPicture, removePicture, setMovie, removeMovie } = useMedia();

    /**
    *  新規タブで、ツイート画面を開く
    */
    const newTweetTab = (text: string, pictures: { [s: string]: string }[]): void => {
      const pictureLinks = pictures.reduce((acc, p) => `${acc} ${p.msg}`, "");
      const tweet = encodeURIComponent(`${text}${pictureLinks} ${mediaState.movieUrl}`);

      const homePageUrl = "https://ant2357.github.io/baseball-tweet/";
      window.open(`https://twitter.com/intent/tweet?url=${homePageUrl}&text=${tweet}`, "_blank");
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
      addTweetMsg,
      pushTweetPicture,
      removePicture,
      setMovie,
      removeMovie
    };
  }
});

</script>
