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

<style lang="scss">
.limit {
    display: flex;
    font-size: 20px;

    &__numbers {
        span {
            margin-left: 10px;
            color: rgb(194, 194, 194);
            border-radius: 50%;
            transition: .3s;
            cursor: pointer;

            &:hover {
                color: rgb(141, 141, 141);
            }
        }
    }
}
</style>