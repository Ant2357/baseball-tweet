import { reactive } from '@vue/composition-api';

const useMedia = () => {
  const mediaState = reactive<{
      pictures: { [s: string]: string }[];
      movie: { [s: string]: string };
    }>({
      pictures: [],
      movie: {}
    });

  const pushTweetPicture = (picture: { [s: string]: string }): void => {
    if (mediaState.pictures.length >= 4) {
      alert("送付画像の上限を越えています。");
      return;
    }

    if (Object.keys(mediaState.movie).length !== 0) {
      alert("応援歌が設定済みの時に、画像AAを使う事は出来ません。");
      return;
    }

    mediaState.pictures.push(picture);
  }

  const removePicture = (index: number): void => {
    mediaState.pictures.splice(index, 1);
  }


  const setMovie = (movie: { [s: string]: string }): void => {
    if (Object.keys(mediaState.pictures).length !== 0) {
      alert("画像AAを使用中の時に、応援歌を使う事は出来ません。");
      return;
    }

    mediaState.movie = movie;
  }

  const removeMovie = (): void => {
    mediaState.movie = {};
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