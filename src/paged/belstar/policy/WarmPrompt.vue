<template>
  <!-- 溫馨提示 -->
  <a4-page id="warmprompt">
    <template slot="content">
      <div class="text-gray-800 relative pt-6 mt-10 pr-5">
        <div class="font-bold text-3xl bg-white px-8 absolute -mt-5 ml-24 z-10">
          溫馨提示
        </div>
        <div class="absolute bg-themeBackgroundMain h-2 w-8/12"></div>
        <div
          class="absolute bg-themeBackgroundMain h-2 w-7/12 bottom-0 -mb-24 right-0"
        ></div>
        <div class="absolute bg-themeBackgroundMain h-96 w-2"></div>
        <div
          class="absolute bg-themeBackgroundMain w-2 h-80 right-0 bottom-0 -mb-24"
        ></div>
        <div class="mt-16 ml-12 text-xs text-justify mr-5">
          <p class="font-custom">尊敬的王旺福先生:</p>
          <p class="mt-6">感謝您選擇同源人壽為您提供服務!</p>
          <p>
            您的權利和義務已在本契約中載明，請您仔細閱讀。為了維護您的權益，我們還特別提醒您注意以下事項:
          </p>
          <p class="circle mt-6">
            一、請您認真核對保險契約的內容。若核對無誤，請您簽收保單，並親筆簽署回執（包含簽署日期）。若您收到的為電子保單，保單送達即視為您已簽收，請您確認契約內容準確無誤，如有疑問，請及時與我司聯繫。
          </p>
          <p class="circle mt-6">
            二、請您認真閱讀保險條款，並重點關注保險責任和除外責任，瞭解所購買保險產品的保障範圍<span
              class="font-bold"
              >以及在約定的保險責任發生時給付金額的計算方法。</span
            >
          </p>
          <p class="circle mt-6">
            三、對於保險期間在一年以上的契約都設有10天的猶豫期(商業銀行代理銷售的保險產品保險期間超過一年的，猶豫期為15天），猶豫期內退保和猶豫期後退保的給付金額不同，具體規定請您閱讀保險契約「猶豫期」、「契約解除」和<span
              class="font-bold"
              >「現價價值表」</span
            >部分。
          </p>
          <p class="circle mt-6">
            四、請您全面理解您所購買的產品，確定您選擇了合適的保險金額、保險期間和繳費金額、繳費期限。對於需要分期繳納保險費的，如果您無法持續繳納保險費，有可能導致契約效力中止或解除。
          </p>
          <p class="circle mt-6">
            五、對於您投保的萬能保險，瞭解各項費用扣除的具體情況、保單賬戶價值的計算法。對於賬戶價值的增長，我們會保證最低的結算利率，實際結算利率高於最低保證利率的部分需要視投資收益情況而定，這部分是我們不保證的。
          </p>
          <p class="mt-6">
            如您有任何疑問，請撥打我們的全國統一客戶服務和客戶維權電話:400-610-5058或聯繫您的保單服務人員咨詢。
          </p>
        </div>
        <div class="text-xs mt-32 mr-12 text-right">
          同源人壽保險股份有限公司
        </div>
      </div>
    </template>
  </a4-page>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
export default {
  data() {
    return {
      isPage: true,
    };
  },
  props: {
    dataset: Object,
  },
  components: {
    a4Page,
  },
};
</script>

<style lang="postcss" scoped>
p.circle::before {
  content: "";
  @apply bg-themeBackgroundMain rounded-lg inline-block -ml-6 mr-3 h-3 w-3;
}

@media print {
}
</style>
