class CheckModel {

    constructor({id, amount, bankAccount, client, concept, number, pay_date, pay_to, status_id}) {
        this.id = id,
        this.amount = amount,
        this.bankAccount = bankAccount,
        this.client = client,
        this.concept = concept,
        this.number = number,
        this.pay_date = pay_date,
        this.pay_to = pay_to,
        this.status_id = status_id,
        this.status = this.getStatus()
    }

    

    getStatus() {
        const statusList = [
            { key: 0, value: 'Pending'},
            { key: 1, value: 'Paid'},
            { key: 2, value: 'Rejected'},
            { key: 3, value: 'Recovered'},
            { key: 4, value: 'Cancelled'},
    
        ];

        const status_id = this.status_id;

        const status =  statusList.find(function(item) {
            return item.key == status_id;
        });

        return status.value
    }

}

export default CheckModel;