<template>
  <div class="flex mt-8 text-xs ml-10 grid grid-cols-1 md:grid-cols-4 h-12">
    <div class="">投保人簽章：</div>
    <img class="pr-10" :src="applicant" />
    <div class="">被保險人/法定監護人簽章：</div>
    <img class="pr-10" :src="insured" />
  </div>
</template>
<script>
export default {
  props: {
    applicant: String,
    insured: String
  },
  computed: {}
};
</script>

<style></style>
