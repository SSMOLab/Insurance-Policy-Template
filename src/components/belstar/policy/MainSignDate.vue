<template>
  <div>
    <table class="m-auto w-11/12 text-sm" cellspacing="0">
      <tr>
        <td colspan="2">{{ dataset.CONVER.LCCont_ComName }}</td>
        <td class="font-bold pl-20">保單製單日期：{{ getDate }}</td>
      </tr>
      <tr>
        <td colspan="2">金管會保險局-保險申訴電話: 0800-789-885</td>
        <td class="font-bold pl-20">
          保單提繳日期：{{ dataset.Cont.LCCont_SignDate }}
        </td>
      </tr>
      <tr class="h-14">
        <td class="w-1/12"><span>地址：</span></td>
        <td class="w-5/12">{{ dataset.CONVER.LCCont_ComAddress }}</td>
        <td>
          <barcode
            class="ml-10"
            :value="dataset.Invoice.TempFeeNo"
            height="25"
            display-value="false"
          ></barcode>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
  components: {
    barcode: VueBarcode
  },
  props: {
    dataset: Object
  },
  computed: {
    getDate() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let day = new Date().getDate();
      if (month < 10) {
        month = "0" + month;
      }
      return year + "年" + month + "月" + day + "日";
    }
  }
};
</script>

<style></style>
