import { reactive } from '@vue/composition-api';

const useMedia = () => {
  const mediaState = reactive<{
      pictures: { [s: string]: string }[];
    }>({
      pictures: [],
    });

  const pushTweetPicture = (picture: { [s: string]: string }): void => {
    if (mediaState.pictures.length >= 4) {
      alert("送付画像の上限を越えています。");
      return;
    }

    mediaState.pictures.push(picture);
  }

  const removePicture = (index: number): void => {
    mediaState.pictures.splice(index, 1);
  }

  return {
    mediaState,
    pushTweetPicture,
    removePicture
  };
};

export { useMedia };