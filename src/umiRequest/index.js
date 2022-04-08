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

    return <div>
        <h3>Demo Umi-Request</h3>
        <button onClick={getAll}>Get all</button>
        <button onClick={onPostData}>Post</button>

    </div>
}

export default DemoUmiRequest;