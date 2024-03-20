import React, { useContext } from 'react'
import { List } from './../List'
import { DataContext } from './../../context/DataContext'

export const Content = () => {
  const { data, loading, error } = useContext(DataContext)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div>
        {data &&
          data.map((item, id) => (
            <blockquote key={id}>
              <p>{item.quote}</p>
              <footer>{item.author}</footer>
            </blockquote>
          ))}
      </div>
      <List />
    </>
  )
}
