function Navbari() {
  return (
    <>
    <div className="navbari">
        <div className="container">
            <div className="navi-team">
              <div className="navi-motiv">
                  <img src="./public/img/kapalak.png" alt="" />
              </div>
              <div className="navi-name">
                  <button class="text"><span> Каталог</span> </button>
                  <div className="input">
                    <h6>Найти парфюм..</h6>
                  <i class="summa fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
               <div className="navi-font">
               <i class="fa-solid fa-user"></i>
               <i class="fa-solid fa-basket-shopping"></i>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Navbari;
