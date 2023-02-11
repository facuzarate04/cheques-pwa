<template>
    <AuthLayout>
        <div class="">
            <Button :to="{name: 'checks.create'}">
                New check
            </Button>
        </div>
        <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
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
                        <td class="whitespace-nowrap px-2 py-4 text-sm text-gray-500">{{ check.status }}</td>
                        <td class="whitespace-nowrap px-2 py-4 text-sm text-gray-500">{{ check.pay_date }}</td>
                        <td class="whitespace-nowrap px-2 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900"
                            >Edit<span class="sr-only">, {{ check.id }}</span></a
                        >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AuthLayout>
</template>

<script>
    import AuthLayout from '../../layouts/AuthLayout.vue'
    import CheckModel from '../../models/CheckModel.js'
    import Button from '../../components/UI/ButtonComponent.vue'
    
    export default {
        name: 'IndexChecks',
        components: {
            AuthLayout,
            Button
        },
        data() {
            return {
                checks: []
            }
        },
        mounted()
        {
            this.axios.get(this.apiEndpoints.listChecks, this.axiosConfig)
            .then((response)=> {
                this.checks = response.data.checks?.map(function(item) {
                    return new CheckModel(item);
                })
            })
        }
    }
</script>


