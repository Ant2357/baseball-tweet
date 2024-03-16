<template>
  <div>
    <TheHeader />

    <div class="container is-fluid my-3 px-4">
      <div class="columns">
        <div class="column is-10 is-offset-1">

          <div class="card">
            <div class="card-content">

              <form
                @submit.prevent
                action="https://twitter.com/intent/tweet"
                method="get"
                target="_blank"
              >

                <span class="title is-5 font-nicomoji">ハッシュタグ一覧</span>
                <div class="mb-3">
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

                <div class="field">
                  <div class="control">
                    <textarea
                      v-model="appState.borderText"
                      :rows="appState.borderText.split(/\n/).length"
                      class="textarea"
                      placeholder="枠線AA"
                    ></textarea>
                  </div>
                </div>
                <div class="field">
                  <p class="control">
                    <button
                      class="button is-success font-nicomoji"
                      v-scroll-to="'#tweet-textarea'"
                      @click="updateTweet(`${textToFrameBorderAa(appState.borderText)}\n${tweetState.tweetMsg}`, tweetState.hashtags);"
                    >
                      枠線AAを追加
                    </button>
                  </p>
                </div>

                <div class="field">
                  <div class="control">
                    <textarea
                      v-model="appState.tategakiText"
                      :rows="appState.tategakiText.split(/\n/).length"
                      class="textarea"
                      placeholder="縦書き文章"
                    ></textarea>
                  </div>
                </div>
                <div class="field">
                  <p class="control">
                    <button
                      class="button is-success font-nicomoji"
                      v-scroll-to="'#tweet-textarea'"
                      @click="updateTweet(`${textToTategaki(appState.tategakiText)}\n${tweetState.tweetMsg}`, tweetState.hashtags)"
                    >
                      文章を縦書きに変換
                    </button>
                  </p>
                </div>

                <div class="field">
                  <div class="tabs is-boxed">
                    <ul class="font-nicomoji">
                      <li :class="{ 'is-active': appState.activeTab === 'aa' }"><a @click="appState.activeTab = 'aa'">汎用AA</a></li>
                      <li :class="{ 'is-active': appState.activeTab === 'aaOchikomu' }"><a @click="appState.activeTab = 'aaOchikomu'">落ち込むAA</a></li>
                      <li :class="{ 'is-active': appState.activeTab === 'aaBaseball' }"><a @click="appState.activeTab = 'aaBaseball'">野球AA</a></li>
                      <li :class="{ 'is-active': appState.activeTab === 'aaBaseballTeam' }"><a @click="appState.activeTab = 'aaBaseballTeam'">野球チームAA</a></li>
                      <li :class="{ 'is-active': appState.activeTab === 'pictures' }"><a @click="appState.activeTab = 'pictures'">画像AA</a></li>
                      <li :class="{ 'is-active': appState.activeTab === 'songs' }"><a @click="appState.activeTab = 'songs'">応援歌</a></li>
                    </ul>
                  </div>
                  <div class="tab-contents">
                    <div class="content" :class="{ 'is-active': appState.activeTab === 'aa' }">
                      <AAButtons :aas="templateState.aas.aa" @addAA="addTweetMsg" />
                    </div>

                    <div class="content" :class="{ 'is-active': appState.activeTab === 'aaOchikomu' }">
                      <AAButtons :aas="templateState.aas.ochikomu" @addAA="addTweetMsg" />
                    </div>

                    <div class="content" :class="{ 'is-active': appState.activeTab === 'aaBaseball' }">
                      <AAButtons :aas="templateState.aas.baseball" @addAA="addTweetMsg" />
                    </div>

                    <div class="content" :class="{ 'is-active': appState.activeTab === 'aaBaseballTeam' }">
                      <AAButtons :aas="templateState.aas.baseballTeam" @addAA="addTweetMsg" />
                    </div>


                    <div class="content" :class="{ 'is-active': appState.activeTab === 'pictures' }">
                      <div class="columns is-multiline is-variable is-1">

                        <div v-for="t in templateState.imgs" :key="t.label" class="column is-3">

                          <div class="card h-100">
                            <div class="card-image">
                              <figure class="image is-marginless is-16by9">
                                <img :src="t.url">
                              </figure>
                            </div>

                            <div class="card-content has-text-centered">
                              <button
                                type="button"
                                class="button-outline"
                                v-scroll-to="'#tweet-textarea'"
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
                          v-scroll-to="'#tweet-textarea'"
                          @click="setMovie(song)"
                        >
                          {{ song.label }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label for="tweet-textarea" class="label font-nicomoji">本文</label>
                  <div class="control">
                    <textarea
                      v-model="tweetState.tweet"
                      :rows="tweetState.tweet.split(/\n/).length"
                      id="tweet-textarea"
                      name="text"
                      class="textarea"
                      placeholder="ポスト本文"
                    ></textarea>
                  </div>
                </div>

                <div class="columns is-multiline is-variable is-1">
                  <div v-for="(picture, index) in mediaState.pictures" :key="index" class="column is-3">

                    <div class="card h-100">
                      <div class="card-image">
                        <figure class="image is-marginless is-16by9">
                          <img :src="picture.url">
                        </figure>
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

                <div class="field">
                  <div class="control">
                    <button
                      v-if="Object.keys(mediaState.movieObject).length !== 0"
                      type="button"
                      class="button-outline button-danger mt-2"
                      @click="removeMovie"
                    >
                      応援歌『{{ mediaState.movieObject.label }}』を削除
                    </button>
                  </div>
                </div>

                <div class="field mt-4 font-nicomoji">
                  <p :class="{ 'has-text-danger': tweetState.tweet.length > 280 }">
                    <span>文字数: {{ tweetState.tweet.length }}</span>
                  </p>
                </div>

                <button
                  type="button"
                  class="button is-dark font-nicomoji"
                  @click="newTweetTab(tweetState.tweet, mediaState.picturesUrl, mediaState.movieUrl)"
                >
                  <font-awesome-icon :icon="['fab', 'x-twitter']" /><span class="ml-1">ポスト</span>
                </button>

              </form>
            </div>
          </div>

          <div class="mt-4">
            <!-- 「プロ野球Freak」のブログパーツ セ・パ順位表 -->
            <div style="text-align:center"><a href="https://baseball-data.com/"><img src="https://baseball-data.com/bp/st/header-bk.png" style="height:40px;border:0;margin:0;padding:0" alt="プロ野球データFreak"></a><br><a href="https://baseball-data.com/team/ce.html"><img src="https://baseball-data.com/bp/st/bk-ce1.png" style="height:168px;border:0;margin:0;padding:0" alt="セリーグ順位表"></a><br><a href="https://baseball-data.com/team/pa.html"><img src="https://baseball-data.com/bp/st/bk-paf1.png" style="height:187px;border:0;margin:0;padding:0" alt="パリーグ順位表"></a></div>
          </div>

        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import 'bulma/css/bulma.css';

import "@/assets/styles/style.css";
import "@/assets/styles/text.css";
import "@/assets/styles/tabs.css";
import "@/assets/styles/button.css";
import "@/assets/styles/checkbox.css";

import { reactive } from 'vue';

import { textToFrameBorderAa, textToTategaki } from "@/utils/text";

import { useTemplate } from '@/compositions/template';
import { useTweet } from '@/compositions/tweet';
import { useMedia } from '@/compositions/media';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import AAButtons from '@/components/aa/AAButtons.vue';

const appState = reactive<{
  activeTab: string;
  borderText: string;
  tategakiText: string;
}>({
  activeTab: "aa",
  borderText: "",
  tategakiText: ""
});

// テンプレート一覧(AA, AA画像, 応援歌一覧, ハッシュタグ一覧)
const { templateState } = useTemplate();

// ツイート関連の機能
const { tweetState,  updateTweet, addTweetMsg } = useTweet();

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

</script>
