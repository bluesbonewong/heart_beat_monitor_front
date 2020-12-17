import axios from 'axios'

export default {
    data() {
        return {
            data: {
                avgload: [[1607689798049, '0.68'], [1607689797041, '0.94'], [1607689796039, '0.99'], [1607689795041, '1.69'], [1607689794033, '0.67'], [1607689793033, '2.46']],
            }
        }
    },
    created() {
        // this.getData()
    },
    methods: {
        async getData() {
            await axios.get('api/data.json').then(this.getDataSucc)
        },
        getDataSucc(res) {
            const {data} = res;
            this.data.avgload = data.map(v => {
                return [v.timestamp, (v.avgload * 10).toFixed(2)]
            })
            console.log(this.data.avgload)
        }
    }
}
