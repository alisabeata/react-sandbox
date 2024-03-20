import { useEffect, useState } from 'react'

const MOCK_DATA = [
  { id: 'g_01', player: 'Caleb Barnes', points: -104 },
  { id: 'g_02', player: 'Ethan Marshall', points: 30 },
  { id: 'g_03', player: 'Maya Patel', points: 42 },
  { id: 'g_04', player: 'Jordan Chang', points: 26 },
  { id: 'g_05', player: 'Serena Rodriguez', points: -84 },
  { id: 'g_06', player: 'Serena Rodriguez', points: 48 },
  { id: 'g_07', player: 'Jordan Chang', points: 104 },
  { id: 'g_08', player: 'Olivia Chang', points: 140 },
  { id: 'g_09', player: 'Maya Patel', points: 10 },
  { id: 'g_10', player: 'Ethan Marshall', points: 60 },
  { id: 'g_11', player: 'Jordan Chang', points: -26 },
  { id: 'g_12', player: 'Olivia Chang', points: -160 },
  { id: 'g_13', player: 'Serena Rodriguez', points: 26 },
  { id: 'g_14', player: 'Serena Rodriguez', points: 84 },
]

export const GameBoard = () => {
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const hashMap = {}
    const res = []

    for (const item of MOCK_DATA) {
      if (hashMap[item.player]) {
        hashMap[item.player] = hashMap[item.player] + item.points
      } else {
        hashMap[item.player] = item.points
      }
    }

    for (const element in hashMap) {
      res.push([element, hashMap[element]])
    }

    res.sort((a, b) => a[1] - b[1])

    setData(res)
    setFilteredData(res)
  }, [MOCK_DATA])

  useEffect(() => {
    // debounce
    const id = setTimeout(() => {
      console.log('search')
      setFilteredData(
        data.filter((item) => item[0].toLowerCase().includes(searchInput.toLowerCase())),
      )
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [data, searchInput])

  return (
    <div>
      <input
        type="search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {filteredData?.map((item, id) => {
        return (
          <div key={id}>
            {item[0]}:{' '}
            <span style={item[1] < 0 ? { background: 'red' } : null}>
              {item[1]}
            </span>
          </div>
        )
      })}
    </div>
  )
}
