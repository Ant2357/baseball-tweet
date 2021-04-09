import { reactive, computed, ComputedRef } from '@vue/composition-api';

type MediaState = {
  pictures: { [x: string]: string; }[];
  picturesUrl: string;
  movieObject: { [x: string]: string; };
  movieUrl: string;
}

interface UseMedia {
  mediaState: MediaState,
  pushTweetPicture: (picture: { [s: string]: string; }) => void;
  removePicture: (index: number) => void;
  setMovie: (movieObject: { [x: string]: string; }) => void;
  removeMovie: () => void;
}

export const useMedia = (): UseMedia => {
  const mediaState = reactive<{
      pictures: { [s: string]: string }[];
      picturesUrl: ComputedRef<string>;
      movieObject: { [s: string]: string };
      movieUrl: ComputedRef<string>;
    }>({
      // 画像情報
      pictures: [],
      // 画像URL
      picturesUrl: computed((): string => mediaState.pictures.reduce((acc, p) => `${acc} ${p.msg}`, "")),
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

    const newPictures = [...new Set([...mediaState.pictures, picture])];
    if (mediaState.pictures.length + 1 !== newPictures.length) {
      alert("同じ画像を使う事は出来ません。");
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
