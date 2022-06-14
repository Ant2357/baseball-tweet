<script lang="ts">
// @ts-ignore
import { GChart } from 'vue-google-charts';
import { defineComponent, PropType, h } from 'vue';

export default defineComponent({
  props: {
    datas: Object as PropType<{ [x: string]: unknown; }[]>
  },
  components: {
    GChart,
  },
  setup(props) {
    const data = props.datas?.reduce((acc: any, v: any) => {
      const score = Number(v.win) - Number(v.lose);
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
