<template>
    <AuthLayout>
        <div class="w-full flex items-left">
            <Button :to="{name: 'checks.create'}">
                New check
            </Button>
        </div>
        <div class="">
            <TablePartial :checks="checks" :meta="meta" :links="links"/>
        </div>
    </AuthLayout>
</template>

<script>
    import AuthLayout from '@/layouts/AuthLayout.vue'
    import CheckModel from '@/models/CheckModel.js'
    import Button from '@/components/UI/ButtonComponent.vue'
    import TablePartial from './Partials/TablePartial.vue'
    
    export default {
        name: 'IndexChecks',
        components: {
            AuthLayout,
            Button,
            TablePartial
        },
        data() {
            return {
                checks: [],
                links: {},
                meta: {}
            }
        },
        methods: {
            listChecks()
            {
                this.axios.get(`${this.apiEndpoints.listChecks}?page=${this.$route.query.page}`, this.axiosConfig)
                .then((response)=> {
                    this.checks = response.data.data?.map(function(item) {
                        return new CheckModel(item);
                    }),
                    this.links = response.data.links;
                    this.meta = response.data.meta;
                })
            }
        },
        mounted() {
            this.listChecks();
        },
        updated()
        {
            this.listChecks();
        }
    }
</script>


