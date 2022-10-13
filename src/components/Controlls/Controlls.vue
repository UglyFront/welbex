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