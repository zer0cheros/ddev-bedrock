import {Products, Categories} from "@/types/types";
import apiRequest from "@/utils/frontend/api-request";
import apiAuthRequest from "@/utils/frontend/api-authRequest";


export async function getProducts(){
    const response = await apiAuthRequest.get(`/wp-json/wc/v3/products`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Products> = await response.data;
    return result
}
export async function getProductCategories() {
    const response = await apiAuthRequest.get('/wp-json/wc/v3/products/categories');
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Categories> = await response.data
    return result
}
