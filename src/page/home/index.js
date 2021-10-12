import React from 'react'
import Style from './home.module.css'
import SearchHome from '../../component/base/searchHome'
import Autocomplete from '../../component/base/autoComplete'

const Home = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>What movie you want to search?</h1>
      <Autocomplete suggestions={["Superman", "Batman", "Marvel", "Spiderman", "Iron man"]}/>
      <SearchHome/>
    </div>
  )
}

export default Home
