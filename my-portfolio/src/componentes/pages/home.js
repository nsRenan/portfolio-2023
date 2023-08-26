import styles from './home.module.css'
import Image from '../images/image.jpg'

function Home (){
    return (
        <section className={styles.home}>
        <div >
        <img src={Image} className={styles.img} />
        </div>
    <div>
        <h1 >Meu portfolio</h1>
        <p>Olá a todos!

Eu sou Renan, um entusiasta da tecnologia e desenvolvedor de sistemas dedicado a criar soluções inovadoras por meio do poder do código. É uma honra estar aqui hoje para compartilhar um pouco sobre minha paixão pelo mundo da programação e como tenho trabalhado para transformar linhas de código em sistemas funcionais e impactantes.

Desde os primeiros passos na minha jornada como desenvolvedor, fiquei fascinado pela maneira como um simples conjunto de instruções pode ganhar vida e se tornar uma ferramenta poderosa. Minha formação em [Mencionar Formação ou Áreas de Especialização Relevantes] me proporcionou uma base sólida, mas foi minha curiosidade incessante e minha sede de conhecimento que me impulsionaram a mergulhar fundo no universo da programação.

Ao longo dos anos, tive o privilégio de trabalhar em diversos projetos desafiadores, nos quais pude explorar várias linguagens de programação e frameworks. De aplicativos corporativos a sistemas de gerenciamento de dados, meu objetivo sempre foi criar soluções eficientes e elegantes que atendam às necessidades do cliente e melhorem sua experiência.

Minha abordagem de desenvolvimento é centrada na colaboração e na busca constante por melhores práticas. Acredito que a tecnologia é uma ferramenta poderosa para a transformação, mas seu verdadeiro potencial é desbloqueado quando combinado com uma abordagem orientada a equipe e a um entendimento profundo das necessidades do usuário.

Além de escrever código, também tenho paixão por aprender. Sempre estou em busca de atualizações sobre as últimas tendências em desenvolvimento de software e busco constantemente aprimorar minhas habilidades técnicas e interpessoais.

Agradeço a todos por me ouvirem e mal posso esperar para conectar e colaborar com vocês!

Muito obrigado.

Renan</p>
    </div>
    </section>
        
    )
}

export default Home
