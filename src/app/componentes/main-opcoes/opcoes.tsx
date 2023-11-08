import "../main-opcoes/styles.css";
import Image from "next/image";
import Button from 'react-bootstrap/Button';

const dadosCafe =[{
    nome:"Cappuccino",
    descricao: "O cappuccino é uma deliciosa invenção italiana, que mistura o café espresso com leite vaporizado, resultando em um creme bem consistente.",
    imagem: "/imagens/cappuccino.png",
},
{
    nome:"Irish Coffee",
    descricao: "Receita criada na Irlanda, o Irish coffee leva, além do café, o tradicional uísque irlandês e uma camada de creme.",
    imagem: "/imagens/irish.png"
},
{
    nome:"Caffè latte",
    descricao: "O Caffè latte também tem origem italiana e nada mais é do que o café com leite, também conhecido como pingado em algumas regiões do Brasil.",
    imagem: "/imagens/latte.png",
},
{
    nome:"Café Macchiato",
    descricao: "O macchiato é uma versão adocicada do espresso com uma “macchia di latte” (mancha de leite) vaporizada, que traz cremosidade e valoriza os açúcares da bebida.",
    imagem: "/imagens/macchiato.png",
},
{
    nome:"Café Mocha",
    descricao: "O mocha ou mocaccino é para os fãs de chocolate, já que é feito com café espresso, leite vaporizado, espuma de leite e calda de chocolate.",
    imagem: "/imagens/mocha.png",
},
{
    nome:"Café Duplo",
    descricao: "Essa variedade da bebida nada mais é do que aquilo que o nome diz: duas medidas do café espresso servidas na mesma xícara.",
    imagem: "/imagens/duplo.png",
},
]

export function OpcoesCafe() {
    return(
        <div className="opcoes-cafe">
            <h1>OPÇÕES DE CAFÉ</h1>
            <div className="cardapio">
                {dadosCafe.map((cafe) =>(
                    <div className="itens-cardapio" key={cafe.nome} >
                        <img src={cafe.imagem} alt={'cafe'} /> 
                        <div className="informacao-cardapio">
                            <h3>{cafe.nome}</h3>
                            <p>{cafe.descricao}</p>
                            <Button variant="outline-dark" className="btn-saiba-mais">Saiba mais</Button>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </div>
    );
}