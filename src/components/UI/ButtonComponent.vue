<template>
  <button v-if="!to" :type="type" v-bind="$attrs" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
    <slot/>
  </button>
  <router-link :to="to" v-bind="$attrs" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
    <slot/>
  </router-link>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: "submit",
            },
            to: {
                type: Object,
                default: null
            }
        }
    }

</script>