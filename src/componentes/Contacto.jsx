import styles from "./Contacto.module.css";

export function Contacto({contact}){
    const { name, picture, cell, location } = contact;
    return(
        <div className={styles.item} key={name.first}>
            <div className={styles.content}>
                <div className={styles.imgCont}>
                    <figure>
                        <img
                            src={picture.thumbnail}
                            alt={name.first}
                            className={styles.img}
                        />
                    </figure>
                </div>
                <div className={styles.mediaContent} >
                    <p className={styles.nombre}>{name.first}{" "}{name.last}</p>
                    <p>{location.city}, {location.state}</p>
                    <p>{cell}</p>
                </div>
            </div>
        </div>
    )
}