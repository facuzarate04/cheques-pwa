import { computed, reactive } from '@vue/reactivity'
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toastStore', () => {
    const toasts = reactive([]); 
    const items = computed(() => toasts)

    function remove(index) {
        toasts.splice(index, 1);
    }

    function add(item) {
        toasts.push(item);
    }

    return { items, remove, add }
})