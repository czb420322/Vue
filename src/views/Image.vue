<template>
  <div>
    <div>
      <img id="imgs" :src="imgUrl" alt="" />
    </div>
    <el-button @click="handleDown">下载</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        imgUrl:"../assets/logo.png"
    };
  },
  methods: {
    handleDown() {
      this.downLoad(this.imgUrl);
    },
    downLoad(url) {
      let src = url;
      var canvas = document.createElement("canvas");
      var img = document.createElement("img");
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, img.width, img.height);
        canvas.getContext("2d").drawImage(0, 0, img.width, img.height);
        canvas.toBlob((blob) => {
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "";
          link.click();
        }, "image/jpeg");
      };
      img.setAttribute("crossOrigin", "Anonymous");
      img.src = src;
    },
  },
};
</script>
