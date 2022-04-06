import { reactive, onMounted } from 'vue';

export type StandingsState = {
  cl: { [x: string]: string; }[];
  pl: { [x: string]: string; }[];
  cp: { [x: string]: string; }[];
  op: { [x: string]: string; }[];
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