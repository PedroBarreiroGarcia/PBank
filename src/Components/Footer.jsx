import style from "./Footer.module.css"
import Facebook from "../Imagens/IconeFacebook.svg"
import Instagram from "../Imagens/IconeInstagram.svg"
import Linkedin from "../Imagens/IconeLinkedin.svg"
import YouTube from "../Imagens/IconeYouTube.svg"
import Twitter from "../Imagens/IconeTwitter.svg"

function Footer(){
    return(
    <div className={style.AreaFooter}>
        <div className={style.areaLogoRedeSociais}>
            <div className={style.areaLogo}>
                <h1 className={style.textoLogo}>PBank</h1>
            </div>
            <div className={style.areaRedesSociais}>
                <div className={style.areaTituloRedesSociais}>
                <h1 className={style.textoRedesSociais}>Redes Sociais</h1>
                </div>

                <div className={style.areaIconesRedesSociais}>
                    <div className={style.areaIcone}>
                        <img src={Facebook} alt="icone facebook" />
                    </div>

                    <div className={style.areaIcone}>
                        <img src={Instagram} alt="icone Instagram" />
                    </div>

                    <div className={style.areaIcone}>
                        <img src={Linkedin} alt="icone Linkedin" />
                    </div>

                    <div className={style.areaIcone}>
                        <img src={YouTube} alt="icone YouTube" />
                    </div>
                    <div className={style.areaIcone}>
                        <img src={Twitter} alt="icone Twitter" />
                    </div>
                </div>
            </div>
        </div>

        <div className={style.AreaNossosProdutos}>
            <h1 className={style.textoTituloFooter}>Nossos Produtos</h1>
            <h2 className={style.textoTextoFooter}>Cartão de Crédito</h2>
            <h2 className={style.textoTextoFooter}>Cartão de Débito</h2>
            <h2 className={style.textoTextoFooter}>Conta Digital Pessoal</h2>
            <h2 className={style.textoTextoFooter}>Conta Digital Empresarial</h2>
            <h2 className={style.textoTextoFooter}>Empréstimos FGTS</h2>
        </div>

        <div className={style.CentralDeAjuda}>
            <h1 className={style.textoTituloFooter}>Central de ajuda</h1>
            <h2 className={style.textoTextoFooter}>Ouvidoria</h2>
            <h2 className={style.textoTextoFooter}>Fale com a gente</h2>
            <h2 className={style.textoTextoFooter}>Servicos online</h2>
            <h2 className={style.textoTextoFooter}>Canais de atendimento</h2>
            <h2 className={style.textoTextoFooter}>Dúvidas</h2>
        </div>

        <div className={style.AreaInstitucional}>
            <h1 className={style.textoTituloFooter}>Institucional </h1>
            <h2 className={style.textoTextoFooter}>Sobre nós</h2>
            <h2 className={style.textoTextoFooter}>Política de privacidade</h2>
            <h2 className={style.textoTextoFooter}>Privacidade de dados</h2>
            <h2 className={style.textoTextoFooter}>Ética</h2>
        </div>
        





        <div className={style.areaEndereco}>
            <h1 className={style.textoEndereco}>R.Tito, 54 - Vila Romana, São Paulo - SP, 05051-000. © 2022 BANCO PBank S.A. CNPJ: 01.123.455/0001-99</h1>
        </div>
    </div>
    )
}

export default Footer