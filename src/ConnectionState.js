import React, { useState, useEffect } from 'react'
import { APIFetch } from './APIFetch';
import "./index.css";

export const ConnectionState = () => {
    const STATUS = {
        IDLE: "idle",
        LOADING: "loading",
        SUCCESS: "success",
        ERROR: "error"
    };
    const [status, setStatus] = useState(STATUS.IDLE);
    const [response, setResponse] = useState({});

    const fetchData = async () => {
        setStatus(STATUS.LOADING);
        const data = await APIFetch("https://dog.ceo/api/breeds/image/random");
        if (data !== "ERROR") {
            setResponse(data);
            setStatus(STATUS.SUCCESS)
        } else {
            setStatus(STATUS.ERROR);
        }
    }

    function renderContent() {
        switch (status) {
            case STATUS.IDLE:
                return<div class="center-to-page">
                    <button class="btn" onClick={fetchData}>Click to Fetch Data</button>
                </div>
            case STATUS.LOADING:
                return <div class="center-to-page">
                    <h2>Loading...</h2>
                </div>
            case STATUS.ERROR:
                return <div class="center-to-page">
                    <h2>Error loading content...</h2>
                    <button class="btn" onClick={fetchData}>Click to Retry</button>
                </div>
            case STATUS.SUCCESS:
                return <div class="center-to-page">
                    <h2>Random Image Generated!</h2>
                    <img class="dog-img" src={response.message} />
                    <button class ="btn" onClick={fetchData}>Click to Fetch Another</button>
                </div>
        }
    }

  return (
    <div>
        {renderContent()}
    </div>
  )
}
