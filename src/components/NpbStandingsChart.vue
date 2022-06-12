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
    const data = props.datas?.reduce((acc: any, v: any) =>
      [...acc, [v.name, Number(v.win) - Number(v.lose)]]
    , [["球団名", "貯金"]]);

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
