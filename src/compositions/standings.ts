import * as StandingsJson from '@/@types/StandingsJson';
import { reactive, onMounted } from 'vue';

export type StandingsState = {
  cl: StandingsJson.RootObject | unknown;
  pl: StandingsJson.RootObject | unknown;
  cp: StandingsJson.RootObject | unknown;
  op: StandingsJson.RootObject | unknown;
}

export interface UseStandings {
  standingsState: StandingsState
}

export const useStandings = (): UseStandings => {
  const standingsState = reactive<StandingsState>({
    cl: [],
    pl: [],
    cp: [],
    op: []
  });

  onMounted(() => {
    //『NPB API(自作)』を使用
    // セ・リーグの順位表
    fetch('https://npb-result.herokuapp.com/cl')
      .then(res => res.json())
      .then(data => standingsState.cl = data);

    // パ・リーグの順位表
    fetch('https://npb-result.herokuapp.com/pl')
      .then(res => res.json())
      .then(data => standingsState.pl = data);
    
    // セ・パ交流戦の順位表
    fetch('https://npb-result.herokuapp.com/cp')
      .then(res => res.json())
      .then(data => standingsState.cp = data);

    // オープン戦の順位表
    fetch('https://npb-result.herokuapp.com/op')
      .then(res => res.json())
      .then(data => standingsState.op = data);

  });

  return {
    standingsState
  };
};