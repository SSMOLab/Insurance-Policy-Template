<template>
  <!-- 粘貼頁 -->
  <a4-page id="paste">
    <template slot="content">
      <div>
        <div
          class="title3 w-full text-center text-white bg-themeBackgroundMain"
        >
          批注、保險費發票粘貼頁
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
      isPage: true
    };
  },
  components: {
    a4Page
  }
};
</script>

<style scoped></style>
