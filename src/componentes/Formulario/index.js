import Botao from "../Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspenca from "../ListaSuspenca"
import "./Formulario.css"
const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data-science',
        'Devops',
        'UX e Dsignin',
        'Mobile',
        'Inivação e Gestão'
    ]

    const aoSalvar = (evento)=>{
        evento.preventDefault();
        console.log("Funcionou")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspenca obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario