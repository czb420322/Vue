<template>
  <div>
    <!-- <vue2-org-tree :data="data" :horizontal="true" /> -->
    <vue2-org-tree :data="data" :horizontal="true" :label-class-name="labelClassName" />

  </div>
</template>

<script >
export default {
  data() {
    return {
      // 定义数据
      data: {
        label: "江苏XX",
        value: "-1",
        children: [
          {
            value: "reqjfxqfzr",
            label: "需求室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
          {
            value: "req_fzr_kf",
            label: "开发室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
          {
            value: "req_fzr_dsj",
            label: "大数据室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
          {
            value: "req_fzr_bas",
            label: "经分室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
          {
            value: "reqownerinfo",
            label: "信息化室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
          {
            value: "reqownerinfo-aq",
            label: "安全室负责人",
            children: [
              {
                label: "任通",
                value: "1000035939",
              },
              {
                label: "林萍",
                value: "23000068",
              },
              {
                label: "王庆安",
                value: "23000079",
              },
            ],
          },
        ],
      },
      labelClassName:"bg-color-blue",

    };
  },
};
</script>

<style >
.bg-color-blue{
  color: #fff;
  background-color: skyblue;
}

</style>