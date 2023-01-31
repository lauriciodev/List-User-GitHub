import axios from 'axios'
import { useState } from 'react'
import { Card } from '../../components/card'
import styles from "./Home.module.css"


export function Home(){

  const [user, setUser] = useState("")
  const [listUser, setListUser] = useState("")
  
  const handleSearch = async() =>{
  await axios.get(`https://api.github.com/users/${user}`)
  .then( response =>{
    setListUser(response.data);
  }).catch((erro) =>{
    console.log(erro)
  })
  }


  return(<>
  
  <div className={styles.title}>
    <h1>Repositorios do github</h1>
    </div>
    <div className={styles.search}>
      <input type="text" placeholder='Digite aqui....' onChange={(e) => setUser(e.target.value)} />
      <button onClick={() => handleSearch()}>Pesquisar</button>
    </div>
    <div>
      {listUser && (
      <Card image={listUser.avatar_url} username={listUser.login} description={listUser.bio} route={`/profile/${listUser.login}`}  />
      ) }
    </div>
  </>
  )
}