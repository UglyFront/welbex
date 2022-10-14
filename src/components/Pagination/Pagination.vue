<template>
    <div class="pagination">
        <TablePage v-for="page in $store.state.pages" :key='page' :num='page'/>
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

<style lang="scss">
.pagination {
    width: 70px;
    position: fixed;
    height: 100vh;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    border-left: 5px solid rgb(141, 141, 141);

    &::-webkit-scrollbar {
        width: 0px;
    }

    &__page {
        margin-top: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid cyan;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        flex-shrink: 0;
        font-weight: bold;
        cursor: pointer;

        &_active {
            cursor: pointer;
            margin-top: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid cyan;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            font-weight: bold;
            background: cyan;
            color: #fff;
        }
    }
}
</style>