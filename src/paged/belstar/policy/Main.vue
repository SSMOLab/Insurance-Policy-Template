<template>
  <!-- 主單頁 -->
  <a4-page id="main">
    <template slot="content">
      <div>
        <div
          class="w-11/12 h-10 m-auto mt-5 text-white text-right bg-themeBackgroundMain font-bold fontSize3 leading-10 pr-6"
        >
          保險單號: {{ dataset.Cont.LCCont_ContNo }}
        </div>
        <div class="mt-6 ml-8 mb-4 font-bold">投被保人資料</div>
        <main-card :dataset="dataset"></main-card>
        <div class="mt-6 ml-8 mb-4 font-bold">保險計劃</div>
        <main-plan-table :dataset="dataset"></main-plan-table>
        <div class="mt-6 ml-8 mb-4 font-bold h2">身故保險金受益人資料</div>
        <main-benef-table :dataset="dataset"></main-benef-table>
        <div class="mt-6 ml-8 mb-4 font-bold h3">特別約定</div>
        <div class="text-xs w-11/12 m-auto">
          1.自投保人簽收保險單之日起15日內，如收費不成功，此保險單自動作廢且我公司自始不承擔保險責任。<br />
          2.公司在收取首期保費後，本保險合同的生效日期以2019年03月20日作為生效日期。<br />
          (本欄以下空白)
        </div>
        <div
          class="bg-themeBackgroundMain h-1 mb-2 mx-auto mt-40 w-11/12"
        ></div>
        <main-sign-date :dataset="dataset"></main-sign-date>
        <div class="text-xs text-center mt-8">
          為確保您的保單權益，請及時撥打本公司服務電話、登錄網站或到櫃台進行查詢，覈實保單信息。
        </div>
      </div>
    </template>
  </a4-page>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
import MainCard from "@/components/belstar/policy/MainCard.vue";
import MainPlanTable from "@/components/belstar/policy/MainPlanTable.vue";
import MainBenefTable from "@/components/belstar/policy/MainBenefTable.vue";
import MainSignDate from "@/components/belstar/policy/MainSignDate.vue";
export default {
  data() {
    return {};
  },
  components: {
    a4Page,
    //卡片
    MainCard,
    //主單頁計劃表格
    MainPlanTable,
    //主單頁受益表格
    MainBenefTable,
    //主單頁生效日期
    MainSignDate
  },
  props: {
    dataset: Object
  }
};
</script>

<style scoped></style>
