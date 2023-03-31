import apiRequest from '../../frontend/api-request';
import {Page} from '@/types/types'

export async function getMedia(){
    const response = await apiRequest.get(`/wp-json/wp/v2/media`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Page> = await response.data;
    return result
}
export async function getMediaById(id:number){
    const response = await apiRequest.get(`/wp-json/wp/v2/media/${id}`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Page> = await response.data;
    return result
}