import style from "./Servicos.module.css"

function Servicos(){
    return(
    <div className={style.SessaoServicos}>
        <div className={style.areaTextoServicos}>
            <div className={style.textoTituloServicos}>Nossos Serviços</div>
            <div className={style.areaCartoesServicos}>
                <div className={style.cartao}>
                    <h1 className={style.tituloCartao}>Conta digital</h1>
                    <p className={style.textoCartao}>Sua conta <span className={style.textoCartaoAmarelo}>grátis</span> e 100% digital, sem a burocracia dos  antigos sistemas .</p>
                    <button className={style.textoBotaoServicos}> Abrir conta</button>
                </div>
                <div className={style.cartao}>
                    <h1 className={style.tituloCartao}>Rendimento automático</h1>
                    
                    <p className={style.textoCartao}>Seu saldo no <span className={style.textoCartaoAmarelo}>PBank</span> rendendo 104% do CDI.  </p>
                    
                </div>
                <div className={style.cartao}>
                    <h1 className={style.tituloCartao}>Parcelamento de boletos</h1>
                    
                    <p className={style.textoCartao}>Aqui você pode parcelar seus boletos em até 12x.</p>
                    
                </div>
                <div className={style.cartao}>
                    <h1 className={style.tituloCartao}>Empréstimo FGTS</h1>
                    <p className={style.textoCartao}>Receba até 5 parcelas de uma vez. Com taxa a de 1.19% a.m.</p>
                    
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Servicos