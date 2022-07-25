<template>
  <table class="table2 w-11/12 text-xs text-center mt-3 ml-3" cellspacing="0">
    <thead>
      <tr>
        <td>險種名稱</td>
        <td width="17%">
          <div>基本保險金額（元）<br />/份數/檔</div>
        </td>
        <td width="14%">保險費（元）</td>
        <td>繳費期限</td>
        <td>保險期限</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in objToArr(dataset.RISKALL.ROW)"
        :key="`raw${index}`"
      >
        <td>{{ item.COL1 }}</td>
        <td>{{ item.COL2 }}</td>
        <td>{{ item.COL3 }}</td>
        <td>{{ item.COL5 }}</td>
        <td>{{ item.COL4 }}</td>
      </tr>
      <template v-if="7 - objToArr(dataset.RISKALL.ROW).length > 0">
        <tr
          v-for="(item, index) in 7 - objToArr(dataset.RISKALL.ROW).length"
          :key="`extra${index}`"
        >
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <b>首期保險費用合計:</b>
        </td>
      </tr>

      <tr>
        <td>繳費頻率: {{ dataset.Cont.LCCont_PayMode }}</td>
        <td colspan="2" width="18%">
          首期繳費方式: {{ dataset.Cont.LCCont_NewPayMode }}
        </td>

        <td colspan="2">
          萬能保險追加保險費:&emsp;{{ dataset.Cont.AddMoney }}&emsp;元
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div>
            <b>如投保年金保險</b>，年金/祝壽金
            領取年齡:&emsp;&emsp;&emsp;週歲，領取方式:
          </div>
          <div><b>如投保分紅保險</b>，紅利領取方式:</div>
        </td>
      </tr>

      <tr>
        <td colspan="2">
          <div>續期繳費方式:{{ dataset.Cont.LCCont_PayLocation }}</div>
          <div>劃款銀行:{{ dataset.Cont.LCCont_RenewalBankName }}</div>
        </td>
        <td colspan="3" class="pt-4 pl-0">
          續期轉賬賬號:{{ dataset.Cont.LCCont_RenewalBankAccNo }}
        </td>
      </tr>
      <tr>
        <td colspan="2">一年期主險/一年期附加險是否自動申請續保:</td>

        <td colspan="3" class="pl-0">
          目前被保險人是否享有社會醫療保險或公費醫療保障:是
        </td>
      </tr>
      <tr>
        <td colspan="5">
          如投保萬能保險，萬能險可投資賬戶分配比例: <br />
          1、各賬戶的分配請遵循我公司的有關賬戶分配的相關規則，且各賬戶的比例之和應為100%;
          <br />
          2、如該項未填寫，則您的可投資保險費按照100%進入穩健型子賬戶。
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    dataset: Object
  }
};
</script>

<style lang="postcss" scoped>
.table2 {
  border-top: 1.5px solid #55b3dc;
}
.table2 > thead > tr > td {
  @apply text-center;
  border: 1.5px solid #55b3dc;
}
.table2 tbody tr td {
  @apply h-5;
  border-right: 1.5px solid #55b3dc;
  border-left: 1.5px solid #55b3dc;
}

.table2 tbody tr:nth-child(odd) {
  background: rgba(242, 242, 242, 1);
}

.table2 tfoot tr td {
  @apply text-left text-xs leading-6 pl-1;
}

.table2 > tfoot tr:not(:last-child) td {
  border-bottom: 1.5px solid rgba(85, 179, 220, 1);
}

.table2 tfoot > tr:first-child > td {
  border-top: 1.5px solid rgba(85, 179, 220, 1);
  @apply bg-themeBorder;
}
</style>
