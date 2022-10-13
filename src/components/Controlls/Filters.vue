<template>
    <div class="filte">
        <span>Фильтры: </span>
        <FiltersSelect :options="this.$store.state.optionsFilter" :filter="true"/>
        <FiltersSelect :options="this.$store.state.optionsType" :filter="false"/>
        <FiltersInput/>
        {{x}}
    </div>
</template>

<script>
import FiltersSelect from "./Select.vue"
import FiltersInput from "./Input.vue"

export default {
    name: "ControllsFilters",
    components: {
        FiltersSelect,
        FiltersInput
    },
}
</script>