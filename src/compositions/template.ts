import { reactive } from 'vue';

import aa from "@/assets/jsons/aas/aa.json";
import aaBaseball from "@/assets/jsons/aas/baseball.json";
import aaBaseballTeam from "@/assets/jsons/aas/baseballTeam.json";
import aaOchikomu from "@/assets/jsons/aas/ochikomu.json";
import imgs from "@/assets/jsons/imgs.json";
import songs from "@/assets/jsons/songs.json";

import hashtags from "@/assets/jsons/hashtags.json";

type TemplateState = {
  msgs: {
    aa: {
      label: string;
      msg: string;
    }[];
    baseball: {
      label: string;
      msg: string;
    }[];
    baseballTeam: {
      label: string;
      msg: string;
    }[];
    ochikomu: {
      label: string;
      msg: string;
    }[];
  };
  imgs: { [x: string]: string; }[];
  songs: { [x: string]: string; }[];
  hashtags: { [x: string]: string; }[];
}

interface UseTemplate {
  templateState: TemplateState
}

export const useTemplate = (): UseTemplate => {
  const templateState = reactive<TemplateState>({
    msgs: { 
      aa: aa,
      baseball: aaBaseball,
      baseballTeam: aaBaseballTeam,
      ochikomu: aaOchikomu
    },
    imgs: imgs,
    songs: songs,
    hashtags: hashtags
  });

  return {
    templateState
  };
};
