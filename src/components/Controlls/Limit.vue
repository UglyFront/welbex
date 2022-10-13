<template>
    <div class="limit">
        <div class="limit__text">Лимит:</div>
        <div class="limit__numbers">
            <span 
                v-for="limit in limits" :key="limit" 
                @click="$store.commit('setLimit', limit)" 
                :style="limit == $store.state.limit ? 'color: #000' : ''"
            >
                {{limit}}
            </span>
        </div>
    </div>
</template>


<script>
export default {
    name: "ControllsLimit",
    data() {
        return {
            limits: [5, 10, 15, 20]
        }
    }
}
</script>