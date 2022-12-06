import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <section>
        <div>
          <Image
            src='/images/pokeball.png'
            width='30'
            height='30'
            alt='pokeball image'
          />
          <h1>
            Pokedex
          </h1>
        </div>
        <ul>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar