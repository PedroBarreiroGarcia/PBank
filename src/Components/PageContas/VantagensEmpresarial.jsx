import style from "./VantagensEmpresarial.module.css"
// import ImgEmpresarial from "./ImagensPageContas/imgEmpresarial.jpg"

function VantagensEmpresarial(){
    return(
    <div div className={style.VantagensEmpresarial}>
        <div className={style.areaImgVantagensEmpresarial}>
            {/* <img src={ImgEmpresarial} alt="" /> */}
        </div>
        <div className={style.areaTextoVantagensEmpresarial}>
            <div className={style.areaTituloEmpresarial}>
                <div className={style.TextoLogo}>PBank Empresarial</div>
            </div>
            <div className={style.areaTextoEmpresarial}>

                <p className={style.textoEmpresarial}>Seu dinheiro em um lugar seguro</p>
                <p className={style.textoEmpresarial}>Parcelamento dos boletos em até 12x</p>
                <p className={style.textoEmpresarial}>Cartão de crédito e débito em um só lugar</p>
                <p className={style.textoEmpresarial}>Diversos serviços na nossa plataforma</p>
            </div>
        </div>
        
    </div>
    )
}

export default VantagensEmpresarial