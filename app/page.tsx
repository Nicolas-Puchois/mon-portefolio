import Image from "next/image";

export default function Home() {
  return (
    
      <main>
        <section>
          
          <pre> 
            {`const Nicolas = {
            Work_Post:      ['Backend_developper', 'Full-stack_developper', 'IT Support'],
            Hobbies:        ['History', 'Video Games', 'Learn new things'],
            Ready_to_work:  true
            }`}
          </pre>
          {/* <Image src="" alt="" /> */}
        </section>

              <h1>Test</h1>

        <section>
          <h2>A propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ratione soluta? Facere vitae tenetur dignissimos dolores, aliquid qui ad, ut quo quisquam neque illo quas explicabo doloribus nesciunt. Laborum, harum.</p>
        </section>


        <section>
          <h2> Mes projets</h2>
          <div></div>
          <div></div>

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
