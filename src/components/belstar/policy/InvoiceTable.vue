<template>
  <div class="invoice w-11/12 m-auto">
    <table cellspacing="0" class="w-full">
      <tr>
        <td>投保人: {{ dataset.Invoice.LCCont_AppntName }}</td>
        <td>保單編號: {{ dataset.Invoice.TempFeeNo }}</td>
      </tr>
      <tr>
        <td class="pb-6">保險費繳納日期: {{ dataset.Invoice.SysDate }}</td>
        <td class="pb-6">繳費方式: {{ dataset.Invoice.LCCont_PayKind }}</td>
      </tr>
      <tr>
        <td>保險項目</td>
        <td>保險費金額</td>
      </tr>
      <tr v-for="(item, index) in objToArr(dataset.RISKALL.ROW)" :key="index">
        <td>{{ item.COL1 }}</td>
        <td>{{ item.COL3 }}元</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataset: Object
  }
};
</script>

<style lang="postcss" scoped>
.invoice {
  height: 20rem;
  background: rgba(245, 245, 245, 1);
  border-top: 1.5px solid #666;
}

.invoice table tr td {
  @apply text-xs pl-2 leading-8;
}

.invoice table tr:nth-child(3) td {
  border-top: 1.5px solid #666;
  border-bottom: 1.5px solid #666;
}
</style>
