<template>
  <div
    class="page A4 flex bg-white m-auto flex-col mb-10"
    :class="selectFontStyle()"
  >
    <!-- <div id="page-header" class="absolute">{{ orderNumber }}</div> -->
    <div class="content relative">
      <slot
        name="content"
        :class="theme === 'orange' ? 'cover-orange' : 'cover'"
      ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "a4Page",
  props: {},

  data() {
    return {
      orderNumber: this.$store.state.orderNumber || ""
    };
  },
  mounted() {},
  methods: {
    selectFontStyle() {
      // custom, simsun, kaiu
      if (process.env && process.env.VUE_APP_FONT) {
        switch (process.env.VUE_APP_FONT) {
          case "custom":
            return "font-custom";
          case "kaiu":
            return "font-kaiu";
          case "simsun":
            return "font-simsun";
          default:
            return "font-custom";
        }
      } else {
        return "font-custom";
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
* {
  box-sizing: border-box;
}
.page {
  width: 21cm;
  height: 29.7cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  padding: 2cm 1.5cm;
}
/* .page {
  width: 21cm;
  box-shadow: none;
  page-break-before: avoid;
  page-break-after: always;
  margin: 1cm auto;

  @apply flex relative flex-col p-0 h-full;
} */
@media print {
  #main {
    /* counter-reset: page 1; */
  }
  #page-header {
    position: running(pageHeader);
  }
  .page {
    width: 18cm;
    box-shadow: none;
    page-break-before: avoid;
    page-break-after: always;
    @apply flex relative flex-col p-0 h-full;
  }
  @page {
    size: A4;
    counter-increment: page 1;
    margin: 1.5cm auto;
    @top-left {
      margin-top: auto;
      /* content: "orderNumber"; */
      content: element(pageHeader);
      font-size: 12px;
      color: #666;
    }
    /* 頁碼 */
    @bottom-center {
      content: "第" counter(page) "頁 共" counter(pages) "頁";
    }
  }
}
</style>
