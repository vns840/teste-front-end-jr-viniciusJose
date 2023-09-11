import "../menu/Menu.css"
export default function Menu(){
  return(
    <header>
        <div className="menu-superior">
          <p>Compra <span>100% segura</span> </p>
          <p><span>Frete grátis</span> acima de R$ 200</p>
          <p><span>Parcele</span> suas compras</p>
        </div>
        <nav className="menu-main">
          <img  className="logo" src="/image/vtex-logo.svg" alt="" />
          <input type="text" placeholder="O que você está buscando?" name="" id="" />
          <div>
           <img src="/image/Group.svg" alt="" />
           <img src="/image/Heart.svg" alt="" />
           <img src="/image/UserCircle.svg" alt="" />
           <img src="/image/Truck.svg" alt="" />
          </div>
        </nav>
        <div className="menu-inferior">
          <p>Todas Categorias</p>
          <p>Supermercado</p>
          <p>Livros</p>
          <p>Moda</p>
          <p>Lançamentos</p>
          <p>Ofertas do dia</p>
          <p>Assinatura</p>
        </div>
    </header>
  )
}