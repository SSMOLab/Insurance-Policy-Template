<template>
  <div>
    <qr-code value="hello world" size="75"></qr-code>
  </div>
</template>

<script>
import Qrcode from "qrcode.vue";
export default {
  data() {
    return {};
  },
  components: {
    Qrcode
  }
};
</script>

<style></style>
