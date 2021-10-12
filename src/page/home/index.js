import React from 'react'
import Style from './home.module.css'
import SearchHome from '../../component/base/searchHome'
const Home = () => {
  return (
    <div className={Style.container}>
      <p>Search any movie that you want to watch</p>
      <SearchHome/>
    </div>
  )
}

export default Home
