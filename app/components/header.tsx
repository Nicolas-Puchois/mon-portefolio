'use client';
import styles from "./header.module.css";

export default function mainHeaders(){
    return(
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <button className={styles.toggle}>
                    <span className={styles.sr_only}> &#9776</span>
                </button>
                <ul className={styles.nav_links}>
                    <li> <a href="."> <span> Accueil      </span>  </a>      </li>
                    <li> <a href="."> <span> A propos     </span>  </a>      </li>
                    <li> <a href="."> <span> Projets      </span>  </a>      </li>
                    <li> <a href="."> <span> Compétences  </span>  </a>      </li>
                    <li> <a href="."> <span> Contact      </span>  </a>      </li>
                    <li> <button id="toggle-dark-mode"></button>            </li>
                </ul>
            </div>
        </nav>
    </header>
    )
};