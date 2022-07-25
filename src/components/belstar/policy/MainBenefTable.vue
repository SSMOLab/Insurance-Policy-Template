<template>
  <div>
    <table
      class="w-11/12 text-xs m-auto border-gray"
      cellspacing="0"
      v-for="(item, index) in objToArr(dataset.BENEFIT.ROW)"
      :key="index"
    >
      <tr class="h-14">
        <td class="border-gray w-6/12">
          <p class="font-bold m-1">姓名</p>
          <p class="my-2 text-right mr-1">{{ item.COL1 }}</p>
        </td>
        <td class="border-gray">
          <p class="font-bold m-1">受益比例</p>
          <p class="my-2 text-right mr-1">{{ item.COL4 }}</p>
        </td>
        <td>
          <p class="font-bold m-1">收益順序</p>
          <p class="my-2 text-right mr-1">{{ item.COL3 }}</p>
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
