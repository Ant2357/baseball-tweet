import { reactive } from 'vue';

import msgs from "@/assets/json/msgs.json";
import imgs from "@/assets/json/imgs.json";
import songs from "@/assets/json/songs.json";

import hashtags from "@/assets/json/hashtags.json";

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
