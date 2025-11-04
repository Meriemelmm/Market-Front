import api from "./api";
export const getProducts= async()=>{
    try{
      const response=await api.get('/products') ;
      return response; 
    }
    catch(error){
        console.log("Error fetching products :",error);
    }
    
}