import { reactive } from '@vue/composition-api';

import templateMsgs from "@/assets/json/templateMsgs.json";
import templateImgs from "@/assets/json/templateImgs.json";
import templateSongs from "@/assets/json/templateSongs.json";

const useTemplate = () => {
  const templateState = reactive<{
      templateMsgs: { [s: string]: string }[];
      templateImgs: { [s: string]: string }[];
      templateSongs: { [s: string]: string }[];
    }>({
      templateMsgs: templateMsgs,
      templateImgs: templateImgs,
      templateSongs: templateSongs
    });

  return {
    templateState
  };
};

export { useTemplate };