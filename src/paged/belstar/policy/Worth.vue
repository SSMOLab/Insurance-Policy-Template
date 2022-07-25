<template>
  <div>
    <!-- 現價表 -->
    <a4-page id="worth">
      <template slot="content">
        <div class="pt-4">
          <!-- 表單標題 -->
          <WorthTitle title="現金價值及減少保額表" />
          <!-- 表單資訊 -->
          <WorthInfo :dataset="dataset" />
          <!-- for demo 現金價值減少保額表 -->
          <!-- <WorthTable :dataset="dataset" /> -->
          <WorthInsuredTable :dataset="dataset" />
          <!--  -->
          <!-- 表單說明 -->
          <WorthDescription />
        </div>
      </template>
    </a4-page>

    <a4-page>
      <!-- 圖表 -->
      <!-- for demo  更改圖表樣式 -->
      <WorthChartLine slot="content" />
      <!-- <WorthChartBar slot="content" /> -->

      <!--  -->
    </a4-page>
  </div>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
import WorthTitle from "@/components/belstar/policy/WorthTitle.vue";
import WorthInfo from "@/components/belstar/policy/WorthInfo.vue";
// import WorthTable from "@/components/belstar/policy/WorthTable.vue";
import WorthInsuredTable from "@/components/belstar/policy/WorthInsuredTable.vue";
import WorthDescription from "@/components/belstar/policy/WorthDescription.vue";
import WorthChartLine from "@/components/belstar/policy/WorthChartLine.vue";
// import WorthChartBar from "@/components/belstar/policy/WorthChartBar.vue";

export default {
  data() {
    return {};
  },
  props: {
    dataset: Object
  },
  components: {
    a4Page,
    WorthTitle,
    WorthInfo,
    // WorthTable,
    WorthInsuredTable,
    WorthDescription,
    WorthChartLine
    // WorthChartBar
  }
};
</script>
