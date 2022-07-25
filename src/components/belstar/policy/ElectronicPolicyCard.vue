<template>
  <div class="w-11/12 flex justify-between mt-4 ml-3">
    <table cellspacing="0" class="table1 w-72">
      <tr>
        <td
          class="bg-themeBackgroundGradient2 font-bold font-custom"
          width="50%"
        >
          投保人姓名：{{ dataset.Cont.LCCont_RenewalAccName }}
        </td>
        <td>性別：{{ dataset.Cont.LCCont_InsuredSex }}</td>
      </tr>
      <tr>
        <td colspan="2">出生日期：{{ dataset.Cont.LCCont_InsuredBirthDay }}</td>
      </tr>
      <tr>
        <td colspan="2">證件類型：{{ dataset.Cont.AppntIDType }}</td>
      </tr>
      <tr>
        <td colspan="2">證件號碼：{{ dataset.Cont.LCCont_AppntIDNo }}</td>
      </tr>
      <tr>
        <td colspan="2">
          證件有效期至：{{ dataset.Cont.LCCont_AppntIDValidDate }}
        </td>
      </tr>
      <tr>
        <td valign="top">國籍：{{ dataset.Cont.LCCont_AppntNativeplace }}</td>
        <td>戶籍：{{ dataset.Cont.LCCont_AppntHomeAddress }}</td>
      </tr>
      <tr>
        <td>學歷：{{ dataset.Cont.LCCont_AppntDegree }}</td>
        <td>婚姻狀況：{{ dataset.Cont.LCCont_AppntMarriage }}</td>
      </tr>
      <tr>
        <td colspan="2" class="bg-themeBackgroundGradient2 font-bold">
          與被保險人關係：{{ dataset.Cont.LCCont_InsuredRelationtoappnt }}
        </td>
      </tr>
      <tr>
        <td>職業名稱：{{ dataset.Cont.LCCont_InsuredOccupationName }}</td>
        <td>職業代碼：{{ dataset.Cont.LCCont_InsuredOccupationCode }}</td>
      </tr>
      <tr>
        <td colspan="2">工作單位：{{ dataset.Cont.LCCont_InsuredGrpname }}</td>
      </tr>
      <tr>
        <td colspan="2">E-mail：{{ dataset.Cont.LCCont_InsuredEMail }}</td>
      </tr>
      <tr>
        <td colspan="2">家用電話：{{ dataset.Cont.LCCont_InsuredFixPhone }}</td>
      </tr>
      <tr>
        <td colspan="2">行動電話：{{ dataset.Cont.LCCont_InsuredMobile }}</td>
      </tr>
      <tr>
        <td colspan="2">
          現居地址：{{ dataset.Cont.LCCont_InsuredHomeAddress }}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          通訊地址：{{ dataset.Cont.LCCont_AppntPostaladdress }}
        </td>
      </tr>
      <tr>
        <td colspan="2">郵遞區號：{{ dataset.Cont.LCCont_AppntZipcode }}</td>
      </tr>
    </table>

    <table cellspacing="0" class="table1 w-72">
      <tr>
        <td
          class="bg-themeBackgroundGradient2 font-bold font-custom"
          width="50%"
        >
          被保險人姓名：{{ dataset.Cont.LCCont_InsuredName }}
        </td>
        <td>性別：{{ dataset.Cont.LCCont_InsuredSex }}</td>
      </tr>
      <tr>
        <td colspan="2">出生日期：{{ dataset.Cont.LCCont_InsuredBirthDay }}</td>
      </tr>
      <tr>
        <td colspan="2">證件類型：{{ dataset.Cont.InsureIDType }}</td>
      </tr>
      <tr>
        <td colspan="2">證件號碼：{{ dataset.Cont.LCCont_InsuredIDNo }}</td>
      </tr>
      <tr>
        <td colspan="2">證件有效期至：{{ dataset.Cont.CValiDate }}</td>
      </tr>
      <tr>
        <td valign="top">國籍：{{ dataset.Cont.LCCont_InsuredNativeplace }}</td>
        <td>戶籍：{{ dataset.Cont.LCCont_InsuredHomeAddress }}</td>
      </tr>
      <tr>
        <td>學歷：{{ dataset.Cont.LCCont_InsuredDegree }}</td>
        <td>婚姻狀況：{{ dataset.Cont.LCCont_InsuredMarriage }}</td>
      </tr>
      <tr>
        <td colspan="2" class="bg-themeBackgroundGradient2 font-bold">
          與被保險人關係：{{ dataset.Cont.LCCont_InsuredRelationtoappnt }}
        </td>
      </tr>
      <tr>
        <td>職業名稱：{{ dataset.Cont.LCCont_InsuredOccupationName }}</td>
        <td>職業代碼：{{ dataset.Cont.LCCont_InsuredOccupationCode }}</td>
      </tr>
      <tr>
        <td colspan="2">工作單位：{{ dataset.Cont.LCCont_InsuredGrpname }}</td>
      </tr>
      <tr>
        <td colspan="2">E-mail：{{ dataset.Cont.LCCont_InsuredEMail }}</td>
      </tr>
      <tr>
        <td colspan="2">家用電話：{{ dataset.Cont.LCCont_InsuredFixPhone }}</td>
      </tr>
      <tr>
        <td colspan="2">行動電話：{{ dataset.Cont.LCCont_InsuredMobile }}</td>
      </tr>
      <tr>
        <td colspan="2">
          現居地址：{{ dataset.Cont.LCCont_InsuredHomeAddress }}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          通訊地址：{{ dataset.Cont.LCCont_AppntPostaladdress }}
        </td>
      </tr>
      <tr>
        <td colspan="2">郵遞區號：{{ dataset.Cont.LCCont_AppntZipcode }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataset: Object
  }
};
</script>

<style lang="postcss" scoped>
.table1 {
  border: 2px solid #979797;
}
table.table1 tr td {
  border-bottom: 1px solid #979797;
  @apply text-xs pl-2 h-6 leading-5;
}

table.table1 > tr > td:not(:first-child) {
  border-left: 1px solid #979797;
}
</style>
