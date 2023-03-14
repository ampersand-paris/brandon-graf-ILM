import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
 
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
          console.log('working')
    
          try {
            const res = await fetch(url)
            const json = await res.json();
    
            setData(json)
            setLoading(false)
    
          } catch(error) {
            setError(error)
            setLoading(false)
          }
        }
        
        fetchData()
      }, [url])
      
      return { isLoading, error, data }
}
  
export default useFetch