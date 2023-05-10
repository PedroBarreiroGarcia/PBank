import style from "./SessaoEmpresarial.module.css"

function SessaoEmpresarial(){
    return(
    <div className={style.AreaEmpresarial}>
        <div className={style.areaImagemEmpresarial}>
            <div className={style.areaImgEmpresarial}></div>
        </div>

        <div className={style.areaTextosEmpresarial}>
            <div className={style.espacoTextoEmpresarial}>
                <h1 className={style.textoEmpresarial}>
                    Conheça as vantagens da conta PBank Empresarial
                </h1>
            </div>

            <div className={style.areaBotaoEmpresarial}>
                <button className={style.BotaoSessao1}>PBank Empresarial</button>
            </div>
        
        </div>

    </div>
    )
}

export default SessaoEmpresarial