import Botao from "../../components/Botao"
    const Principal = () => {
        const mensagem = 'Olá devs!!!'
        const mensagem2 = 'Até logo devs!!'
        return(
    <>
        <h1>Página Principal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit asperiores quos cupiditate neque omnis, ullam rerum? Alias quibusdam sed eius eos rem rerum ipsa, a ea, modi minima doloremque?</p>
        <Botao  mensagem={mensagem} />
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi, cum corrupti nostrum eum ipsa itaque facere iusto! Repudiandae odit fugit vero iusto perferendis veritatis doloremque soluta minima eveniet omnis.</p>
        <Botao mensagem={mensagem2} />
    </>

        )

    }
export default Principal
