import React from 'react'
import parseLinkHeader from "parse-link-header";
import apiRequest from '../../frontend/api-request';
import {Menu} from '@/types/types';

export async function getMenus(){
    const response = await apiRequest.get(`/wp-json/wp/v2/menu`);
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Menu> = await response.data;
    return result
}