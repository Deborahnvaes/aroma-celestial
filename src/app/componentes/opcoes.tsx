import "../styles.css";
import Image from 'next/image'
export function OpcoesCafe() {
    return(
        <div className="opcoes-cafe">
            <h1>OPÇÕES DE CAFÉ</h1>
            <div className="cardapio">
                <img src="/imagens/cappuccino.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Cappuccino</h3>
                    <p>O cappuccino é uma deliciosa invenção italiana, que mistura o café espresso com leite vaporizado, resultando em um creme bem consistente.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
            <div className="cardapio">
                <img src="/imagens/irish.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Irish Coffee</h3>
                    <p>Receita criada na Irlanda, o Irish coffee leva, além do café, o tradicional uísque irlandês e uma camada de creme.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
            <div className="cardapio">
                <img src="/imagens/latte.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Caffè latte</h3>
                    <p>O Caffè latte também tem origem italiana e nada mais é do que o café com leite, também conhecido como pingado em algumas regiões do Brasil.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
            <div className="cardapio">
                <img src="/imagens/macchiato.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Café Macchiato</h3>
                    <p>O macchiato é uma versão adocicada do espresso com uma “macchia di latte” (mancha de leite) vaporizada, que traz cremosidade e valoriza os açúcares da bebida.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
            <div className="cardapio">
                <img src="/imagens/mocha.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Café Mocha</h3>
                    <p>O mocha ou mocaccino é para os fãs de chocolate, já que é feito com café espresso, leite vaporizado, espuma de leite e calda de chocolate.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
            <div className="cardapio">
                <img src="/imagens/duplo.png" alt="" />
                <div className="informacao-cardapio">
                    <h3>Café Duplo</h3>
                    <p>Essa variedade da bebida nada mais é do que aquilo que o nome diz: duas medidas do café espresso servidas na mesma xícara.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}