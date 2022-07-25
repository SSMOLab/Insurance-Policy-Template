<template>
  <div style="justify-content:space-between;" class="flex px-2 mt-8">
    <table class="w-4/12" cellspacing="0">
      <thead>
        <tr style="height: 50px;" class="text-center leading-5 fontSize3">
          <td class="bg-themeBackgroundGradient1">保單<br />年度末</td>
          <td
            class="bg-themeBackgroundGradient2"
            style="border-left:1px solid #FFF;border-right:1px solid #FFF;"
          >
            現金價值<br />（元）
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in dataset.WORTH.ROW.slice(0, 38)"
          :key="index"
        >
          <td>{{ item.COL1 }}</td>
          <td>{{ item.COL2 }}</td>
        </tr>
        <tr
          v-for="(item1, index1) in 38 - dataset.WORTH.ROW.slice(0, 38).length"
          :key="index1 + 38"
        >
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="w-4/12" cellspacing="0" style="padding: 0 1.8px 0 1.8px;">
      <thead>
        <tr style="height: 50px;" class="text-center leading-5 fontSize3">
          <td
            class="bg-themeBackgroundGradient1"
            style="border-left: 1px solid #FFF;"
          >
            保單<br />年度末
          </td>
          <td
            class="bg-themeBackgroundGradient2"
            style="border-left:1px solid #FFF;border-right:1px solid #FFF;"
          >
            現金價值<br />（元）
          </td>
        </tr>
      </thead>
      <tbody class="line-1">
        <tr
          v-for="(item, index) in dataset.WORTH.ROW.slice(38, 76)"
          :key="index + 76"
        >
          <td>{{ item.COL1 }}</td>
          <td>{{ item.COL2 }}</td>
        </tr>
        <tr
          v-for="(item1, index1) in 38 - dataset.WORTH.ROW.slice(38, 76).length"
          :key="index1 + 114"
        >
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="w-4/12" cellspacing="0">
      <thead>
        <tr style="height: 50px;" class="text-center leading-5 fontSize3">
          <td class="bg-themeBackgroundGradient1">保單<br />年度末</td>
          <td
            class="bg-themeBackgroundGradient2"
            style="border-left: 1px solid #FFF;border-right: 1px solid #FFF;"
          >
            現金價值<br />（元）
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in dataset.WORTH.ROW.slice(76, 152)"
          :key="index + 252"
        >
          <td>{{ item.COL1 }}</td>
          <td>{{ item.COL2 }}</td>
        </tr>
        <tr
          v-for="(item1, index1) in 38 -
            dataset.WORTH.ROW.slice(76, 152).length"
          :key="index1 + 290"
        >
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
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
<style lang="postcss" scoped>
div > table > thead > tr > td {
  @apply font-sans;
}

div > table > tbody > tr > td {
  font-size: 11px;
  @apply text-center font-sans h-4 p-0;
}
/* 鼠標懸停 */
div > table > tbody > tr:hover {
  border: 1px solid orangered;
}
/* 表頭背景 */
div > table > tbody > tr:nth-child(even) {
  background: rgba(242, 242, 242, 1);
}
/* 表格邊框 */
div > table > tbody > tr > td:nth-child(even) {
  border-left: 1px solid #9fdaf4;
  border-right: 1px solid #9fdaf4;
}

div > table:first-child > tbody > tr > td:nth-child(1) {
  border-left: 1px solid #9fdaf4;
}

div > table:last-child > tbody > tr > td:nth-child(3) {
  border-right: 1px solid #9fdaf4;
}

.line-1 {
  border-left: 2.5px solid #9fdaf4;
  border-right: 2.5px solid #9fdaf4;
}

@media print {
  .print {
    display: block;
  }
}
</style>
