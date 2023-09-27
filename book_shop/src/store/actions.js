import axios from "axios";

export const getBooks = ({commit}) =>{
    axios.get('http://10.0.10.99:3300/api/showbooks')
    .then(response => {
        commit('SET_BOOKS', response.data);
    })
}