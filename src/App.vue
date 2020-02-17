<template>
  <div id="app">
    <div class="container mt-3">
      <form action="https://twitter.com/intent/tweet" method="get">
        <legend>野球実況用ツイート画面</legend>

        <div v-for="tagInfo in tagInfo" :key="tagInfo.name" class="form-check">
          <input
            type="checkbox"
            :id="tagInfo.name"
            :value="tagInfo.name"
            v-model="checkedTags"
            @change="tagUpdate"
            class="form-check-input"
          />
          <label
            :for="tagInfo.name"
            class="form-check-label animated jackInTheBox"
          >{{ tagInfo.jpName }}</label>
        </div>

        <div class="form-group mt-2">
          <label for="tweet-textarea">Tweet本文</label>
          <textarea
            v-model="tweet"
            :rows="tweet.split(/\n/).length"
            id="tweet-textarea"
            name="text"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">送信</button>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/animate.min.css"

import tagInfo from "@/assets/json/tagInfo.json";

export default {
  name: "App",
  data: function() {
    return {
      tweet: "テキスト",
      checkedTags: [],
      tagInfo: tagInfo
    };
  },
  methods: {
    tagUpdate: function() {
      const tweet = this.tweet.slice();
      const checkedTags = this.checkedTags.slice();
      const tagNames = this.tagInfo.slice().map(tagInfo => tagInfo.name);

      // ツイート本文に記述するタグ一覧
      const tags = checkedTags.join("\n");

      // ツイート本文からハッシュタグを削除
      const msg = tagNames
        .reduce((acc, tagName) => acc.split(tagName).join(""), tweet)
        .trim();

      this.tweet = msg + "\n" + tags;
    }
  }
};
</script>
