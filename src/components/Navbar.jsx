function Navbar() {
    return (
      <>
       <div className="Navbar">
        <div className="container">
            <div className="nav-menu">
              <div className="nav-mouse">
                  <img className="mouse" src="./public/img/mouse.png" alt="" />
                  <h3 className="nav-link">Ваш город: Москва</h3>
              </div>
                <ul className="navbar-nav">
                  <li><a href="" className="nav-link">Бонусы</a></li>
                  <li><a href="" className="nav-link">Документация</a></li>
                  <li><a href="" className="nav-link">О нас</a></li>
                </ul>
               <div className="nav-tell">
                 <i class="fa-solid fa-phone-volume"></i>
                 <p className="nav-link">7(937) 136 - 77 - 66</p>
               </div>
            </div>
        </div>
       </div>
      </>
    );
  }
  export default Navbar;
  