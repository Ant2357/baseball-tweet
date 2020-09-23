import { reactive } from '@vue/composition-api';

import templateMsgs from "@/assets/json/templateMsgs.json";
import templateImgs from "@/assets/json/templateImgs.json";

const useTemplate = () => {
  const templateState = reactive<{
      templateMsgs: { [s: string]: string }[];
      templateImgs: { [s: string]: string }[];
    }>({
      templateMsgs: templateMsgs,
      templateImgs: templateImgs
    });

  return {
    templateState
  };
};

export { useTemplate };