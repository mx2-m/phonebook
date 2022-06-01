import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/api/v1/phonenumber';

class PhoneNumberService {

    getPhoneNumber() {
        return axios.get(REST_API_URL);
    }


    createPhoneNumbere(phonenumber) {
        return axios.post(REST_API_URL, phonenumber);
    }

    getPhoneNumberById(id) {
        return axios.get(REST_API_URL + '/' + id);

    }

    updatePhoneNumber(phonenumber, id) {
        return axios.put(REST_API_URL + '/' + id, phonenumber);
    }

    deletePhoneNumber(id) {
        return axios.delete(REST_API_URL + '/' + id);
    }
}


export default new PhoneNumberService();