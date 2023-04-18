import { reactive } from 'vue';

import msgs from "@/assets/jsons/msgs.json";
import imgs from "@/assets/jsons/imgs.json";
import songs from "@/assets/jsons/songs.json";

import hashtags from "@/assets/jsons/hashtags.json";

type TemplateState = {
  msgs: { [x: string]: string; }[];
  imgs: { [x: string]: string; }[];
  songs: { [x: string]: string; }[];
  hashtags: { [x: string]: string; }[];
}

interface UseTemplate {
  templateState: TemplateState
}

export const useTemplate = (): UseTemplate => {
  const templateState = reactive<TemplateState>({
    msgs: msgs,
    imgs: imgs,
    songs: songs,
    hashtags: hashtags
  });

  return {
    templateState
  };
};
