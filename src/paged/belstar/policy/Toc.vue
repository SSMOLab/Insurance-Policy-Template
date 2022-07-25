<template>
  <!-- 目錄 -->
  <a4Page>
    <template slot="content">
      <div class="flex">
        <div class="toc">
          <div class="pl-12 font-bold text-xl pt-16">保險契約目錄</div>
          <div class="pl-12 text-sm w-11/12 mt-5">
            本保險契約由保險單、保險條款、投保單副本以及與契約有關的投保文件、合法有效的聲明、批注、批單、附加險契約和其他書面協議構成
          </div>
        </div>
        <div
          style="height: 26.7cm;"
          class="bg-themeBackgroundMain w-6/12 pt-64"
        >
          <ul class="directory">
            <li v-for="(item, index) in directorys" :key="index">
              <a :href="'#' + item.className" class="tocPage">{{
                directory[item.className]
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </a4Page>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
import directoryData from "../../../directory/directory.js";
export default {
  data() {
    return {
      directory: directoryData,
      directoryorder: []
    };
  },
  components: {
    a4Page
  },
  computed: {
    directorys() {
      let directorys = [];
      // let directoryOrder=[]
      let directorysOrder = this.directoryorder;
      for (let i = 0; i < directorysOrder.length; i++) {
        if (directorysOrder[i].isShow) {
          directorys.push({
            className: directorysOrder[i].title
          });
        }
      }
      return directorys;
    }
  },
  mounted() {
    this.directoryShow();
  },
  methods: {
    directoryShow() {
      this.directoryorder.push({
        title: "main",
        isShow: true
      });
      this.directoryorder.push({
        title: "worth",
        isShow: true
      });
      this.directoryorder.push({
        title: "term",
        isShow: true
      });
      this.directoryorder.push({
        title: "paste",
        isShow: true
      });
      this.directoryorder.push({
        title: "warmprompt",
        isShow: true
      });
      this.directoryorder.push({
        title: "electronicpolicy",
        isShow: true
      });
      this.directoryorder.push({
        title: "invoice",
        isShow: true
      });
      this.directoryorder.push({
        title: "receipt",
        isShow: true
      });
      this.directoryorder.push({
        title: "instruction",
        isShow: true
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
/* 目錄標題樣式 */
.directory > li > a {
  @apply font-bold text-xl text-white pt-5 pl-5 inline-block;
}

.toc {
  @apply w-6/12;
  height: 25.7cm;
}
/* ‘鏈接’ 圖片 */
.tocPage::before {
  content: "";
  background: url("../../../assets/belstar/img/url.png") no-repeat;
  background-size: 100%;
  @apply inline-block mr-3 w-4 h-4;
}
/* for demo x */
a.tocPage::after {
  position: absolute;
  right: 0px;
  content: target-counter(attr(href), page);
  padding-right: 0.8rem;
}
/*  */
</style>
