import Image from 'next/image';
import StylesMain from "./styles/main.module.css";

export default function Home() {
  return (
    
      <main className={StylesMain.main}>
        <section className={StylesMain.hero_container}>
          
          <section className={StylesMain.hero_text}>

            <div>{`const Nicolas = { `} </div> 
            <div>{` Work_Post:      ['Backend_developper', 'Full-stack_developper', 'IT Support'],  `}</div>
            <div>{` Hobbies:        ['History', 'Video Games', 'Learn new things'],                 `}</div>
            <div>{` Ready_to_work:  true                                                            `}</div>
            <div>{` }                                                                               `}</div>
          </section>
          
          <section>
            
              <Image src="/images/setup.jpg" alt="photo de mon ordinateur fixe avec une tour sur la gauche, deux écran, un micro, un casque bluetooth un clavier et une souris sur son tapis de souris" className={StylesMain.hero_image} width={500} height={500}></Image>
          </section>
        </section>

              <h1 className={StylesMain.titre}>Nicolas Puchois</h1>

        <section>
          <h2>A propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ratione soluta? Facere vitae tenetur dignissimos dolores, aliquid qui ad, ut quo quisquam neque illo quas explicabo doloribus nesciunt. Laborum, harum.</p>
        </section>


        <section>
          <h2> Mes projets</h2>

          <button> Pour voir l&apos;ensemble de mes projets, cliquer ici</button>
        </section>

        <section>
          <h2> Mes compétences</h2>
          <section>
            <h3> Language</h3>
          </section>
          <section>
            <h3>Framework et librairies</h3>
          </section>
          <section>
            <h3>logiciel</h3>
          </section>
        </section>
        <section>
          <h2>Contact</h2>
          <a href="mailto:">Me contacter par mail</a>
          <a href=""> Mon GitHub</a>
          <a href="">Mon linkedin</a>
        </section>
      </main>

  );
}
