<template>
  <table cellspacing="0" class="table1 w-11/12 mt-3 ml-3">
    <tr>
      <td>
        身故受益人姓名：<span v-if="dataset">{{
          dataset.BENEFIT.ROW.COL1
        }}</span>
      </td>
      <td>
        性別：<span v-if="dataset">{{ dataset.BENEFIT.ROW.COL6 }}</span>
      </td>
      <td>
        出生日期：<span v-if="dataset">{{ dataset.BENEFIT.ROW.COL7 }}</span>
      </td>
      <td>
        與被保險人關係：<span v-if="dataset">{{
          dataset.BENEFIT.ROW.COL9
        }}</span>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        證件/號碼：<span v-if="dataset">{{ dataset.BENEFIT.ROW.COL2 }}</span>
      </td>
      <td>
        受益比例：<span v-if="dataset">{{ dataset.BENEFIT.ROW.COL4 }}</span>
      </td>
      <td>
        順序：<span v-if="dataset">{{ dataset.BENEFIT.ROW.COL3 }}</span>
      </td>
    </tr>
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
table.table1 {
  border: 2px solid #979797;
}
table.table1 tr td {
  border-bottom: 1px solid #979797;
  @apply text-xs pl-2 h-6 leading-5;
}

table.table1 > tr > td:not(:first-child) {
  border-left: 1px solid #979797;
}
</style>
