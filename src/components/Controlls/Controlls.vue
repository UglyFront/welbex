<template>
    <div class="controlls">
        <ControllsLimit/>
        <ControllsFilters/>
    </div>
</template>

<script>
import ControllsLimit from "./Limit.vue"
import ControllsFilters from "./Filters.vue"

export default {
    name: "TableControlls",
    components: {
        ControllsLimit,
        ControllsFilters
    }
}
</script>

<style lang="scss">
.controlls {
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>