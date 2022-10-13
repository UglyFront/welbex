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
        },

        computed: {
            outData() {
                console.log(this.$store.state.outData)
                return this.$store.state.outData
            }
        }
    }
</script>