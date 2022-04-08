import React from 'react';
import request from 'umi-request';
import { postData } from '../const/payload';

const baseUrl = process.env.REACT_APP_BASE_URL;
const DemoUmiRequest = () => {
    const getAll = async () => {
        request
        .get(`${baseUrl}/thoant`)
        .then(function(response) {
          console.log('response get umi-request -->', response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    const onPostData = async () => {
        // request('/api/v1/some/api', { method: 'post', data: formData, requestType: 'form',});
        request
        .post(`${baseUrl}/thoant`, postData)
        .then(function(response) {
          console.log('response post umi-request -->', response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    const onCheckCache = () => {
        request(`${baseUrl}/thoant`, {
            method: 'get',
            timeout: 1000,
            useCache: true,
            ttl: 3000,
            maxCache: 0
        })
    }
    return <div>
        <h3>Demo Umi-Request</h3>
        <div className='wrapper-method'>
            <button onClick={getAll} >Get</button>
            <button onClick={onPostData}>Post</button>
            <button onClick={onCheckCache}>Get (has cache)</button>
        </div>

    </div>
}

export default DemoUmiRequest;