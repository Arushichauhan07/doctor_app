import { useEffect, useState } from "react";
// import { token } from "../../config";

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const fetchData = async ()=> {
            setLoading(true)
            try {
                
                const res = await fetch(url, {
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${token}`
                    },
                    
                })
                // console.log("localStorage Token", localStorage.getItem(token));
                console.log("token", token);

                const result = await res.json()

                if(!res.ok){
                throw new Error(result.message)
                }

                setData(result.data)
                setLoading(false)
            
            } catch (error) {
                console.log("error", error.message);
                setLoading(false)
                // setError(error.message)
            }
        }

        fetchData()
        
    },[url]) 
    return{
        data, loading, error
    }
}

export default useFetchData;
