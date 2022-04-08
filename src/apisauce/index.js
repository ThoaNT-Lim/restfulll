import { create } from 'apisauce';
import React from 'react';
import { postData } from '../const/payload';

const api = create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Accept: 'application/json' },
  })
const APISauce = () => {

    const getAll = async () => {
        await api
            .get('/thoant')
            .then(response => {
                console.log('response get apisauce--->', response);
            })
    }

    const onPostData = async () => {
        await api
            .post('/thoant', postData)
            .then(response => {
                console.log('response post apisauce--->', response);
            })
    }
    return <div>
        <h3>APISauce</h3>
        <div className='wrapper-method'>
            <button onClick={getAll} >Get</button>
            <button onClick={onPostData}>Post</button>
        </div>

     
    </div>
}

export default APISauce;