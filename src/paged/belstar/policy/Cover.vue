<template>
  <div>
    <a4-page>
      <template slot="content">
        <!--封皮-->
        <div
          class="w-12/12"
          :class="theme === 'orange' ? 'cover-orange' : 'cover'"
        >
          <a
            href="https://www.belstar.com.tw/"
            target="_blank"
            class="url1"
          ></a>
          <div class="w-60 absolute left-40 leading-26 bg-transparent top-60">
            <div class="text-center text-7xl font-bold">保險契約</div>
            <div class="text-center text-2xl leading-3 ">
              INSURANCE CONTRACT
            </div>
          </div>
          <div class="absolute bottom-4 font-bold text-center w-full">
            <a href="https://www.belstar.com.tw/" target="_blank"
              >同源人壽保險股份有限公司</a
            >
          </div>
        </div>
      </template>
    </a4-page>
    <a4-page>
      <template slot="content">
        <!--內頁-->
        <div
          class="border-themeBorder border-11 border-solid rounded-2xl  m-auto px-6 pt-6 pb-5 mt-5"
        >
          <div class=" text-xs">
            <div class="text-2xl text-center pb-3">公司簡介</div>
            <p class="text-sm">
              高雄同源電子系統有限公司（以下簡稱同源公司）成立於1995年，註冊資金380萬美元，是全外資的高科技企業。
            </p>
            <div class="text-themeTextTitle my-4  text-sm font-bold">定位</div>
            <div>
              目前致力於文件工程(Document
              Engineering)技術的探索與應用，並以網際網路技術(Web
              Service)提供多樣性及高彈性的文件處理服務及管理。
            </div>
            <div class="my-4">
              文件工程(Document Engineering)如同資訊工程(Information
              Engineering)有密不可分的關係。
              但是，文件工程著重於訊息在文件上展現的技術。
            </div>
            <div class="content3">
              企業使用資訊工程的技術及方法來提升運作流程上的效能及品質；文件工程則是將文件：
              <ul>
                <li>零件化(Componentize)</li>
                <li>模版化(Templating)</li>
                <li>重復使用(Reusable)</li>
                <li>個性化(Personalize)</li>
                <li>版本管控(Versioning)</li>
                <li>同源多元輸出(Single-source/Multi-channel Outputs)</li>
              </ul>
            </div>
            <div class="mt-4">
              以減少重工，確保品質及品牌形象的一致性。
              經過多年在文件工程上的鑽研，我們陸續推出下列文件處理服務平台：
              <ul>
                <li>
                  動態文件模版設計管理平台(Dynamic Document Template Management
                  System)
                </li>
                <li>同源多元輸出(SSMO,Single-source/Multi-channel Outputs)</li>
                <li>按需生產平台(ODM, On-demand Manufacturing)</li>
                <li>
                  因應文件工程多變的應用環境及需求，我們全面採取網際網路技術及框架。以微服務(Microservices)架構滿&emsp;足多變的需求，以OpenAPI實現多樣服務的無縫接軌。
                </li>
              </ul>
            </div>
            <div class="text-themeTextTitle my-4 text-sm font-bold">服務</div>
            <div>
              除了對文件結構性解析及研究外，多年來亦運用自行開發「雲」服務平台(Cloud
              Platform)，為客戶提供專業的文件外包服務解決方案。
            </div>
            <div class="my-4">
              典型的例子，是保險保單的處理：從與保險公司專線連線、實時數據傳輸，數據處理，條件式條款的組合，個性化保單契約的渲染生成，批次處理、分區生產，物流追蹤等各個階段實現全面優化管理與監控。
            </div>
            <div>
              截至目前，已在全國主要省會城市建立自有文件處理中心21個，駐點服務中心16個，與客戶合作建立37個外包服務站點。
            </div>
            <div class="text-themeTextTitle my-4 text-sm font-bold">客戶</div>
            <div class="text-xs">
              目標客戶多以文件為核心的產業，譬如：
              <div class="py-1">保險業</div>
              <div>銀行</div>
              <div class="py-1">證券</div>
              <div>製造業</div>
              <div class="py-1">電信</div>
              <div>郵政</div>
            </div>
          </div>
        </div>
      </template>
    </a4-page>
  </div>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
export default {
  data() {
    return {
      theme: "blue",
    };
  },
  components: {
    a4Page,
  },
  mounted() {
    if (process.env && process.env.VUE_APP_THEME === "orange") {
      this.theme = "orange";
    } else {
      this.theme = "blue";
    }
  },
};
</script>

<style lang="postcss" scoped>
/* 背景圖片 */
.cover {
  background: url("../../../assets/belstar/img/fengpi.png") no-repeat;
  background-size: 100%;
  height: 26.7cm;
}
.cover-orange {
  background: url("../../../assets/belstar/img/fengpi-orange.png") no-repeat;
  background-size: 100%;
  height: 26.7cm;
}
a:visited {
  color: #000;
}

.text-themeTextTitle::before {
  content: "";
  @apply inline-block rounded-lg w-2 h-2 bg-themeBackgroundGradient5 -ml-3 mr-1;
}
ul > li {
  @apply leading-5;
}
/* 列表樣式 · */
ul > li::before {
  content: "";
  @apply rounded-lg inline-block bg-black w-1 h-1 -ml-2 mr-1 align-middle;
}
</style>
