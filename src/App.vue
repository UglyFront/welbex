<template>
  <div class="content">
    <TableControlls/>
    <RootTable/>
    <TablePagination/>
  </div>
</template>

<script>
import TablePagination from './components/Pagination/Pagination.vue';
import RootTable from './components/Table/Table.vue';
import TableControlls from "./components/Controlls/Controlls.vue"

export default {
  name: 'App',
  components: {
    TablePagination,
    RootTable,
    TableControlls
  },

  mounted() {
    this.$store.commit('getAllPage')
  },

  computed: {
    activePage() {
      return this.$store.state.activePage
    },
    limit() {
      return this.$store.state.limit
    },
    value() {
      return this.$store.state.value
    }
  },

  watch: {
    activePage() {
      this.$store.commit('setOut')
    },
    limit() {
      this.$store.commit('setOut')
    },
    value() {
      this.$store.commit('setOut')
    },
  }
}
</script>

<style lang="scss">
#app {
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
}

.content {
    max-width: 1000px;
    height: 100%;
    margin-top: 15px;
}
</style>
