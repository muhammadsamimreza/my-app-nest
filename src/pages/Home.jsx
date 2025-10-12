import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Trending from './Trending'
import Loader from '../components/Loading/Loading'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },300)
    return ()=> clearTimeout(timer)
  },[])

  if(loading) return <Loader></Loader>
  return (
    <div>
        <Trending></Trending>
    </div>
  )
}

export default Home