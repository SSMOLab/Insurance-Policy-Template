<template>
  <div id="myChart" class="w-full mt-8" style="height: 500px;"></div>
</template>
<script>
export default {
  data() {
    return {
      //保單年度
      Policy_Year: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      //現金價值
      Cash_Value: [
        570.0,
        1935.0,
        3315.0,
        5355.0,
        8355.0,
        11520.0,
        14850.0,
        18360.0,
        22065.0,
        25965.0,
        30075.0,
        34440.0,
        39030.0,
        43830.0,
        48855.0,
        54150.0,
        59715.0,
        65565.0,
        71775.0,
        78375.0
      ],
      //減少保額
      Deduction: [
        1380.0,
        4590.0,
        7665.0,
        12075.0,
        18375.0,
        24735.0,
        31140.0,
        37620.0,
        44190.0,
        50835.0,
        57600.0,
        64515.0,
        71595.0,
        78795.0,
        86145.0,
        93750.0,
        101610.0,
        109800.0,
        118455.0,
        0.0
      ],
      chartType: "bar"
    };
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        //標題
        title: {
          text: "現金價值及減少保額表"
        },

        //顯示圖例
        legend: {
          data: ["現金價值", "減少保額"]
        },
        animation: this.$store.state.animation || false,

        //工具
        // toolbox: {
        //   show: true,
        //   feature: {
        //     dataView: {
        //       show: true,
        //       readOnly: false
        //     },
        //     magicType: {
        //       show: true,
        //       type: ['line', 'bar']
        //     },
        //     restore: {
        //       show: true
        //     },
        //     saveAsImage: {
        //       show: true
        //     }
        //   }
        // },
        xAxis: [
          {
            //x軸
            name: "年末",
            type: "category",
            data: this.Policy_Year,
            boundaryGap: false,
            splitLine: {
              show: true
            }
          }
        ],
        yAxis: [
          {
            //y軸
            name: "現金價值（元）",
            type: "value",
            axisLine: {
              //y軸
              show: true
            },
            splitLine: {
              //網格線
              show: true
            },
            axisTick: {
              //刻度線
              show: true
            }
          }
        ],
        //獲取data，畫圖
        series: [
          {
            name: "現金價值",
            type: this.chartType,
            data: this.Cash_Value
          },
          {
            name: "減少保額",
            type: this.chartType,
            data: this.Deduction
          }
        ],
        color: ["green", "blue"] //線條顏色
      });
    },
    afterRendered() {
      const self = this;
      class MyHandler extends Paged.Handler {
        constructor(chunker, polisher, caller) {
          super(chunker, polisher, caller);
        }
        afterRendered() {
          self.drawLine();
        }
      }
      Paged.registerHandlers(MyHandler);
    }
  },
  mounted() {
    try {
      this.afterRendered();
    } catch {
      this.drawLine();
    }
  }
};
</script>
