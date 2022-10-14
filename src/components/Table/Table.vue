<template>
    <table class="table">
        <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
        </tr>
        
        <TableRow 
            v-for="el in $store.state.outData" :key="el.id"
            :name="el.name"
            :date="el.date"
            :amount="el.amount"
            :distance="el.distance"
        />
    </table>
</template>

<script>
import TableRow from "./Row.vue"

export default {
    name: "RootTable",
    components: {
        TableRow
    }
}
</script>

<style lang="scss">
.table {
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgb(194, 194, 194);
    
    tr {
        width: 100%;
        height: 30px;


        td {
            height: 100%;
            background: rgb(141, 141, 141);
            padding: 5px;
        }
    }
}
</style>