import style from "./AppCelular.module.css"
import CelularPessoal from "./ImagensPageContas/CelularPessoal.svg"
import CelularEmpresarial from "./ImagensPageContas/CelularEmpresarial.svg"
import IconeAppPessoal from "./ImagensPageContas/app_amarelo.png"
import IconeAppEmpresarial from "./ImagensPageContas/app_preto.png"
import GooglePlay from "./ImagensPageContas/GooglePlay.svg"
import AppStore from "./ImagensPageContas/AppStore.svg"

function AppCelular(){
    return(
    <div div className={style.AppCelular}>
        <div className={style.areaTitulo}>
            <h1 className={style.TextoTitulo}>Basta baixar o app do PBank e fazer parte do nosso mundo!</h1>
        </div>
        <div className={style.areaTexto}>
            <p className={style.Texto}>Seu controle financeiro de maneira descomplicada com o banco mais inovador do país!</p>
        </div>

        <div className={style.areaIconesApp}>
            <div className={style.espacoIcone}>
                <img src={IconeAppPessoal} alt="" />
            </div>
            <div className={style.espacoIcone}>
                <img src={IconeAppEmpresarial} alt="" />
            </div>
        </div>

        <div className={style.areaCelulares}>
            <div className={style.espacoCelular}>
                <img src={CelularPessoal} alt="" />
            </div>
            <div className={style.espacoCelular}>
                <img src={CelularEmpresarial} alt="" />
            </div>
        </div>

        <div className={style.areaLojaApps}>
            <div className={style.espacoLojaApps}>
                <div className={style.areaQRcode}></div>

                <div className={style.espacoImgLojaApp}>
                    <div className={style.ImgLojaApp}>
                        <img src={GooglePlay} alt="" />
                    </div>
                    <div className={style.ImgLojaApp}>
                            <img src={AppStore} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.espacoLojaApps}>
                <div className={style.areaQRcode}></div>

                <div className={style.espacoImgLojaApp}>
                    <div className={style.ImgLojaApp}>
                        <img src={GooglePlay} alt="" />
                    </div>
                    <div className={style.ImgLojaApp}>
                            <img src={AppStore} alt="" />
                    </div>
                </div>
            </div>            

        </div>

        <div className={style.areaTextoQRcode}>
            <div className={style.espacoTextoQRcode}>
                <p className={style.TextoQRcode}>Abra a câmara do seu celular e aponte pro <span className={style.TextoQRcodeAmarelo}>QR Code</span> para baixar o app.  </p>
            </div>
            <div className={style.espacoTextoQRcode}>
                <p className={style.TextoQRcode}>Abra a câmara do seu celular e aponte pro <span className={style.TextoQRcodeAmarelo}>QR Code</span> para baixar o app.  </p>
            </div>
        </div>




    </div>
    )
}

export default AppCelular