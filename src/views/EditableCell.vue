<template>
  <div class="app-container progStyle">
    <!-- 表格标题 -->
    <h4 style="text-align: center;margin: 0 0 10px 0;font-size:18px;">淘宝店铺库存销量对比表</h4>
    <!-- 表格 -->
    <el-table
      :data="tableData_show['project_results']"
      style="width: 100%;"
      border
      :cell-class-name="addClass"
      row-key="result_label"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :span-method="arraySpanMethod"
    >
      <!-- 一级表头：商品类别、双十一、双十二  -->
      <el-table-column
        v-for="(value1,key1,index1) in tableData_show['keys']"
        :key="index1"
        :label="value1['label']"
        align="center"
      >
        <!-- 注意这里一定要写，获取一级表头下所有单元格数据 -->
        <template slot-scope="scope">
          <span>{{ scope.row[key1] }}</span>
        </template>

        <!-- 二级表头：销量（件）、库存（件） -->
        <div v-if="key1!=='result_label'">
          <el-table-column
            v-for="(value2,key2,index2) in value1['children']"
            :key="index2"
            :label="value2"
            align="center"
          >
            <!-- 二级表头下所有单元格数据 -->
            <editable-cell
              v-model="row[key2]"
              slot-scope="{row}"
              :can-edit="(key2.indexOf('remark')===-1) ? disabled : abled"
            >
              <span slot="content">{{ row[key2] }}</span>
            </editable-cell>
          </el-table-column>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import goodsData from '/static/test.json'// 本地json
import EditableCell from "../components/EditableCell.vue"

export default {
  components: {
    EditableCell
  },
  data() {
    return {
      disabled: false, // 表格可编辑
      abled: true, // 表格不可编辑

      labelList: {}, // 用于存放一级表头
      tableData_show: {} // 页面表格渲染数据
    }
  },

  created() {
    // 获取本地json数据
    this.tableData_show = goodsData
    for (var key in goodsData['keys']) {
      this.labelList[key] = goodsData['keys'][key]['label']// 将一级表头单独存放
    }
  },

  methods: {
    // 合并单元格
    arraySpanMethod({ row }) {
      var keys = Object.keys(row)
      if (keys.indexOf('children') > -1) {
        return [1, Object.keys(this.labelList).length * 2 + 1]
      }
    },

    // 自定义单元格的样式
    addClass({ row, columnIndex }) {
      if (columnIndex === 0 && Object.keys(row).indexOf('children') > -1) {
        return 'fatherColStyle'// 第一列父项的样式
      } else if (columnIndex === 0 && Object.keys(row).indexOf('children') === -1) {
        return 'sonStyle'// 第一列子项的样式
      }
    }
  }
}
</script>

<style lang="scss">
// 表格边框样式
.progStyle .el-table--border, .el-table--group{
  border: 1px solid #979fb1;
}
.progStyle .el-table--border th,
.progStyle .el-table__fixed-right-patch,
.progStyle .el-table td,
.progStyle .el-table th.is-leaf{
  border-bottom: 1px solid #979fb1;
}
.progStyle .el-table--border td,
.progStyle .el-table--border th,
.progStyle .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
  border-right: 1px solid #979fb1;
}

// 父项icon样式
.progStyle .el-table [class*=el-table__row--level] .el-table__expand-icon{
  height: 32px;
  line-height: 32px;
  float: left;
}

// 表头样式
.progStyle .el-table th, .el-table tr:nth-child(0) {
  background-color: #cbcfd9;
}
.progStyle .el-table th>.cell{
  color: black;
  font-size: 18px;
}

// 第一列父项样式
.fatherColStyle{
  font-weight: bold;
  font-size: 16px;
  background-color: #f5f7fa;
  color: black;
}
// 文字样式
.fatherColStyle span{
  float: left;
}

//第一列子项的样式，第一行表头样式
.sonStyle{
  font-weight: bold;
  background-color: #f0f9eb;
  font-size: 14px;
  color: #27a2ff;
}
</style>
