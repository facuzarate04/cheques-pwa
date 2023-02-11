<template>
    <div class="">
        <ToastItem v-for="(item, index) in items" 
            :key="index"
            :message="item.message"
            @remove="this.toastStore.remove(index)"
        />
    </div>
</template>

<script>
import ToastItem from './ToastItem.vue'

export default {
    components: {
        ToastItem
    },
    computed: {
        items() {
            return this.toastStore.items
        }
    },
    methods: {
        
    },
}

</script>