import React, { useState } from 'react'

export const APIFetch = async (path, method="GET") => {
    try{
        const data = await fetch(path, {
            method: method
        });
        
        if(data.ok) {
            return data.json();
        } else {
            return "ERROR";
        }
    } catch (Error) {
        return "ERROR";
    }
}
