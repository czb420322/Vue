<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ScreenFull />
    <!--列设置按钮-->
    <el-dropdown trigger="click">
      <el-button icon="el-icon-s-operation" size="mini">列设置</el-button>
      <el-dropdown-menu slot="dropdown">
        <span class="title">列设置</span>
        <el-tree
          draggable
          :data="columns"
          :props="defaultProps"
          :allow-drop="allowDrop"
          @node-drop="handleDrop"
        >
          <span class="tree-table-setting" slot-scope="{ node, data }">
            <el-switch @change="saveTableColumns" v-model="data.show">
            </el-switch>
            <span>{{ node.label }}</span>
          </span>
        </el-tree>
      </el-dropdown-menu>
    </el-dropdown>

    <!--表格-->
    <div>
      <el-table
        :key="tableKey"
        :data="tableData"
        :height="tableHeight"
        :row-style="{ height: '40px' }"
        :cell-style="{ borderRight: 'none' }"
        :header-cell-style="{
          height: '40px',
          padding: 0,
          background: '#f6f8fa',
          color: '#333',
        }"
        @row-click="handelTableClick"
        @selection-change="handleSelectionChange"
        @header-dragend="surveyWidth"
        border
        size="mini"
        tooltip-effect="dark"
        highlight-current-row
      >
        <el-table-column align="center" type="selection"> </el-table-column>
        <template v-for="item in columns">
          <el-table-column
            v-if="item.show"
            show-overflow-tooltip
            :prop="item.prop"
            :sortable="item.sortable"
            :label="item.label"
            :width="item.width"
            :key="item.prop"
            :resizable="item.resizable"
          >
            <template slot-scope="scope">
              <span v-if="item.prop === 'clue_type'">{{
                scope.row[item.prop] | clueType
              }}</span>
              <span v-else-if="item.prop === 'clue_source'">{{
                scope.row[item.prop] | clueSource
              }}</span>
              <span v-else-if="item.prop === 'contact_type'">{{
                scope.row[item.prop] | commonType
              }}</span>
              <span v-else-if="item.prop === 'company_name'" class="link">{{
                scope.row[item.prop]
              }}</span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <!-- 固定列 -->
        <el-table-column fixed="right" label="关注" width="56">
          <template slot-scope="scope">
            <el-button
              style="height: 10px;padding:0; margin:0;"
              type="text"
              @click.native.stop="clueTableRowClick(scope.row, 'collect')"
              size="mini"
            >
              <img
                v-if="scope.row.collect === 1"
                style="width:16px"
                src="../assets/logo.png"
              />
              <img v-else style="width:16px" src="../assets/logo.png" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="编辑" width="56">
          <template slot-scope="scope">
            <el-button
              style="height: 10px;padding:0; margin:0;"
              type="text"
              @click.native.stop="clueTableRowClick(scope.row, 'edit')"
              size="mini"
            >
              <img style="width:16px" src="../assets/logo.png" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import ScreenFull from '@/components/ScreenFull.vue'

let person = { name: "张三", age: 25, address: "深圳", getName: function() {} };
Object.keys(person).map((key) => {
  return person[key]; // 获取到属性对应的值,做一些处理
});
export default {
  name: "Home",
  components: {
    // HelloWorld
 // eslint-disable-next-line vue/no-unused-components
     ScreenFull
  },
  data() {
    return {
      // 表格key
      tableKey: 1,
      // 表格数据
      tableData: [],
      // 默认表格高度
      tableHeight: 600,
      // 表格展示项配置
      columns: [
        {
          prop: "name", // 对应列内容的字段名
          label: "姓名", // 显示的标题
          width: 66, // 对应列的宽度
          resizable: true, // 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
          show: true, // 展示与隐藏
          sortable: false, // 对应列是否可以排序
        },
        {
          prop: "clue_type",
          label: "线索类型",
          width: 78,
          resizable: true,
          show: true,
          sortable: false,
        },
        // ... 省略部分字段
      ],
      // 列设置中 tree配置
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {
    this.init();
    const winHeight = document.body.clientHeight;
    // 窗口大小 - 表格顶部高度
    this.tableHeight = winHeight - 260;
  },
  methods: {
    init() {
      // 判断本地是否有表格配置数据 ？ 加载 : 忽略
      // 获取表格数据
      // 重设表格高度
    },
    allowDrop(draggingNode, dropNode, type) {
      // 仅允许Tree节点上下拖动
      return type !== "inner";
    },
    // Tree 拖动时更新表格
    handleDrop() {
      this.tableKey++;
      // 保存表格配置
      this.saveTableColumns();
    },
    // 重置表格列设置
    resetTable() {
      // ... 忽略
    },
    // 显示隐藏切换 && 保存表格配置
    saveTableColumns() {
      // setStorage 封装了 localStorage
      localStorage.setItem("clueTable", this.columns);
    },
    // 选中表格行
    handelTableClick(row) {
      console.log(row);
      // ... 省略业务逻辑
    },
    // table多选操作
    handleSelectionChange(val) {
      console.log(val);
      // ... 省略业务逻辑
    },
    // 表头拖动事件
    surveyWidth(newWidth, oldWidth, column, event) {
      this.columns = this.columns.map((v) => {
        if (v.prop === column.property) v.width = newWidth;
        return v;
      });
      this.saveTableColumns();
      console.log(event);
    },
    // 关注与编辑操作
    clueTableRowClick(val, type) {
      console.log(val, type);
      // ... 省略业务逻辑
    },
  },
};
</script>
