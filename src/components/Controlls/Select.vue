<template>
    <select name="" id="" @change="changeHandler" :value="filter ? $store.state.filter: $store.state.type">
        <option v-for="option in options" 
        :key="option.filter" 
        :value="option.filter">{{option.name}}</option>
    </select>
</template>

<script>


export default {
    name: "FiltersSelect",
    props: ['options', 'filter'],

    methods: {
        changeHandler(e) {
            if (this.filter) {
                this.$store.commit('setFilter', e.target.value)
            } else {
                this.$store.commit('setType', e.target.value)
            }
        }
    }
}
</script>