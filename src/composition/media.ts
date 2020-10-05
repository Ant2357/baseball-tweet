import { reactive, computed, ComputedRef } from '@vue/composition-api';

const useMedia = () => {
  const mediaState = reactive<{
      pictures: { [s: string]: string }[];
      movieObject: { [s: string]: string };
      movieUrl: ComputedRef<string>;
    }>({
      pictures: [],
      // 動画情報
      movieObject: {},
      // 動画URL
      movieUrl: computed((): string => "url" in mediaState.movieObject ? mediaState.movieObject.url : "")
    });

  const pushTweetPicture = (picture: { [s: string]: string }): void => {
    if (mediaState.pictures.length >= 4) {
      alert("送付画像の上限を越えています。");
      return;
    }

    if (Object.keys(mediaState.movieObject).length !== 0) {
      alert("応援歌が設定済みの時に、画像AAを使う事は出来ません。");
      return;
    }

    mediaState.pictures.push(picture);
  }

  const removePicture = (index: number): void => {
    mediaState.pictures.splice(index, 1);
  }


  const setMovie = (movieObject: { [s: string]: string }): void => {
    if (Object.keys(mediaState.pictures).length !== 0) {
      alert("画像AAを使用中の時に、応援歌を使う事は出来ません。");
      return;
    }

    mediaState.movieObject = movieObject;
  }

  const removeMovie = (): void => {
    mediaState.movieObject = {};
  }


  return {
    mediaState,
    pushTweetPicture,
    removePicture,
    setMovie,
    removeMovie
  };
};

export { useMedia };