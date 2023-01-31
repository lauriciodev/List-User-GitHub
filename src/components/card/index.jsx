import { Link } from 'react-router-dom'
import styles from "../card/Card.module.css"

export function Card({image,username,description,route}){
  return(
    <a href={route}>
      <div className={styles.card}>
        <div className={styles.subcard}>
          <img className={styles.img} src={image} alt="" />
          <div className={styles.info}>
            <p>{username}</p>
            <p>{description}</p>
          </div>
        </div>
        <p className={styles.arrow}> > </p>
      </div>
    </a>
  )
}