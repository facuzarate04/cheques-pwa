<template>
    <div class="">
        <ToastItem v-for="(item, index) in items" 
            :key="index"
            :message="item.message"
            @remove="remove(index)"
        />
    </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import ToastItem from './ToastItem.vue'


const items = reactive([])

function remove(index) {
    items.splice(index, 1);
}

</script>