<template>
    <input :value="$store.state.value" @input="input" :type="$store.state.filter == 'name' ? 'text' : 'number'">
</template>

<script>
export default {
    name: "FiltersInput",

   methods: {
    input(e) {
        this.$store.commit("setValue", e.target.value)
    }
   }
}
</script>