<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :default-active="defaultActive"
      @open="handleOpen"
      @close="handleClose"
    >
      <menutree :data="menuData"></menutree>
    </el-menu>
  </div>
</template>
<script>
import menutree from "./MenuTree";
import { roleTree } from "../../api/discernserve/discernSearch";
export default {
  data() {
    return {
      menuData: {},
      defaultActive:'',
    };
  },
  components: {
    menutree: menutree,
  },

  mounted() {
    this.getRoleTree();
  },
  methods: {
    //获取角色树
    getRoleTree() {
      let param = {
        // userId: this.$cookies.get("userId"),
        userId:'',
      };
      roleTree(param).then((res) => {
        if (res.code == 0) {
          console.log(res.data.children);
          this.menuData = res.data.children;
          this.defaultActive = this.menuData[0].index;
        } else {
          this.$message({
            message: res.msg,
            type: "warning",
          });
        }
      });
    },
    //菜单回调函数
    handleOpen(key, keyPath) {
      console.log('open',key, keyPath);
      for (let i in key) {
        if (i == key.length - 1) {
          this.roleId = key;
          this.getRoleDetail();
        }
      }
    },
    //菜单回调函数
    handleClose(key, keyPath) {
      console.log('close',key, keyPath);
      this.roleId = key;
      for (let i in key) {
        if (i == key.length - 1) {
          this.roleId = key;
          this.getRoleDetail();
        }
      }
    },
  },
};
</script>
