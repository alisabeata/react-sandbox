import React, { createContext, useState, useEffect } from 'react'

const initState = {
  data: null,
  loading: true,
  error: null,
}

const DataContext = createContext(initState)

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'X-Api-Key': `${process.env.REACT_APP_KEY}`,
            'Content-Type': 'application/json',
          },
        })
        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
