import {Link} from 'react-router-dom'
import style from "./Header.module.css"

function Header(){
    return(
    <div>
        <header>
            <div className={style.areaGeralHeader}>
                
                <Link to='/'>
                    <div className={style.area_logo}>
                        <h1 className={style.textoLogo}>PBank</h1>
                    </div>
                </Link>
                
                <nav className={style.areaNav}>
                    <ul>
                        <li>Para você</li>
                        <li>Para seu negócio</li>
                        <li>O PBank</li>
                        <li>Ajuda</li>
                    </ul>
                    
                    
                </nav>

                <Link to='/AbrirConta'>
                    <div className={style.AreaBotaoConta}>
                        <button className={style.textoBotao}> Abrir conta</button>
                    </div>
                </Link>
            </div>
        </header>
    </div>
    )
}

export default Header