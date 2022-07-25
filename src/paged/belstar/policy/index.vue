<template>
  <div>
    <HtmlPage>
      <template slot="appContent">
        <!-- 封皮 -->
        <Cover></Cover>

        <!-- 目錄 -->
        <Toc></Toc>

        <!-- 主頁 -->
        <Main :dataset="dataset" class="footer" id="main"></Main>

        <!-- 現價表 -->
        <!-- for sample -->
        <!-- 3欄 -->
        <Worth :dataset="dataset" class="footer" id="worth"></Worth>
        <!-- 2欄 -->
        <!-- <Worth2 :dataset="dataset" class="footer" id="worth"></Worth2> -->
        <!--  -->
        <!-- 條款 -->
        <Term class="footer" :termList="termList" id="term"></Term>

        <!-- 粘貼 -->
        <Paste class="footer" id="paste"></Paste>

        <!-- 溫馨提示 -->
        <WarmPrompt
          :dataset="dataset"
          class="footer"
          id="warmprompt"
        ></WarmPrompt>

        <!-- 電子投保告知書 -->
        <ElectronicPolicy
          :dataset="dataset"
          class="footer"
          id="electronicpolicy"
        ></ElectronicPolicy>
        <!-- <ElectronicPolicySign :dataset="dataset" class="footer" id="electronicpolicy"/> -->

        <!-- 收據 -->
        <Invoice :dataset="dataset" class="footer" id="invoice"></Invoice>

        <!-- 回執 -->
        <Receipt :dataset="dataset" class="footer" id="receipt"></Receipt>

        <!-- 客戶服務指南 -->
        <Instruction class="footer" id="instruction"></Instruction>
      </template>
    </HtmlPage>
  </div>
</template>

<script>
import HtmlPage from "@/layout/HtmlPage";
import Worth from "./Worth.vue";
// import Worth2 from "./Worth2.vue";
import ElectronicPolicy from "./ElectronicPolicy.vue";
// import ElectronicPolicySign from "./ElectronicPolicySign.vue";
import Toc from "./Toc.vue";
import Receipt from "./Receipt.vue";
import Main from "./Main.vue";
import Invoice from "./Invoice.vue";
import WarmPrompt from "./WarmPrompt.vue";
import Term from "./partials/term-1.vue";
import Paste from "./Paste.vue";
import dataset from "./data/belstarB.json";
import Cover from "./Cover.vue";
import Instruction from "./Instruction.vue";
export default {
  data() {
    return {
      //數據獲取
      dataset: dataset.DATASETS.DATASET,
      termList: [],
      isPaged: false,
      directory: [
        { name: "保險單", path: "main" },
        { name: "現金價值及減少保額表", path: "worth" },
        { name: "保險條款", path: "term" },
        { name: "批注、保險費發票粘貼頁", path: "paste" },
        { name: "溫馨提示", path: "warmprompt" },
        { name: "電子投保告知書", path: "electronicpolicy" },
        { name: "保險費統一收據", path: "invoice" },
        { name: "保險契約簽收回執", path: "receipt" },
        { name: "客戶服務指南", path: "instruction" }
      ]
    };
  },
  components: {
    HtmlPage,
    //組件註冊
    Cover,
    Instruction,
    ElectronicPolicy,
    // ElectronicPolicySign,
    Worth,
    // Worth2,
    Toc,
    Receipt,
    Invoice,
    Main,
    WarmPrompt,
    Term,
    Paste
  },
  methods: {
    async getTerm() {
      let term = [];

      for (let i = 0; i < this.dataset.term.length; i++) {
        const termName = this.dataset.term[i].code
          ? this.dataset.term[i].code
          : "termA";
        await this.$axios
          .get(`http://localhost:3000/term/${termName}.json`)
          .then(res => {
            term.push(res.data);
            this.termList = term;
          });
      }

      return term;
    },
    async getData() {
      const dataName = "belstarA";
      await this.$axios
        .get(`http://localhost:3000/data/${dataName}.json`)
        .then(res => {
          this.dataset = res.data.DATASETS.DATASET;
          this.$store.commit("setOrderNumber", this.dataset.Invoice.TempFeeNo);
        });
    },
    afterProcess() {
      if (window.Paged) {
        class MyHandler extends Paged.Handler {
          constructor(chunker, polisher, caller) {
            super(chunker, polisher, caller);
          }
          async afterPreview() {
            window.isRenderable = true;
          }
        }
        Paged.registerHandlers(MyHandler);
      }
    }
  },
  async mounted() {
    try {
      await this.getData();
      await this.getTerm();
      if (window.PagedPolyfill) {
        await this.$store.commit("setPagedStatus", true);
        await this.$store.commit("setAnimation", false);
        this.isPaged = true;
        await window.PagedPolyfill.preview();
      } else {
        await this.$store.commit("setPagedStatus", false);
        await this.$store.commit("setAnimation", true);
        this.isPaged = false;
      }
      await this.afterProcess();
    } catch (e) {
      console.log(e);
    } finally {
      if (window.isRenderable === false) {
        window.isRenderable = true;
      }
    }
  }
};
</script>

<style scoped></style>
