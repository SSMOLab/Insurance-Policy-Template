<template>
  <div
    class="w-6/12 h-32 inline-block bg-themeBackgroundMain fontSize3 rounded-2xl text-white pt-6 pl-6"
  >
    <div class="font-bold">保險單號：{{ dataset.Cont.LCCont_ContNo }}</div>
    <div>投保險種：{{ dataset.Cont.RiskName }}</div>
    <div>基本保險金額：{{ dataset.Cont.LCCont_Prem }}元</div>
    <div>繳費期限：{{ dataset.Cont.PayTerm }}</div>
  </div>
</template>
<script>
export default {
  props: {
    dataset: Object
  },
  computed: {}
};
</script>
