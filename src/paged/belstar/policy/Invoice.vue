<template>
  <!-- 收據 -->
  <a4-page id="invoice">
    <template slot="content">
      <div class="bg-themeBackgroundMain w-full text-center py-20 ">
        <img
          src="../../../assets/belstar/img/logo.png"
          style="width:175px;"
          class="inline-block"
        />
      </div>
      <div>
        <div class="text-4xl font-bold mx-8 mt-16 mb-12">保險統一收據</div>
        <div
          class="flex m-auto mb-6 h-10 bg-themeBackgroundMain w-11/12 items-center pl-24"
        >
          <div class="w-4 ml-64 h-9"></div>
          <div class="w-48 h-9 ml-1"></div>
          <div class="w-3 h-9 ml-1"></div>
          <div class="w-5 h-9 ml-1"></div>
        </div>
        <div
          style="border-bottom: 3px solid #666;"
          class="w-11/12 m-auto mb-2 pb-1 text-xs"
        >
          列印日期:{{ dataset.Invoice.SysDate }}
        </div>
        <invoice-table :dataset="dataset"></invoice-table>
        <invoice-receipt :dataset="dataset"></invoice-receipt>
        <div class="text-xs m-auto w-11/12">
          注：1、本收據手寫無效。<br />
          &emsp;&emsp;2、如果您需要發票，請憑此收據到我公司換領，換領發票後此收據作廢。
        </div>
      </div>
    </template>
  </a4-page>
</template>

<script>
import a4Page from "@/layout/a4Page.vue";
import InvoiceTable from "@/components/belstar/policy/InvoiceTable.vue";
import InvoiceReceipt from "@/components/belstar/policy/InvoiceReceipt.vue";
export default {
  data() {
    return {
      isPage: true
    };
  },
  components: {
    a4Page,
    //收據表格組件
    InvoiceTable,
    //收據回執樣式組件
    InvoiceReceipt
  },

  props: {
    dataset: Object
  }
};
</script>

<style scoped>
.bg-themeBackgroundMain > div {
  @apply bg-white;
  transform: skewX(-45deg);
}
</style>
