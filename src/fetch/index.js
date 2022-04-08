import React from 'react';
import { postData } from '../const/payload';


const DemoFetch = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const getAll = async () => {
        fetch(`${baseUrl}/thoant`).then(
            res => {
                console.log('response get fetch lan 1 --->', res)
                return res.json()
            }
        ).then(data => console.log('response get fetch', data))

    }

    const onPostData = async () => {
        fetch(`${baseUrl}/thoant`, {
            method: 'POST',
            body: postData,
          } 
        ).then(
            res => {
                console.log('response post fetch lan 1 --->', res)
                return res.json()
            }
        ).then(data => console.log('response post fetch', data))

    }


    return <div>
        <h3>Demo Fetch</h3>
        <div className='wrapper-method'>
            <button onClick={getAll} >Get</button>
            <button onClick={onPostData}>Post</button>
        </div>

    </div>
}

export default DemoFetch;