<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>
            <router-link
              :to="{ name: 'editStorage', params: { storageId: item._id } }"
              >{{ item.name }}</router-link
            >
          </td>
          <td>{{ item.kind }}</td>
          <td>
            <i @click.prevent="remove(item)" class="el-icon-delete" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { useStorageList } from '../compositions/storages'
  import { useConfirmAction } from '../../core/compositions/confirm-action'

  export default {
    name: 'AssetsStorageList',
    setup() {
      const { items, remove } = useStorageList()
      return { items, remove: useConfirmAction(remove) }
    }
  }
</script>
<style scoped lang="scss"></style>
