<template>
    <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
        <table class="min-w-full divide-y divide-gray-100 rounded-md">
            <thead class="bg-gray-800">
                <tr class="text-left">
                    <th scope="col" class="py-3.5 px-2 text-sm font-semibold text-gray-200">Bank Account</th>
                    <th scope="col" class="hidden px-2 py-3.5 text-sm font-semibold text-gray-200 sm:table-cell">Number</th>
                    <th scope="col" class="px-2 py-3.5 text-sm font-semibold text-gray-200">Status</th>
                    <th scope="col" class="py-3.5 px-2 text-sm font-semibold text-gray-200">Pay date</th>
                    <th scope="col" class="relative px-2 py-3.5">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="check in checks" :key="check.id" class="text-left">
                    <td class="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900">
                        <div class="hidden sm:table-cell">
                            {{ check.bankAccount?.name }}
                        </div>
                        <div class="sm:hidden">
                            <p class="text-gray-900">{{ check.bankAccount?.name }}</p>
                            <p class="text-gray-500">{{ check.number }}</p>
                        </div>
                    </td>
                    <td class="hidden whitespace-nowrap px-2 py-4 text-sm text-gray-500 sm:table-cell">{{ check.number }}</td>
                    <td class="whitespace-nowrap px-2 py-4 text-sm">
                        <BadgeComponent :type="getType(check.status_id)">{{ check.status }}</BadgeComponent>
                    </td>
                    <td class="whitespace-nowrap px-2 py-4 text-sm text-gray-500">{{ check.pay_date }}</td>
                    <td class="whitespace-nowrap px-2 py-4 text-left text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit<span class="sr-only">, {{ check.id }}</span></a
                    >
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="w-full">
            <TableFooterPartial :meta="meta" :links="links" />
        </div>
    </div>
</template>

<script setup>
    import TableFooterPartial from './TableFooterPartial.vue'
    import BadgeComponent from '@/components/UI/BadgeComponent.vue'

    const props = defineProps({
        checks: Array,
        meta: Object,
        links: Object
    });

    function getType(status_id)
    {
        const statusList = [
            { key: 0, value: 'warn'},
            { key: 1, value: 'success'},
            { key: 2, value: 'error'},
            { key: 3, value: 'success'},
            { key: 4, value: null},
    
        ];

        return statusList.find((item) => {
            return item.key === status_id
        })?.value
    }

</script>