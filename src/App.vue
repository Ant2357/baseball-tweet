<template>
  <div id="app">
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

            <div class="d-inline-flex flex-wrap mt-3">
              <div v-for="t in templateMsgs" :key="t.label" class="p-1">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-dark animated jackInTheBox"
                  @click="addTweetMsg(t.msg)"
                >{{ t.label }}</button>
              </div>
            </div>

            <div class="form-group mt-2">
              <label for="tweet-textarea">本文</label>
              <textarea
                v-model="tweet"
                :rows="tweet.split(/\n/).length"
                id="tweet-textarea"
                name="text"
                class="form-control"
                placeholder="ツイート本文"
              ></textarea>
            </div>

            <p :class="{ 'text-danger': tweetLength > 280 }">
              文字数:{{ animatedTweetLength }}
            </p>
            <button type="submit" class="btn btn-primary">送信</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/assets/css/text.css";
import "@/assets/css/checkbox.css";
import "@/assets/css/animate.min.css";

import gsap from 'gsap';
import tagInfo from "@/assets/json/tagInfo.json";
import templateMsgs from "@/assets/json/templateMsgs.json";

import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  tweet = "";
  tweetLength = 0;
  checkedTags: string[] = [];
  tagInfo = tagInfo;
  templateMsgs = templateMsgs;

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
  * ツイートの本文を更新
  */
  updateTweetMsg(msg: string): void {
    this.tweet = `${msg}\n${this.checkedTags.join("\n")}`;
  }

  addTweetMsg(addMsg: string): void {
    this.updateTweetMsg(this.tweetMsg + addMsg);
  }

  teamColor(tagJpName: string) {
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
