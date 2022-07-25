<template>
  <div>
    <table class="w-11/12 text-xs m-auto border-gray" cellspacing="0">
      <tr class="h-14">
        <td class="border-gray">
          <p class="font-bold m-1">險種名稱：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.RiskName }}</p>
        </td>
        <td class="border-gray w-2/12">
          <p class="font-bold m-1">基本保險金額：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.SumMoney }}</p>
        </td>
        <td class="border-gray w-2/12">
          <p class="font-bold m-1">保險費：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.LCCont_Prem }}</p>
        </td>
        <td class="border-gray w-2/12">
          <p class="font-bold m-1">保險期限：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.InsureTerm }}</p>
        </td>
        <td class="border-gray w-2/12">
          <p class="font-bold m-1">繳費期限：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.PayTerm }}</p>
        </td>
      </tr>
      <tr class="h-14">
        <td colspan="2" class="border-gray">
          <p class="font-bold m-1">繳費頻率：</p>
          <p class="my-2 text-right mr-1">{{ dataset.Cont.LCCont_PayMode }}</p>
        </td>

        <td colspan="3" class="bg-themeBackgroundInfo border-gray">
          <p class="font-bold m-1">保險費合計：</p>
          <p class="my-2 text-right mr-1">
            {{ dataset.Cont.CPrem }}（NTD: {{ dataset.Cont.LCCont_Prem }}）
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    dataset: Object
  }
};
</script>

<style scoped></style>
