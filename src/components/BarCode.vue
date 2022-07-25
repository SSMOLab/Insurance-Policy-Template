<template>
  <div>
    <div style="position:absolute;bottom:0;width:100%">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
// const JsBarcode=require('jsbarcode')
import JsBarcode from "jsbarcode";
export default {
  props: {
    barcodeValue: String
  },
  methods: {
    bar() {
      JsBarcode("#canvas", this.barcodeValue, {
        format: "CODE128",
        width: 2.56,
        height: 30,
        margin: 0,
        marginBottom: 4,
        displayValue: false
      });
    }
  },
  mounted() {
    this.bar();
  }
};
</script>

<style scoped>
#canvas {
  display: block;
  margin: 0 auto;
}
</style>
