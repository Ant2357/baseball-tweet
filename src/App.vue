<template>
  <div>
    <div class="container my-3">

      <div class="card shadow">
        <div class="card-body">
          <form action="https://twitter.com/intent/tweet" method="get" target="_blank">
            <h5 class="card-title">野球実況用ツイート画面</h5>

            <div v-for="tagInfo in tagInfo" :key="tagInfo.name" class="form-check">
              <input
                type="checkbox"
                :id="tagInfo.name"
                :value="tagInfo.name"
                v-model="checkedTags"
                class="form-check-input"
              />
              <label
                :for="tagInfo.name"
                class="form-check-label text-nowrap animated jackInTheBox"
                :class="teamColor(tagInfo.jpName)"
              >{{ tagInfo.jpName }}</label>
            </div>

            <b-tabs content-class="mt-2" class="mt-3">
              <b-tab title="AA" active>
                <div class="d-inline-flex flex-wrap">
                  <div v-for="t in templateMsgs" :key="t.label" class="p-1">
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

                    <div v-for="t in templateImgs" :key="t.label" class="col-12 col-md-3 p-1">
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
                v-model="tweet"
                :rows="tweet.split(/\n/).length"
                id="tweet-textarea"
                name="text"
                class="form-control"
                placeholder="ツイート本文"
              ></textarea>

              <div class="container">
                <div class="row">
                  <div v-for="(picture, index) in this.tweetPictures" :key="index" class="col-12 col-md-3 p-1">
                    <div class="card h-100 text-center">
                      <img class="card-img-top img-fluid" :src="picture.url">
                      <div class="card-body">
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="removePicture(index)">
                          {{ picture.label }}を削除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <p :class="{ 'text-danger': tweetLength > 280 }">
              文字数:{{ animatedTweetLength }}
            </p>

            <button type="button" class="btn btn-primary" @click="newTweetTab">送信</button>
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

import gsap from 'gsap';
import tagInfo from "@/assets/json/tagInfo.json";
import templateMsgs from "@/assets/json/templateMsgs.json";
import templateImgs from "@/assets/json/templateImgs.json";

import { Component, Vue, Watch } from 'vue-property-decorator';

import VFooter from '@/components/VFooter.vue';

@Component({
  components: {
    VFooter
  }
})
export default class App extends Vue {
  tweet = "";
  tweetPictures: { [s: string]: string }[] = [];
  tweetLength = 0;
  checkedTags: string[] = [];
  tagInfo = tagInfo;
  templateMsgs = templateMsgs;
  templateImgs = templateImgs;

  /**
  * ツイートの本文
  */
  get tweetMsg(): string {
    const tagNames: string[] = this.tagInfo.slice().map(tagInfo => tagInfo.name);
    // ハッシュタグを除去
    return tagNames
      .reduce((acc, tagName) => acc.split(tagName).join(""), this.tweet.slice())
      .trim();
  }

  get animatedTweetLength(): number {
    return Math.floor(this.tweetLength);
  }

  @Watch("checkedTags")
  onCheckedTags(): void {
    // ツイートを更新(ハッシュタグの状況反映)
    this.updateTweetMsg(this.tweetMsg);
  }

  @Watch("tweet")
  onTweet(newTweet: string): void {
    gsap.to(this.$data, 0.5, { tweetLength: newTweet.length });
  }

  /**
  *  ツイート画面を開く
  */
  newTweetTab(): void {
    const pictureLinks = this.tweetPictures
      .reduce((acc, p) => `${acc} ${p.msg}`, "");
    const tweet = encodeURIComponent(`${this.tweet}${pictureLinks}`);

    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  }

  /**
  * ツイートの本文を更新
  */
  updateTweetMsg(msg: string): void {
    this.tweet = `${msg}\n${this.checkedTags.join("\n")}`;
  }

  addTweetMsg(addMsg: string): void {
    this.updateTweetMsg(this.tweetMsg + addMsg);
  }

  pushTweetPicture(picture: { [s: string]: string }): void {
    this.tweetPictures.push(picture);
  }
  removePicture(index: number): void {
    this.tweetPictures.splice(index, 1);
  }

  teamColor(tagJpName: string): { [s: string]: boolean } {
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
}
</script>
