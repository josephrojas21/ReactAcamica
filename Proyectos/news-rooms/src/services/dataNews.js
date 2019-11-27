import Moment from 'moment';
const BASE_URL = 'https://api.canillitapp.com';

class DataNews {
    static async getData(){
        try { 
            let date = new Date()    
            date = Moment(date).format("YYYY-MM-DD")
            const response = await fetch(`${BASE_URL}/latest/${date}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCategory(categoryId){
        try { 
            let id = parseInt(categoryId)
            const response = await fetch(`${BASE_URL}/news/category/${id}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    static async getDataQuery(searchValue){
        try { 
            const response = await fetch(`${BASE_URL}/search/${searchValue}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }
}
export default DataNews;