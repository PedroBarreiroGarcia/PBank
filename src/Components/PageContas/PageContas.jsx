import style from "./PageContas.module.css"
import AppCelular from "./AppCelular"
import VantagensPessoal from "./VantagensPessoal"
import VantagensEmpresarial from "./VantagensEmpresarial"


function PageContas(){
    return(
    <div div className={style.PageContas}>
        <AppCelular/>
        <VantagensPessoal/>
        <VantagensEmpresarial/>
    </div>
    )
}

export default PageContas