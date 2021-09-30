<!--
 * @Date         : 2021-09-30 16:15:46
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-09-30 17:54:55
 * @FilePath     : \src\app.vue
-->
<template lang="pug">
  #app {{ a }}
</template>

<script>
import { jsPDF } from "jspdf";
const img = require("@/static/images/1105901.png");
export default {
  data() {
    return {
      a: 12113,
    };
  },
  mounted() {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");
  },
};
</script>

<style style="stylus" scope>
@import "@/styles/index.styl";
</style>
