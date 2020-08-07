import axios from "axios";
const BASEURL = "https://randomuser.me/api/?pretty?page=3&results=10&seed=abc";
// const APIKEY = "&apikey=trilogy";

export default {
    
  getEmployee: function() {
    console.log(BASEURL);

      return axios.get(BASEURL);
  }
};
