import style from "./SessaoPcard.module.css"
import cartao from "./ImagensHome/iconeCartao.png" 
import cashBack from "./ImagensHome/iconeCashBack.svg"
import aviao from "./ImagensHome/iconeAviao.png" 
import parcelamento from "./ImagensHome/iconeParcelamento.png"
import Cartao from "./ImagensHome/Cartao_pedro.svg"

function SessaoPcard(){
    return(
    <div className={style.SessaoPcard}>
        <div className={style.AreaImgCartao}>
            <div className={style.ImgCartao}>
                <img src={Cartao} alt="" />
            </div>
        </div>

        <div className={style.AreaVantagensPcard}>
            <div className={style.AreaTextosMaioresCard}>
                <div className={style.TextoMaiorPreto}>Fique por dentro do </div>
                <scanf className={style.TextoMaiorAmarelo}>Pcard </scanf>
            </div>

            <div className={style.AreaTextosMenoresCard}>
                <div className={style.TextoMenorPreto}>Nosso cartão de crédito e débito que está com<br></br> você em todos os momentos. </div>
            </div>
            
            <div className={style.AreaCardsVantagens}>
                <div className={style.Card}>
                    <div className={style.areaIcone}>
                        <img src={cartao} alt="" />
                    </div>
                    <div className={style.textoMaiorCard}>Sem anuidade</div>
                    <div className={style.textoMenorCard}>Você só paga o que usar e quando usar!</div>
                </div>
                <div className={style.Card}>
                <div className={style.areaIcone}>
                        <img src={cashBack} alt="" />
                    </div>
                    <div className={style.textoMaiorCard}>Cashback</div>
                    <div className={style.textoMenorCard}>O valor chega direto na sua conta.</div>
                </div>
            </div>

            <div className={style.AreaCardsVantagens}>
            <div className={style.Card}>
                    <div className={style.areaIcone}>
                        <img src={aviao} alt="" />
                    </div>
                    <div className={style.textoMaiorCard}>Programa de pontos</div>
                    <div className={style.textoMenorCard}>Em cada compra você acumula pontos para trocar nos mais diversos produtos.</div>
                </div>
                <div className={style.Card}>
                <div className={style.areaIcone}>
                        <img src={parcelamento} alt="" />
                    </div>
                    <div className={style.textoMaiorCard}>Parcelamento</div>
                    <div className={style.textoMenorCard}>Suas faturas podem ser pagas em até 12x.</div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default SessaoPcard