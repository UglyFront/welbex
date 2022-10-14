<template>
    <div 
        :class="num-1 === $store.state.activePage ? 'pagination__page_active' : 'pagination__page'"
        @click="$store.commit('setActivePage', num)"
    >
        {{num}}
    </div>
</template>

<script>
    export default {
        name: "TablePage",
        props: {
            num: Number
        }
    }
</script>
