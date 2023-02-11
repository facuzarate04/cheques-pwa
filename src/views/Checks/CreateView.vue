<template>
    <AuthLayout>
        <form>
            <div class="shadow sm:overflow-hidden sm:rounded-md text-left">
                <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
                    <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    </div>
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="bank_account_id" class="block text-sm font-medium text-gray-700">Bank Account</label>
                            <select v-model="form.bank_account_id" id="bank_account_id" name="bank_account_id"  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm">
                                <option v-for="account in bankAccounts" :key="account.id" :value="account.id">{{ account.name }}</option>
                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="bank_account_id" class="block text-sm font-medium text-gray-700">Client</label>
                            <select v-model="form.client_id" id="bank_account_id" name="bank_account_id"  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm">
                                <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="number" class="block text-sm font-medium text-gray-700">Number</label>
                            <input v-model="form.number" type="text" name="number" id="number" autocomplete="given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                            <input v-model="form.amount" type="numeric" name="amount" id="amount" autocomplete="given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="pay_date" class="block text-sm font-medium text-gray-700">Pay Date</label>
                            <input v-model="form.pay_date" type="date" name="pay_date" id="pay_date" autocomplete="given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button @click="store()" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Save</button>
                </div>
            </div>
        </form>
    </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
export default {
    components: {
        AuthLayout
    },
    data() {
        return {
            form: {
                bank_account_id: null,
                client_id: null,
                number: null,
                amount: null,
                pay_to: null,
                pay_date: null,
                status_id: null, 
            },
            bankAccounts: [],
            clients: []
        }
    },
    methods: {
        fetchData() {
            this.axios.get(this.apiEndpoints.createCheck, this.axiosConfig)
            .then((response) => {
                
                this.bankAccounts = response.data.bankAccounts;
                this.clients = response.data.clients;
            })
        },
        store() {
            this.axios.post(this.apiEndpoints.storeCheck, this.form, this.axiosConfig)
            .then((response) => {
                this.toastStore.add({message: 'Check added successfully!'})
            })
        }
    },
    beforeMount() {
        this.fetchData();
    }
}
</script>