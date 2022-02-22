import axios,{apiUrl} from '../config';

async function loginAdmin({userid,password}) {
    const response = await axios.post('/auth/login',
        JSON.stringify({userid,password}),
          {
            headers: {
              'Content-Type': 'application/json',
              
            },
            withCredentials: true
          }
        ).catch((error)=>{});
        return response?.data;   
}
export {loginAdmin}