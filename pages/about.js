import Image from "next/image";
import Link from "next/link";
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>
        Sobre o projeto
      </h1>
      <p>
        Este projeto foi desenvolvido enquanto acompanhava o curso de Next.js no <Link href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft" target="_blank">youtube</Link>, ministrado pelo Matheus Battisti, para praticar os aprendizados de Next.js. A Pokeapi foi uma excelente e divertida forma para dar os primeiros passos com o Next e começar a entender como Server Side Rendering funciona, como o roteamento das páginas finciona no Next entre  outras coisas. Apartir de agora vou dar os próximos passos para me aprofundar ainda mais na usabilidade, vantagens e especificidades do Next.js.
      </p>
      <Image
        src='/images/charizard.png'
        width='300'
        height='300'
        alt='pokemon charizard'
      />
    </div>
  )
}

export default About;