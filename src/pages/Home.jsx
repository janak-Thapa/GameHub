import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner'
import TrendingGames from '../components/TrendingGames'
import GamesByGenreId from '../components/GamesByGenreId'

function Home() {
  const[allGamesList,setAllGamesList] = useState([])
  const[gameListByGenres,setGameListByGenres]= useState([])
  const [selectedGenresName,setSelectedGenresName]= useState('Action')
  useEffect(()=>{
    getAllGamesList();
    getGamesByGenresId(4)
  },[])
  const getAllGamesList = ()=>{
    GlobalApi.getAllGames.then((res)=>{
      setAllGamesList(res.data.results)
     
    })
  }
  const getGamesByGenresId = (id)=>{
   
    GlobalApi.getGamesByGenreId(id).then((res)=>{

  setGameListByGenres(res.data.results);
})  }
  return (
<div className='grid  grid-cols-4 px-8'>
  <div className=' hidden md:block'>

  <GenreList genreId={(genreId)=>getGamesByGenresId(genreId)}
  selectedGenresName={(name)=>setSelectedGenresName(name)}
  />
  </div>

  <div className='col-span-4 md:col-span-3 '>
   {allGamesList?.length>0 && gameListByGenres.length>0?
   <div>
   <Banner gameBanner = {allGamesList[0]}/>
   <TrendingGames gameList = {allGamesList}/>
   <GamesByGenreId gameList= {gameListByGenres}
   selectedGenresName= {selectedGenresName}/>
   </div>
   :null}  
  </div>
</div>
  )
}

export default Home