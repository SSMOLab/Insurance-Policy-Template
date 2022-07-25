<template>
  <div>
    <a4-page id="electronicpolicy">
      <!-- 電子投保告知書-1 -->
      <template slot="content">
        <div
          class="title3 text-white text-center bg-themeBackgroundMain w-full font-bold"
        >
          電子投保告知書
        </div>
        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-3 ml-3 font-bold"
        >
          投保須知
        </div>
        <ul class="w-11/12 text-justify text-xs mt-5 ml-8">
          <div class="font-bold">
            感謝您選擇同源人壽保險股份有限公司為您服務，請您在簽收保單前仔細閱讀以下提示：
          </div>
          <li>
            1.為了使您詳知所投保的保險內容並維護您的合法權益，請在簽字之前仔細
            閱讀保險條款，並確認已瞭解保險條款的各項內容(注意保險責任、責任免除、猶豫期、退保等關鍵信息)後方可簽字。
          </li>
          <li>
            2.投保書是投保人向本公司申請投保的重要
            文件，投保人、被保險人或其法定監護人應在投保書簽名欄上親筆簽章以示確認所填寫的內容，本公司對投保書及告知內容承擔保密義務。
          </li>
          <li>
            3.投保人(被保險人)在
            投保時應如實告知投保書中的各項內容，不得故意隱瞞或不實告知，否則本公司有權依據法律規定及本保險契約約定解除保險契約，所有告知事項均以書面告知為準，
            口頭告知無效。同時您的個人信息(地址、電話等)將作為計算保險費、核保、寄送保險契約、電話回訪等服務的重要依據，請您提供真實、完整的信息，否則將不利
            於保護您的合法權益。
          </li>
          <li>
            4.如果投保人選擇分期繳納保險費，請投保人根據自身的財務狀況，選擇合適的繳費期限和繳費金額，無法持續繳納保險費可能導致保險契約
            效力中止或契約解除。本公司將於續期保費應繳日前向投保人發出繳費提示。
          </li>
          <li>
            5.為響應國家低碳環保的號召，公司為您提供的通知及函件將採用電子單證形式，您可
            以到公司官網或到您投保時預留的電子郵箱中查詢閱讀。如您需要紙質單證，可到公司客服中心或撥打全國統一客戶服務和客戶維權電話95510申請。
          </li>
          <li>
            6.投保人應對被
            保險人有保險利益;如為未成年人投保以死亡為給付責任的保險，投保人須為未成年人的父母，且身故保險金總和不能超過保險監督管理機構的規定額度。
          </li>
        </ul>

        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-8 ml-3 font-bold"
        >
          投保資料
        </div>

        <ElectronicPolicyCard :dataset="dataset"></ElectronicPolicyCard>
        <ElectronicPolicyTable :dataset="dataset"></ElectronicPolicyTable>
      </template>
    </a4-page>

    <!-- 電子投保告知書-2 -->
    <a4-page>
      <template slot="content">
        <div class="mt-3"></div>
        <ElectronicPolicyTable></ElectronicPolicyTable>
        <ElectronicPolicyTable></ElectronicPolicyTable>
        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-6 font-bold ml-3"
        >
          保險計劃
        </div>
        <div
          class="bg-themeBackgroundGradient4 w-12 text-center text-xs m-1 text-white rounded-md float-right -mt-4 mr-16"
        >
          客戶聯
        </div>
        <ElectronicPolicyPlan :dataset="dataset"></ElectronicPolicyPlan>

        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-6 font-bold ml-3"
        >
          財務及其它聲明信息
        </div>
        <table
          class="border-1 border-solid border-themeBorder text-xs w-11/12  mt-4 leading-5 ml-3"
          cellspacing="0"
        >
          <tr style="letter-spacing: 1px;border-bottom: 1.5px solid #55B3DC;">
            <td class="font-bold">
              填寫或回答下列問題，並選擇選擇項後的「<span class="circle"></span
              >」。選「是」者請在「告知信息及備注欄」中注明問題號碼並詳細說明:
            </td>
            <td colspan="2" width="10%" style="padding-left: 6px;">
              被保險人<br />是<span class="w-3/12 inline-block"></span>否
            </td>

            <td
              colspan="2"
              width="9%"
              style="padding-left: 4px;border-left:1.5px solid #55B3DC;"
            >
              投保人<br />是<span class="w-3/12 inline-block"></span>否
            </td>
          </tr>
          <tr>
            <td>
              1.投保人每年收入約<span class="w-1/12 inline-block"></span
              >萬元，主要來源:工薪
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              2.被保險人每年收入約<span class="w-1/12 inline-block"></span
              >萬元，主要來源: 工薪
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              3.您目前是否已有或正在申請除本公司以外的人身保險?若是，被保險人累計已承保且有效的和正在申請保單保額<span
                class="w-1/12 inline-block"
              ></span
              >萬; 投保人累計已承保且有效的和正在申請保單保額<span
                class="w-1/12 inline-block"
              ></span
              >萬
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              4.您在過去投保人身保險時，或在申請保全復效時，曾否被拒保、延期、加費或對條款做特別約定，或申請過理賠?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              5.您曾否參與賽車、潛水、跳傘、或其他有危險性體育運動或有以上運動嗜好?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              6.您是否持有摩托車駕照? <br />
              有無交通事故記錄?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>7.您是否有私家車輛?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              8.您在過去三年內曾否在其他國家居住或是否在未來一年內有此計劃?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>9.有無其它聲明:</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
        </table>
      </template>
    </a4-page>

    <!-- 電子投保告知書-3 -->
    <a4-page>
      <template slot="content">
        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 inline-block text-white text-center mt-6 font-bold ml-3"
        >
          健康信息告知
        </div>
        <div class="font-bold inline-block text-xs">
          （如不涉及投保人保費豁免責任，則投保人健康信息告知欄無須填寫）
        </div>
        <table
          cellspacing="0"
          class="ml-3 border-1 border-solid border-themeBorder text-xs w-11/12  mt-5 leading-5"
        >
          <tr>
            <td>
              <b
                >填寫或回答下列問題，並選擇選擇項後的「<span
                  class="circle"
                ></span
                >」。選「是」者請在「告知信息及備注欄」中注明問題號碼並詳細說明:</b
              >
            </td>
            <td colspan="2" width="10%" style="padding-left: 6px;">
              被保險人<br />是<span class="w-3/12 inline-block"></span>否
            </td>

            <td
              colspan="2"
              width="9%"
              style="padding-left: 4px;border-left:1.5px solid #55B3DC;"
            >
              投保人<br />是<span class="w-3/12 inline-block"></span>否
            </td>
          </tr>
          <tr>
            <td>
              1. (被保險人)身高
              <span class="w-8 inline-block"></span>(cm)&emsp;體重<span
                class="w-1/12 inline-block"
              ></span
              >(kg); <br />&emsp;(投保人)身高
              <span class="w-8 inline-block"></span>(cm)&emsp;體重
              <span class="w-1/12 inline-block"></span>(kg)。
            </td>
            <td class="border-r-0"><span class="circle"></span></td>
            <td class="border-0"><span class="circle"></span></td>
            <td class="border-r-0"><span class="circle"></span></td>
            <td class="border-0"><span class="circle"></span></td>
          </tr>
          <tr>
            <td>2. 您曾否使用任何成癮藥物、麻醉劑或接受戒毒治療?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              4. 您是否習慣性飲酒?若「是」， (被保險人)已飲酒<span
                class="w-6 inline-block"
              ></span
              >年，飲酒量:白酒<span class="w-5 inline-block"></span
              >兩/日，啤酒<span class="w-5 inline-block"></span>瓶/日
              <div class="ml-40">
                (投保人) 已飲酒<span class="w-6 inline-block"></span
                >年，飲酒量:白酒<span class="w-6 inline-block"></span
                >兩/日，啤酒<span class="w-6 inline-block"></span>瓶/日
              </div>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              5.
              您是否曾經吸煙、飲酒?若「是」曾經吸煙、飲酒，何時因何種原因停止吸煙、飲酒?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>6. 您有無職業病，如塵肺、矽肺、石棉肺、各種慢性中毒等;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>7. 您或您的配偶是否患有愛滋病或為愛滋病毒攜帶者?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              8.
              您在過去6個月內是否持續超過一星期有下列病症:疲倦、體重下降、食慾不振、盜汗、腹瀉、淋巴結腫大或不尋常之皮膚潰爛?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              9.
              您是否接受過手術治療?五年內是否接受過門診治療或住院治療?醫生是否建議服藥、檢查?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              10.
              您五年內是否做過血常規、肝功能、心電圖、超聲波、腦電圖、肌電圖、內窺鏡、心血管造影、X光、CT、活組織檢查、血液檢驗或其他特殊檢查併發現異
              常?若「是」，則請告知檢查原因及檢查結果;
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              11.
              您是否曾患有或被告知患有下列症狀或疾病?若「是」，請注明疾病名稱、症狀、醫院名稱、治療時間和結果:
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (1)
                胸部疼痛、心臟雜音、脈搏不正常、高血壓(指收縮壓≥140mmhg，舒張壓≥90mmhg，或其中一項超過以上值)、動脈粥樣硬化、冠心病、心肌梗塞、心肌
                肥厚、先天性心臟血管病、主動脈瘤、心臟瓣膜病、風濕性心臟病、風濕病、肺心病、心肌炎、心內膜炎、心律失常、傳導阻滯、心包炎以及其他血管疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (2)
                腦中風(腦出血、腦梗塞)、腦瘤、腦血管瘤、腦動靜脈畸形、短暫性腦缺血、腦炎、腦膜炎以及其他腦部疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (3)
                精神病、抑鬱症、神經官能性疾病、多動症、癲癇、肢體麻木、脊髓炎、多發性硬化、肌肉萎縮症、重症肌無力、帕金森氏病、肝豆狀核變性以及其他神
                經精神疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (4)
                久咳、咯血、肺炎、支氣管炎、肺氣腫、支氣管擴張、塵矽肺、肺大泡、肺膿瘍、肺栓塞、肺結核、哮喘、胸膜炎、氣胸以及其他呼吸系統疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (5)
                肝炎、肝炎病毒攜帶、脂肪肝、肝內結石、膽結石、膽囊炎、肝膿瘍、黃疸、肝硬化、肝囊腫、肝功異常、胰腺疾病、慢性胃炎、腸炎、消化道潰瘍或出血、穿孔、潰瘍性結腸炎、疝、腸梗阻、痔瘡等其他肛腸疾病以及其他消化系統疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (6)
                腎炎、腎結石、腎小球疾病、腎病綜合症、血尿、蛋白尿、腎積水、腎功能衰竭、尿毒症、腎囊腫、腎結核、泌尿系感染、輸尿管結石以及其他泌尿系統
                疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(7) 癌症、腫瘤、腺瘤、息肉、囊腫、血管瘤以及其他包塊或腫物;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (8)
                再生障礙性貧血、淋巴瘤、白血病、血友病、紫癜症、貧血、淋巴腺疾病、脾臟疾病以及其他血液和淋巴系統疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (9)
                糖尿病、高血脂症、痛風、甲狀腺疾病、甲狀旁腺疾病、腎上腺疾病、肢端肥大症、腦垂體異常以及其他內分泌、代謝疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (10)
                類風濕性關節炎、風濕病、強直性脊柱炎、椎管狹窄、脊柱裂、股骨頭壞死、骨關節炎、肌營養不良症、不明原因的肌肉萎縮、乾燥綜合症、紅斑狼瘡、
                結締組織病、白賽氏病、免疫性疾病、自體免疫性疾病、免疫缺陷病(愛滋病或愛滋病病毒攜帶);
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (11)
                白內障、青光眼、視神經或視網膜病變、中耳炎、鼻中隔偏曲、鼻息肉、扁桃體炎以及其他耳鼻喉、口腔科疾病;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>
                (12)
                多囊肝、多囊腎以及其他先天性疾病、遺傳性疾病、腦外傷後遺症、內臟損傷、中毒;
              </p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
        </table>
      </template>
    </a4-page>

    <!-- 電子投保告知書-4 -->
    <a4-page>
      <template slot="content">
        <table
          cellspacing="0"
          class="border-1 border-solid border-themeBorder w-11/12  text-xs mt-10 leading-5 ml-3"
        >
          <tr>
            <td>
              <p>(13) 皮膚病、性傳播疾病;</p>
            </td>
            <td width="5%"><span class="circle"></span></td>
            <td width="5%"><span class="circle"></span></td>
            <td width="4.5%"><span class="circle"></span></td>
            <td width="4.5%"><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              12.
              身體殘疾情況:您有無智能障礙，是否失明、聾啞、跛行;有無脊柱、胸廓、四肢、頭面部、口腔、手指、足趾等畸形、缺損或者功能障礙;有無語言、咀
              嚼、吞咽、視力、聽力、視野、嗅覺、中樞神經系統功能障礙;有無臟器、器官、皮膚結構缺失?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              13.
              您的父母、子女、兄弟姐妹是否曾患有腎病、心臟病、高血壓、多發性硬化、肝硬化、糖尿病、精神病、結核病、白血病、癱瘓、肌肉萎縮症、切除任何囊
              腫或增生物、癌症或曾被發現為任何肝炎，或肝炎病毒攜帶者?是否有早於60歲以前去世者?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <b>女性使用 :</b><br />
              14.
              是否正在懷孕?若「是」(投保人)已懷孕_______周?(被保險人)已懷孕_______周?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>15. 您曾否患任何乳房或產科病症或婦科病症?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              16.
              您曾否被建議做宮頸塗片、乳房檢查、乳房X光檢查或乳房活組織檢查?若「是」請提供檢查結果;
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <b>男性使用: </b><br />17.
              您曾否患前列腺炎、前列腺肥大、睪丸或附睪腫大、隱睪症、精索靜脈曲張以及睪丸、陰莖、輸精管缺失或者缺損等男科疾病?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <b>兩週歲以下少兒(含兩週歲)補充告知欄:</b><br />18.
              出生時身高&emsp;&emsp;&emsp;&emsp;&emsp;釐米，體重&emsp;&emsp;&emsp;&emsp;&emsp;公斤;
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              19.
              是否早產、難產、過期產;有無先天性疾病、遺傳性疾病或畸形;有無體重不增或增長緩慢;有無肺炎、抽搐、腹瀉、新生兒黃疸等疾病?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              20.
              您是否曾患有或被告知患有下列症狀或疾病?若「是」，請注明疾病名稱、症狀、醫院名稱、治療時間和結果:
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>21. 有無正常按時接種?若「無」請說明原因;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>22. 您過去是否曾患目前患有第11-29項未例舉的症候或疾病?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
        </table>

        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-8 font-bold ml-3"
        >
          告知信息及備注欄
        </div>
        <table cellspacing="0" class="w-11/12 text-center my-6 ml-3">
          <tr>
            <td style="padding-left: 0;">
              <table width="100%" class="font-sans text-xs" cellspacing="0">
                <thead>
                  <tr>
                    <td class="bg-themeBackgroundGradient1 h-6">序號</td>
                    <td class="bor-left bor-right bg-themeBackgroundGradient2">
                      告知對象
                    </td>
                    <td class="bor-right bg-themeBackgroundGradient3">
                      告知內容
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item,
                    index) in dataset.otherCustomerimpart.ROW.slice(0, 4)"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td class="bor-left bor-right">{{ item.COL1 }}</td>
                    <td class="bor-right">{{ item.COL2 }}</td>
                  </tr>
                  <template
                    v-if="
                      4 - dataset.otherCustomerimpart.ROW.slice(0, 4).length > 0
                    "
                  >
                    <tr
                      v-for="(item, index) in 4 -
                        dataset.otherCustomerimpart.ROW.slice(0, 4).length"
                      :key="index + 4"
                    >
                      <td>
                        {{
                          dataset.otherCustomerimpart.ROW.slice(0, 4).length +
                            1 +
                            index
                        }}
                      </td>
                      <td class="bor-left bor-right"></td>
                      <td class="bor-right"></td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </td>
            <td class="pl-0">
              <table width="100%" class="font-sans text-xs" cellspacing="0">
                <thead>
                  <tr>
                    <td class="bg-themeBackgroundGradient1 h-6">序號</td>
                    <td class="bor-left bor-right bg-themeBackgroundGradient2">
                      告知對象
                    </td>
                    <td class="bor-right bg-themeBackgroundGradient3">
                      告知內容
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item,
                    index) in dataset.otherCustomerimpart.ROW.slice(4, 8)"
                    :key="index + 8"
                  >
                    <td class="bor-left">{{ index + 5 }}</td>
                    <td class="bor-left bor-right">{{ item.COL1 }}</td>
                    <td>{{ item.COL2 }}</td>
                  </tr>
                  <template
                    v-if="
                      4 - dataset.otherCustomerimpart.ROW.slice(4, 8).length > 0
                    "
                  >
                    <tr
                      v-for="(item, index) in 4 -
                        dataset.otherCustomerimpart.ROW.slice(4, 8).length"
                      :key="index + 12"
                    >
                      <td class="bor-left">
                        {{
                          dataset.otherCustomerimpart.ROW.slice(4, 8).length +
                            5 +
                            index
                        }}
                      </td>
                      <td class="bor-left bor-right"></td>
                      <td></td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        <div
          class="bg-themeBackgroundMain w-40 h-8 leading-8 text-white text-center mt-8 font-bold ml-3"
        >
          臨時保障聲明
        </div>
        <ul
          class="text-xs w-11/12 w-11/12 text-justify leading-5 font-sans ml-8"
        >
          <div>
            鑒於投保人已向同源人壽保險股份有限公司(以下簡稱「本公司」)申請投保人身保險並正在等待本公司的批准，本公司提供臨時保障如下:
          </div>
          <li>
            1.
            臨時保障的生效時間及條件:自本公司收到投保人提繳的完整如實填寫的投保信息並繳納暫收保險費或轉賬授權次日零時起開始。如授權賬戶錯誤、賬戶餘額不足或賬戶
            掛失、凍結、銷戶，則以上臨時保障自始不成立。
          </li>
          <li>
            2.
            臨時保障的保險責任及保險金額限制:臨時保障期間，本公司僅承擔投保人所申請投保險種的意外身故責任，並向投保信息中所載的身故保險金受益人支付該單所列明的
            身故保險金，但最高給付金額不超過新台幣貳拾萬元整。如果同一被保險人有效臨時保障多於一份且總保額超過新台幣貳拾萬元，則本公司給付的保險金額將按照臨時保障保
            額佔各投保書累計保額的比例在各臨時保險單間分配，且總計給付保險金額不超過新台幣貳拾萬元整。
            未成年人給付身故保險金總和不超過保險監督管理機構規定的限額。
          </li>
          <li>
            3.
            臨時保障的終止:自本公司收到投保人的暫收保險費或轉賬授權次日零時起三十日終止;或本公司同意承保之日終止;或投保人提出撤銷投保申請之日終止;或本公司做
            出最終核保結論延期、謝絕投保之日終止。滿足以上任一條件此臨時保障均終止。
          </li>
          <li>4. 臨時保障責任免除:同條款中約定的責任免除事項。</li>
        </ul>
      </template>
    </a4-page>

    <!-- 電子投保告知書-5 -->
    <a4-page>
      <template slot="content">
        <div
          class="bg-themeBackgroundMain h-8 leading-8 font-bold w-3/5 text-white text-center mt-10 px-1 ml-3"
        >
          投保人/被保險人/法定監護人聲明授權書及契約簽收回執
        </div>
        <ul class="text-xs mt-5 w-11/12 text-justify leading-5 font-sans ml-8">
          <li>
            1. 本人已認真閱讀
            投保須知、投保提示書、產品條款及產品說明書，確認已瞭解條款所列的各項內容
            (尤其是保險責任條款、責任免除條款、契約解除條款)且同意遵守條款約定。
          </li>
          <li>
            2.
            本人已經確認投保單填寫的各項內容，對受益人的指定均認可。本人在投保單中的健康告知內容均準確無誤，如不屬實貴公司有權依據法律規定和條款約定解除本保險契約。
          </li>
          <li>
            3. 本人確認所提供的付款賬戶是投保人本人的賬戶並同意轉賬授權內容。
          </li>
          <li>
            4.
            本人已知曉:本保險契約自貴公司同意承保、收取保險費並簽發保險單後開始生效，生效日載於保險單上，貴公司自生效日零時起開始承擔契約約定的保險責任。
          </li>
          <li>
            5.
            本人同意，本次投保信息及電子記錄憑證等數據電文是本保險契約的組成部分，具備完全證據效力。
          </li>
          <li>
            6.
            本人授權貴公司可以從任何單位、組織和個人就有關保險事宜查詢、索取與本人有關的資料和證明，作為審核本投保申請及評估相關理賠申請的依據，貴公司對個人資料承擔保密義
            務。
          </li>
          <li>
            7.
            本人同意並授權:貴公司在履行對投保人、被保險人個人信息嚴格保密的基礎上，有權將其個人信息披露給同源保險集團股份有限公司及其子公司(包括分支機構)，以及貴公司為投
            保人、被保險人進一步提供相關服務所需的第三方。
          </li>
          <li>
            8.
            本人確認已在投保書中抄錄以下內容:本人已閱讀保險條款、產品說明書和投保提示書，瞭解本產品的特點和保單利益的不確定性。
          </li>
        </ul>
        <div class="text-sm mt-32 w-12/12 relative pl-8 pb-5 ml-3">
          <p>代理人：{{ dataset.receipt.AgentEXName }}</p>
          <p class="my-3">銷售機構：{{ dataset.receipt.LCCont_AgentCom }}</p>
          <p>管理機構代碼：{{ dataset.Cont.ManageComCode }}</p>
          <p class="my-3">管理機構名稱：{{ dataset.Cont.ManageComName }}</p>
          <div
            class="absolute bg-themeBackgroundMain w-2 h-32 bottom-0 left-0"
          ></div>
          <div
            class="absolute bg-themeBackgroundMain h-2 w-32 bottom-0 left-0"
          ></div>
        </div>
        <!-- for demo 簽章區塊 -->
        <!-- <div class="flex mt-8 w-11/12 text-sm ml-10 h-12">
          <div>投保人簽章：</div>
          <div class="ml-48">被保險人/法定監護人簽章：</div>
        </div> -->
        <SignArea
          applicant="http://localhost:3000/images/sign.png"
          insured="http://localhost:3000/images/sign.png"
        />
        <!--  -->
        <div class="text-sm pl-64 mt-10">
          簽署日期：{{ dataset.receipt.SysDate }}
        </div>
      </template>
    </a4-page>
  </div>
