<template>
  <span 
    v-bind="$attrs"
    class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
    :class="{
        'bg-red-100 text-red-800': type === 'error',
        'bg-yellow-100 text-yellow-800': type === 'warn',
        'bg-green-100 text-green-800': type === 'success'
    }"
    
>
        <slot/>
  </span>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            type: String
        }
    }
</script>