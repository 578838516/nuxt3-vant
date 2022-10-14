<template>
  <div>
    <NuxtWelcome />
<VuePdfEmbed :source="source"></VuePdfEmbed>
  </div>
</template>
<script setup>

import  VuePdfEmbed from 'vue-pdf-embed/dist/vue3-pdf-embed'
const source='http://link-supmet-product.oss-cn-hangzhou.aliyuncs.com/mbs/contentManagement/instructionBook/2022-10-09/md/%E6%B5%81%E9%87%8F%E7%A7%AF%E7%AE%97%E4%BB%AA2600/%E9%AB%98%E6%80%A7%E8%83%BDJavaScript.pdf'

</script>
