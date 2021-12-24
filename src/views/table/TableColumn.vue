<template>
  <el-table-column :label="columnHeader.label" :prop="columnHeader.label" align="center">
    <template v-for="item in columnHeader.children">
      <tableColumn v-if="item.children && item.children.length" :key="item.id" :column-header="item"></tableColumn>
      <el-table-column v-else :key="item.name" :label="item.label" :prop="item.prop" align="center"></el-table-column>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'tableColumn',
  props: {
    columnHeader: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>