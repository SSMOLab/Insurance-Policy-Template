<template>
  <div>
    <div class="price text-xs w-11/12 flex leading-9 m-auto mt-12 h-10">
      <div class="w-3/5">保險費合計（大寫）：{{ dataset.Invoice.CMoney }}</div>
      <div class="bg-themeBackgroundMain leading-10 w-2/5 text-center">
        （小寫）＄{{ dataset.Invoice.Money }}
      </div>
    </div>
    <div class="bank text-xs w-11/12 flex leading-9 m-auto h-10">
      <div class="w-3/5">劃款銀行：{{ dataset.Cont.LCCont_BankName }}</div>
      <div>銀行賬號：{{ dataset.Cont.LCCont_BankAccNo }}</div>
    </div>
    <div class="text-xs w-11/12 m-auto flex leading-9 h-10">
      <div class="w-3/5">
        代理人（代碼）：{{ dataset.receipt.AgentEXName }}（{{
          dataset.receipt.AgentEXCode
        }}）
      </div>
      <div>營業部：{{ dataset.receipt.LCCont_AgentCom }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataset: Object
  }
};
</script>

<style scoped>
.price {
  border-bottom: 2px solid #666;
}

.bank {
  border-bottom: 4px solid #666;
}
</style>
