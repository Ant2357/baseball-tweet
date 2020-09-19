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
                  <div v-for="t in state.templateMsgs" :key="t.label" class="p-1">
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

                    <div v-for="t in state.templateImgs" :key="t.label" class="col-12 col-md-3 p-1">
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
                  <div v-for="(picture, index) in pictureState.pictures" :key="index" class="col-12 col-md-3 p-1">
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
              @click="newTweetTab(tweetState.tweet, pictureState.pictures)"
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

import templateMsgs from "@/assets/json/templateMsgs.json";
import templateImgs from "@/assets/json/templateImgs.json";

// @ts-ignore
import AnimatedNumber from "animated-number-vue";

import { defineComponent, reactive } from '@vue/composition-api';

import { useTweet } from '@/composition/tweet.ts';
import { usePicture } from '@/composition/picture.ts';

import VFooter from '@/components/VFooter.vue';

export default defineComponent({
  components: {
    AnimatedNumber,
    VFooter
  },
  setup() {
    const state = reactive<{
      templateMsgs: { [s: string]: string }[];
      templateImgs: { [s: string]: string }[];
    }>({
      templateMsgs: templateMsgs,
      templateImgs: templateImgs
    });

    // ツイート関連の機能
    const { tweetState, addTweetMsg } = useTweet();

    // 画像関連の機能
    const { pictureState, pushTweetPicture, removePicture } = usePicture();

    /**
    *  新規タブで、ツイート画面を開く
    */
    const newTweetTab = (text: string, pictures: { [s: string]: string }[]): void => {
      const pictureLinks = pictures.reduce((acc, p) => `${acc} ${p.msg}`, "");
      const tweet = encodeURIComponent(`${text}${pictureLinks}`);

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
      state,
      tweetState,
      pictureState,
      teamColor,
      addTweetMsg,
      pushTweetPicture,
      removePicture,
      newTweetTab
    };
  }
});

</script>
