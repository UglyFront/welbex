<template>
    <div class="pagination">
        <TablePage v-for="page of this.$store.state.pages" :key='page' :num='page'/>
    </div>
</template>

<script>
import TablePage from "./Page.vue";

export default {
    name: "TablePagination",
    components: {
        TablePage
    },
}
</script>