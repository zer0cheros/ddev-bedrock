import React from 'react'
import axios from 'axios'
import apiRequest from '../../frontend/api-request';
import Page from '../../../types/types';

export async function getPages(){
    const response = await apiRequest.get(`/wp-json/wp/v2/pages`, {});
    if(response.status != 200){
        return new Error('Oops smoething went wrong');
    }
    let result: Array<Page> = await response.data;
    return result
}