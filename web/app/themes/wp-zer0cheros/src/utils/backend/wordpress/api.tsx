import React from 'react'
import parseLinkHeader from "parse-link-header";
import apiRequest from '../../frontend/api-request';
import Page from '../../../types/types';

export async function getPages(){
    const response = await apiRequest.get(`/wp-json/wp/v2/pages`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Page> = await response.data;
    return result
}
export async function getPage(slug:string){
    const response = await apiRequest.get(`/wp-json/wp/v2/pages/?slug=${slug}`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result = await response.data;
    return result
}