</template>

<script>
import a4Page from "../../../layout/a4Page.vue";
import ElectronicPolicyCard from "@/components/belstar/policy/ElectronicPolicyCard.vue";
import ElectronicPolicyTable from "@/components/belstar/policy/ElectronicPolicyTable.vue";
import ElectronicPolicyPlan from "@/components/belstar/policy/ElectronicPolicyPlan.vue";
import SignArea from "@/components/belstar/policy/SignArea.vue";

export default {
  //註冊組件
  components: {
    a4Page,
    ElectronicPolicyCard,
    ElectronicPolicyTable,
    ElectronicPolicyPlan,
    SignArea,
  },
  //組件傳值
  props: {
    dataset: Object,
  },
};
</script>

<style lang="postcss" scoped>
ul > li::before {
  content: "";
  @apply bg-themeBackgroundMain inline-block w-3 h-3 rounded-lg mr-2 -ml-5;
}

.border-1 tr td {
  border-width: 1.5px;
  @apply border-solid border-themeBorder;
}

.border-1 tr td:not(:first-child) {
  @apply text-center;
}

/*選擇 否 */
table tr td:not(:first-child):nth-child(odd) span.circle {
  @apply bg-themeBackgroundMain;
}
/* 告知信息 背景*/
table.font-sans tbody tr:nth-child(even) td {
  background: rgba(242, 242, 242, 1);
}
</style>
