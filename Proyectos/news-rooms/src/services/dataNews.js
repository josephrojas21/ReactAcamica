import Moment from 'moment';
import axios from 'axios'
const BASE_URL = 'https://api.canillitapp.com';

class DataNews {
    static async getData(){
        try { 
            let date = new Date()    
            date = Moment(date).format("YYYY-MM-DD")
            const response = await axios.get(`${BASE_URL}/latest/${date}`);
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCategory(categoryId){
        try { 
            let id = parseInt(categoryId)
            const response = await  axios.get(`${BASE_URL}/news/category/${id}`);

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getDataQuery(searchValue){
        try { 
            const response = await axios.get(`${BASE_URL}/search/${searchValue}`);

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
export default DataNews;