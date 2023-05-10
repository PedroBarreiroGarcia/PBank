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

                <p className={style.textoEmpresarial}>Cartão personalizado para a empresa</p>
                <p className={style.textoEmpresarial}>Pix gratuito e ilimitado</p>
                <p className={style.textoEmpresarial}>100 TEDs e 100 boletos por mês </p>
                <p className={style.textoEmpresarial}>Gestão de acessos e aprovações</p>
            </div>
        </div>
        
    </div>
    )
}

export default VantagensEmpresarial