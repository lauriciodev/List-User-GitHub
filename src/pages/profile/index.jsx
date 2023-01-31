import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../components/card'
import styles from "./Profile.module.css"

export function Profile(){
const [repos,setRepos] = useState([])
const [listUser, setListUser] = useState({});
const {user} = useParams(); 

useEffect(() =>{
 const data = async () =>{
  await axios
  .get(`https://api.github.com/users/${user}`)
  .then( async(response) =>{
    setListUser(response.data);
    await axios.get(`https://api.github.com/users/${user}/repos`)
    .then(repositorios =>{
      setRepos(repositorios.data);
    }).catch(erro =>{
      console.log(erro);
    })
  })
  .catch((erro) =>{
    console.log(erro);
 })}
 data();
},[]);

  return(
    <>
    <div className={styles.details}>
      <img src={listUser.avatar_url} alt="" />
      <div className={styles.user}>
        <div className={styles.details_user}>
          <div className={styles.follow__details}>
            <p>{listUser.followers}</p>
            <p>seguidores</p>
          </div>
          <div className={styles.follow__details}>
            <p>{listUser.following}</p>
            <p>seguindo</p>
          </div>
          <div className={styles.follow__details}>
            <p>{listUser.public_repos}</p>
            <p>repositórios</p>
          </div>
        </div>
        <div className={styles.username__details}>
          <h3>{listUser.login}</h3>
          <p>{listUser.bio}</p>
        </div>
      </div>
    </div>
 
      <div>
        {
         repos && repos.map(repo =>{
          return(
            <Card image={listUser.avatar_url} username={repo.full_name} description={repo.description} route={repo.html_url}/>
          )
         })
        }
      </div>


    </>
  )
}