import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {

  const maxpokemons = 251;
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${url}/?limit=${maxpokemons}`);
  const data = await res.json();

  // adicionar o id dos pokemons
  data.results.forEach((element, index) => {
    element.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>dex</span>
        </h1>
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='pokeball'
        />
      </div>

      <div className={styles.pokemon_container}>
        {
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </>
  )
}
