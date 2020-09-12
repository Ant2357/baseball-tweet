import { reactive } from '@vue/composition-api';

const usePicture = () => {
  const pictureState = reactive<{
      pictures: { [s: string]: string }[];
    }>({
      pictures: [],
    });

  const pushTweetPicture = (picture: { [s: string]: string }): void => {
    if (pictureState.pictures.length >= 4) {
      alert("送付画像の上限を越えています。");
      return;
    }

    pictureState.pictures.push(picture);
  }

  const removePicture = (index: number): void => {
    pictureState.pictures.splice(index, 1);
  }

  return {
    pictureState,
    pushTweetPicture,
    removePicture
  };
};

export { usePicture };