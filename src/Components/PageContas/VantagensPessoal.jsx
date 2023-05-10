import style from "./VantagensPessoal.module.css"

function VantagensPessoal(){
    return(
    <div div className={style.VantagensPessoal}>
        <div className={style.areaTextoVantagensPessoal}>
            <div className={style.areaTituloPessoal}>
                <div className={style.tituloPessoal}>Vantagens da sua conta digital <scan className={style.TextoLogo}>PBank</scan></div>
            </div>
            <div className={style.areaTextoPessoal}>

                <p className={style.textoPessoal}>Seu dinheiro em um lugar seguro</p>
                <p className={style.textoPessoal}>Parcelamento dos boletos em até 12x</p>
                <p className={style.textoPessoal}>Cartão de crédito e débito em um só lugar</p>
                <p className={style.textoPessoal}>Diversos serviços na nossa plataforma</p>
            </div>


        </div>
        <div className={style.areaImgVantagensPessoal}></div>
    </div>
    )
}

export default VantagensPessoal