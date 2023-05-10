import style from'./Home.module.css';
import Sessao1 from "./Sessao1";
import SessaoPcard from './SessaoPcard';
import Servicos from './Servicos';
import SessaoEmpresarial from './SessaoEmpresarial';
import AreaCelularApp from './AreaCelularApp';

function Home() {
  return (
    <div className={style.Home}>
      <Sessao1 />
      <SessaoPcard />
      <Servicos />
      <SessaoEmpresarial />
      <AreaCelularApp />
    </div>
  );
}

export default Home;