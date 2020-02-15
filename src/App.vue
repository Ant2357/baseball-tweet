<template>
  <div id="app">
    <div class="container mt-3">
      <form action="https://twitter.com/intent/tweet" method="get">
        <legend>野球実況用ツイート画面</legend>
        <div class="form-check">
          <input
            type="checkbox"
            id="swallows"
            value="#swallows"
            v-model="checkedTags"
            @change="tagUpdate"
            class="form-check-input"
          />
          <label for="swallows">東京ヤクルトスワローズ</label>
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            id="tigers"
            value="#tigers"
            v-model="checkedTags"
            @change="tagUpdate"
            class="form-check-input"
          />
          <label for="tigers">阪神タイガース</label>
        </div>

        <div class="form-group">
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
import "@/css/bootstrap.min.css";

export default {
  name: "App",
  data: function() {
    return {
      tweet: "テキスト",
      checkedTags: [],
      tagNames: ["#swallows", "#tigers"]
    };
  },
  methods: {
    tagUpdate: function() {
      const tweet = this.tweet.slice();
      const checkedTags = this.checkedTags.slice();
      const tagNames = this.tagNames.slice();

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
