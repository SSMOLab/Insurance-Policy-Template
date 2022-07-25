<template>
  <div>
    <a4-page id="instruction">
      <template slot="content">
        <!-- 客戶服務指南 -->
        <div
          class="border-themeBorder border-11 border-solid rounded-2xl  m-auto px-6 pt-6 pb-5 mt-5"
        >
          <div class="text-xl font-bold text-center pb-8">客戶服務指南</div>
          <div class=" text-xs text-indent-2 bg-yellow-100 p-2">
            <div class="pb-2 text-indent-0">尊敬的客戶：</div>
            <p>您好！</p>
            <p>
              衷心地感謝您對同源人壽保險股份有限公司的支持與信任！為了確保您持有保險契約的準確性和有效性，更好地保障您的合法權益，我們為您提供了如下服務指南，希望可以幫助您快捷辦理各項業務。
            </p>
          </div>
          <ul class="pt-5 font-bold text-sm w-full m-auto text-justify">
            <li class="text-base mb-5">
              一、保全服務：
              <div class="text-xs text-indent-2 leading-5">
                投保人變更、受益人變更、地址變更、轉賬賬號變更、年齡變更、紅利領取方式變更、減額繳清、契約解除、附加險增加或解除、保險單掛失及補發、契約效力恢復、保險單貸款、生存給付等，如您需辦理上述事項，請您攜帶保險契約正本、申請人身份證明及其它相關材料到您所在城市的同源人壽保險股份有限公司客戶服務中心辦理。具體可申請的保全服務，以所投保條款為準。
              </div>
            </li>
            <li class="text-base mb-5">
              二、咨詢投訴服務：
              <div class="text-xs text-indent-2 leading-5">
                提供保險產品、保險單狀態、續期收費、理賠等方面的咨詢服務，亦接受您對公司及業務員服務的投訴，我們非常歡迎您撥打全國統一客戶服務和客戶維權電話63436699提出對同源人壽產品和服務的意見或建議。
              </div>
            </li>
            <li class="text-base mb-5">
              三、續期服務：
              <div class="text-xs text-indent-2 leading-5">
                1.
                繳納續期保險費：如您選擇以銀行轉賬的方式繳納續期保險費，請您在保險單應繳日前將足額保險費存入指定賬戶，且賬戶金額要較當前應繳保險費多10元以上（注：如當地銀行對保留賬戶所需最低存款額度另有規定，請按照當地銀行的規定保留賬戶餘額），轉賬成功後，公司會為您提供對賬單，您可直接登錄公司官網（網址：http://www.belstar.com.cn）進行查詢。
              </div>
              <div class="text-xs text-indent-2 leading-5">
                2.
                變更續期繳費賬號：如您需要更換續期繳費賬號，請申請辦理賬號變更手續，變更成功後便可通過新賬號繳納續期保險費，如您在我司購買多張保險單，均需使用新賬號繳費，請您對全部保險單進行賬號變更。如賬號變更時，您的保險單已接近繳費寬限期，請先繳完本期保險費再申請賬號變更，以免錯過扣款時間，導致保單失效。
              </div>
              <div class="text-xs text-indent-2 leading-5">
                3.
                恢復保單效力：如您的保險單因未及時繳納續期保險費而失效，請於失效之日起兩年內申請復效，兩年內未完成復效將導致保險單效力終止。
              </div>
            </li>
            <li class="text-base mb-5">
              四、理賠服務：
              <div class="text-xs text-indent-2 leading-5">
                1.
                請您在收到保單後仔細閱讀保險條款，瞭解所購買保險產品的保險責任和除外責任。
              </div>
              <div class="text-xs text-indent-2 leading-5">
                2.
                若被保險人發生保險事故，請在進行積極搶救和治療的同時，不要忘記通過同源保險全國統一客戶服務和客戶維權電話63436699，及時向保險公司報案，我們將在第一時間為您提供服務，避免您因為報案延遲導致不必要的經濟損失。您還可以通過登陸公司官方網站或親臨客戶服務中心等方式進行報案。您也可以委託保單服務人員為您服務。
              </div>
              <div class="text-xs text-indent-2 leading-5">
                3.
                理賠申請時，保險金申請人需要提繳保險金索賠資料，親筆填寫理賠申請書並簽名確認，我們將在您提供材料齊全後為您及時辦理理賠事宜。
              </div>
            </li>
            <li class="text-base mb-5">
              五、同源人壽保險全國統一客戶服務和客戶維權電話
              <div class="text-xs text-indent-2 leading-5">
                如果您對於我公司的保險產品和服務有問題需要咨詢，請撥打我們的全國統一客戶服務和客戶維權電話63436699，我們將竭誠為您提供專業的服務。
              </div>
            </li>
          </ul>
        </div>
      </template>
    </a4-page>
    <a4-page>
      <!-- 封底 -->
      <template slot="content">
        <div :class="theme === 'orange' ? 'fengdi-orange' : 'fengdi'">
          <div class="absolute text-xs text-center position-1">
            <a
              href="https://www.belstar.com.tw/"
              target="_blank"
              class="inline-block w-20 h-20"
            ></a>
            <br />
            <span>下載E動同源</span><br /><span>查保單&nbsp; 享健康服務</span>
          </div>
          <div class="text-center font-bold position-2 absolute">
            同源人壽保險股份有限公司
            <p class="text-xs">SSMO LIFE INSURANCE CO.,LTD.</p>
          </div>
          <div class="top-85 left-25 absolute text-xs">
            <span>郵遞區號: 806</span> <span class="inline-block w-6"></span
            ><span>客服專線: (07)334-5678</span>
            <br />
            <span>總機:(07)334-5678</span><span class="inline-block w-6"></span>
            <span>傳真:(07)334-5678</span>
            <br />
            <span
              >網址:
              <a
                href="https://www.belstar.com.tw/"
                target="_blank"
                style="line-height: 10px;"
                >www.ssmolab.com</a
              ></span
            >
            <img
              src="../../../assets/belstar/img/url1.png"
              width="10px"
              style="display: inline-block;"
            /><br />
            <span>地址: 806高雄市前鎮區民權二路6號</span>
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

<style scoped>
/* 封底背景圖 */
.fengdi {
  background: url("../../../assets/belstar/img/fengdi.png") no-repeat;
  background-size: 100%;
  height: 26.7cm;
  @apply relative;
}
.fengdi-orange {
  background: url("../../../assets/belstar/img/fengdi-orange.png") no-repeat;
  background-size: 100%;
  height: 26.7cm;
  @apply relative;
}
a:visited {
  color: #000;
}
</style>
