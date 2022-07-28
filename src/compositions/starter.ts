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
      .then(data => starterState.starters = data);

  });

  return {
    starterState
  };
};