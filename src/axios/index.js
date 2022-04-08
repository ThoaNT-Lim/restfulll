import axios from 'axios';
import React, { useState } from 'react';
import { postData } from '../const/payload';


const DemoAxios = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;


    const getAll = async () => {
        try {
            const response = await axios.get(`${baseUrl}/thoant`);
            console.log('response get axios-->', response);
        } catch (error) {
            console.error(error);
        }

    }
    const onPostData = async () => {
        try {
            const response = await axios.post(`${baseUrl}/thoant`, postData);
            console.log('response post axios-->', response);
        } catch (error) {
            console.error(error);
        }
    }

    return <div>
        <h3>DemoAxios</h3>
        <div className='wrapper-method'>
            <button onClick={getAll} >Get</button>
            <button onClick={onPostData}>Post</button>
        </div>
    </div>
}

export default DemoAxios;