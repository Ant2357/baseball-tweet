<script lang="ts">
import * as StandingsJson from '@/@types/StandingsJson';
// @ts-ignore
import { GChart } from 'vue-google-charts';
import { defineComponent, PropType, h } from 'vue';

export default defineComponent({
  props: {
    datas: Object as PropType<StandingsJson.RootObject>
  },
  components: {
    GChart,
  },
  setup(props) {
    type ChartDataType = (string | {
      type: string;
      role: string;
    })[][];

    const data = Object(props.datas)?.reduce((acc: ChartDataType, v: StandingsJson.RootObject) => {
      const score = v.win - v.lose;
      return [...acc, [v.name, score, `${score >= 0 ? "貯金" : "借金"} ${Math.abs(score)}`]];
    }
    , [["球団名", "貯金", { type: 'string', role: 'tooltip' }]]);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    }

    const type = "ColumnChart";

    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  }
});
</script>
