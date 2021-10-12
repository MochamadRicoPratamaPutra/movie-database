import React from 'react'
import Style from './home.module.css'
import SearchHome from '../../component/base/searchHome'
const Home = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>What movie you want to search?</h1>
      <SearchHome/>
    </div>
  )
}

export default Home
