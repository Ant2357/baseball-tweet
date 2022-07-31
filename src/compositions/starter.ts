import * as StarterJson from '@/@types/StarterJson';
import { reactive, onMounted } from 'vue';

export type StarterState = {
  starters: [StarterJson.RootObject] | [] ;
}

export interface UseStarter {
  starterState: StarterState;
}

export const useStarter = (): UseStarter => {
  const starterState = reactive<StarterState>({
    starters: []
  });

  onMounted(() => {
    //『NPB API』を使用
    fetch('https://npb-result.herokuapp.com/starter')
      .then(res => res.json())
      .then(data => {
        starterState.starters = data.map((starter: StarterJson.RootObject) => {

          const convertHankaku = (str: string) =>
            str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s: string) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));

          starter.home_starter_name = convertHankaku(starter.home_starter_name);
          starter.away_starter_name = convertHankaku(starter.away_starter_name);

          return starter;
        });

      });

  });

  return {
    starterState
  };
};