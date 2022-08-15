import { api } from '.';

export default PriceService = {
    getGold() {
        return api.call().get('/get-gold');
    },
    getCoin() {
        return api.call().get('/get-coin');
    }
}
