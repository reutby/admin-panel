<template>
  <el-select @change="change" :value="selected">
    <el-option
      v-for="item in items"
      :key="item._id"
      :value="item"
      :label="item.name"
    />
  </el-select>
</template>
<script>
  import { useStorageList } from '../compositions/storages'
  import { useModelChange } from '../../core/compositions/model-change'

  export default {
    name: 'AssetsStorageSelector',
    props: {
      value: String
    },
    setup(props, { emit }) {
      const { items } = useStorageList()
      const { selected, change } = useModelChange(props.value, items, emit)
      return {
        items,
        selected,
        change
      }
    }
  }
</script>
