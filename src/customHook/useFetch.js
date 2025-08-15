import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
 
const getData = async () => {
    try {
        const response = await fetch(url)
        const responseData = await response.json()
        setData(responseData)
        setIsLoading(false)
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
        getData()
    },[url])

    return {data,error,isLoading}
};

