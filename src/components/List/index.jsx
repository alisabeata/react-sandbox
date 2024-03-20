import React, { useState, useEffect } from 'react'

const fetchArray = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['first', 'second'])
    }, 2000)
  })
}

export const List = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetchArray().then(setData)
  }, [])

  return <div>{data && data.map((cur, id) => <div key={id}>{cur}</div>)}</div>
}
