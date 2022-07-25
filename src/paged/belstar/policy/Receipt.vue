<template>
  <!-- 回執頁 -->
  <a4-page id="receipt">
    <template slot="content">
      <div class="relative leading-6 text-xs">
        <div class="text-sm font-bold absolute right-16">保險公司聯</div>
        <div class="w-full text-center flex justify-between items-center pt-6">
          <div class="bg-themeBackgroundMain h-3 w-56"></div>
          <div class="text-2xl font-bold px-9">保險契約簽收回執</div>
          <div class="bg-themeBackgroundMain h-3 w-56"></div>
        </div>
        <div class="w-full pl-8 font-sans mt-12">
          <div class="font-custom">
            {{ dataset.Cont.LCCont_AppntName }}&nbsp;先生：
          </div>
          <div class="text-indent-2">您好！</div>
          <div class="text-indent-2">
            感謝您選擇同源人壽保險股份有限公司為您服務!
          </div>
          <div class="text-indent-2">
            根據您的申請，我公司已簽發{{
              dataset.Cont.LCCont_ContNo
            }}號保險單，請您審核。如您對投保單及保險契約
          </div>
          <div>
            上的各項內容確認無誤，並已知曉您的各項權利和義務，敬請在投保人簽章處簽名並注明簽署日期，以保護您的權益。
          </div>
          <div class="text-indent-2">
            如您對上述事項有任何疑問，歡迎您隨時來電或與您的代理人聯繫，我們將竭誠為您服務。
          </div>
          <div class="text-indent-2">祝您事業發達，身體健康!</div>
        </div>
        <div class="font-bold text-indent-2 pl-8 pt-10 pb-2">
          為確保您的保單權益，請及時撥打本公司服務電話、登錄網站或到櫃台進行查詢，覈實保單信息。
        </div>
        <div class="flex justify-between px-5 mt-6">
          <div class="p-4 w-80 relative">
            <div
              class="absolute bg-themeBackgroundMain w-1 h-20 bottom-0 left-0"
            ></div>
            <div
              class="absolute bg-themeBackgroundMain w-32 h-1 bottom-0 left-0"
            ></div>
            <div
              class="absolute bg-themeBackgroundMain w-32 h-1 top-0 right-0"
            ></div>
            <div
              class="absolute bg-themeBackgroundMain w-1 h-20 right-0 top-0"
            ></div>
            <div>
              代理人：{{ dataset.receipt.AgentEXName }}（{{
                dataset.receipt.AgentName
              }}）
            </div>
            <div>銷售機構：{{ dataset.receipt.BranchAttr }}</div>
            <div>管理機構代碼：{{ dataset.Cont.ManageComCode }}</div>
            <div>管理機構名稱：{{ dataset.Cont.ManageComName }}</div>
          </div>
          <div class="font-bold py-8">
            <div>同源保險全國客戶服務電話 400-510-5058</div>
            <div>公司網址:www.ssmolab.com</div>
            <div>公司地址:806高雄市前鎮區民權二路6號</div>
          </div>
        </div>
        <div class="bg-themeBackgroundInfo py-5 px-8 mt-8">
          <div>本人在此簽名確認以示對投保單和保單全部內容之理解和認可：</div>
          <div>
            本人已收到同源人壽{{ dataset.Cont.LCCont_ContNo }}號保險契約<span
              class="font-bold font-custom"
              >（投保人：{{ dataset.Cont.LCCont_RenewalAccName }}，被保險人：{{
                dataset.Cont.LCCont_AppntName
              }}）</span
            >的契約正本，確認保險契約材料齊全，投保人、被保人、受益人信息準確，已閱讀並理解條款內容，知曉本人的權利與義務及簽收保單後開始計算猶豫期。
          </div>
          <div class="circle-1">
            備注：若您此前已簽收完電子回執，則本《保險契約簽收回執》作廢，您無需再次簽收，猶豫期自電子回執簽收次日起計算
          </div>
          <div class="text-right text-xs pr-32">投保人簽章：</div>
          <div class="text-right text-xs pr-2">
            簽字日期：<span class="w-8 inline-block"></span>年<span
              class="w-8 inline-block"
            ></span
            >月<span class="w-8 inline-block"></span>日
          </div>
        </div>
        <div class="w-full border-dashed border-1 my-5"></div>
        <div class="text-sm font-bold text-right pr-12">（保險公司填寫聯）</div>
        <div class="ml-16 mt-10">
          <div>保單號：</div>
          <div>代理人：</div>
          <div>保險公司簽收人：</div>
          <div>簽收日期：</div>
        </div>
      </div>
    </template>
  </a4-page>
</template>
<script>
import a4Page from "../../../layout/a4Page.vue";

export default {
  props: {
    dataset: Object,
  },
  data() {
    return {
      isPage: true,
    };
  },
  components: {
    a4Page,
  },
};
</script>
<style lang="postcss" scoped>
.circle-1::before {
  content: "";
  @apply bg-white rounded-lg inline-block w-3 h-3 -ml-5 mr-2;
}
.border-dashed {
  border-color: #55b3dc;
}
</style>
