<template>
  <div class="edit-cell" @dblclick="onFieldClick">
    <!-- 文字提示 -->
    <el-tooltip
      v-if="!editMode && !showInput"
      :placement="toolTipPlacement"
      :open-delay="toolTipDelay"
      :content="toolTipContent"
    >
      <div
        tabindex="0"
        class="cell-content"
        :class="{'edit-enabled-cell': canEdit}"
        @keyup.enter="onFieldClick"
      >
        <slot name="content" />
      </div>
    </el-tooltip>
    <!-- Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件 -->
    <!-- 通过属性is的值可以渲染不同的组件 -->
    <component
      :is="editableComponent"
      v-if="editMode || showInput"
      ref="input"
      v-model="model"
      v-bind="$attrs"
      @focus="onFieldClick"
      @keyup.enter.native="onInputExit"
      v-on="listeners"
    >
      <slot name="edit-component-slot" />
    </component>
  </div>
</template>
<script>
export default {
  name: 'EditableCell',
  // 子组件不继承父组件的特性
  inheritAttrs: false,
  // 子组件使用props来声明需要从父组件接受的数据
  props: {
    value: {
      type: String,
      default: ''
    },
    toolTipContent: {
      type: String,
      default: '双击进行编辑'
    },
    toolTipDelay: {
      type: Number,
      default: 500
    },
    toolTipPlacement: {
      type: String,
      default: 'top-start'
    },
    showInput: {
      type: Boolean,
      default: false
    },
    editableComponent: {
      type: String,
      default: 'el-input'
    },
    closeEvent: {
      type: String,
      default: 'blur'
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editMode: false
    }
  },
  /**
   * 1.computed用来监控自己定义的变量，
   * 该变量不在data里面声明，直接在computed里面定义，
   * 然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理
   *
   * 2.computed比较适合对多个变量或者对象进行处理后返回一个结果值，
   * 也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
   * 举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，
   * 总金额都应该发生变化。这里的这个总金额使用computed属性来进行计算是最好的选择
   */
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        // 子组件触发父组件
        this.$emit('input', val)
      }
    },
    listeners() {
      return {
        [this.closeEvent]: this.onInputExit,
        ...this.$listeners
      }
    }
  },
  methods: {
    onFieldClick() {
      if (this.canEdit) {
        this.editMode = true
        // this.$nextTick这个方法作用是当数据被修改后使用这个方法会回调获取更新后的dom再渲染出来
        this.$nextTick(() => {
          const inputRef = this.$refs.input
          if (inputRef && inputRef.focus) {
            inputRef.focus()
          }
        })
      }
    },
    onInputExit() {
      this.editMode = false
    },
    onInputChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style>
.cell-content {
 min-height: 30px;
 line-height: 30px;
 /* padding-left: 5px;
 padding-top: 5px; */
 border: 1px solid transparent;
}
.edit-enabled-cell {
 /* border: 1px dashed #409eff; */
 border:0
}
</style>
