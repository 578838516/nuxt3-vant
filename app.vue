<!-- <template>
  <div>
    hello world
    <div id="demo"></div>
  </div>
</template>
<script setup>
const source='http://link-supmet-product.oss-cn-hangzhou.aliyuncs.com/mbs/contentManagement/instructionBook/2022-10-09/md/%E6%B5%81%E9%87%8F%E7%A7%AF%E7%AE%97%E4%BB%AA2600/%E9%AB%98%E6%80%A7%E8%83%BDJavaScript.pdf'


const { $skip } = useNuxtApp();
$skip()
</script>
<style>
</style> -->
<!-- 
<template>
  <div class="pdf">
    <div class="pdf-view">
      <canvas :id="`pdfCanvas${page}`" v-for="page in data.pdfPages" :key="page"></canvas>
    </div>
    <div class="pdf-bottom">我是操作区域</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick } from "vue";
import * as PDF from "pdfjs-dist";
import entry from "pdfjs-dist/build/pdf.worker.entry"; // 引入时会报红线错误，不影响运行， 或在index.d.ts中声明declare


const data = reactive<any>({
  pdfPath: "1.pdf", //本地PDF文件路径放在/public中
  pdfPages: [], // 页数
  pdfWidth: "", // 宽度
  pdfSrc: "", // 地址
  pdfDoc: "", // 文档内容
  pdfScale: 1.0, // 放大倍数
})
const cd: any = null
onMounted(() => {
  PDF.GlobalWorkerOptions.workerSrc = entry
  loadFile(data.pdfPath);
});

const loadFile = (url: string) => {
  let loadingTask = PDF.getDocument('https://link-supmet.oss-cn-hangzhou.aliyuncs.com/1.pdf')
  console.log(loadingTask, '1')
  loadingTask.promise.then((pdf: any) => {
    data.pdfDoc = pdf;
    data.pdfPages = pdf.numPages;
    nextTick(() => {
    renderPage(pdf,1);
    });
  });
}

const renderPage = async (pdf:any,num: number) => {
  const page: any = await pdf.getPage(num);
  let canvas: any = document.getElementById("pdfCanvas" + num);
  let ctx = canvas.getContext("2d");
  let dpr = window.devicePixelRatio || 1;
  let bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  let ratio = dpr / bsr;
  let viewport = page.getViewport({ scale: data.pdfScale });
  console.log(viewport)
  canvas.width = viewport.width * ratio;
  canvas.height = viewport.height * ratio;
  canvas.style.width = viewport.width + "px";
  canvas.style.height = viewport.height + "px";
  // canvas.style.width = "100%";
  // canvas.style.height = "100%";
  data.pdfWidth = viewport.width + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  // 将 PDF 页面渲染到 canvas 上下文中
  let renderContext = {
    canvasContext: ctx,
    viewport: viewport,
  };
  page.render(renderContext);
  if (data.pdfPages > num) {
    renderPage(pdf,num + 1);
  }


  console.log()
}

</script>

<style scoped>
.pdf-view {
  width: 95vw;
  height: 85vh;
  margin: 0 auto;
  border: 1px solid #f90;
  overflow: auto;
}
</style> -->
<template>
 <NuxtPage></NuxtPage>
</template>

<script setup lang="ts" name="">
import {} from 'vue'
</script>

<style scoped lang="less"></style>