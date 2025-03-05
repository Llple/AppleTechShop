import React from "react";

const Header = () => {
  return (
    <div className="header container">
      <img src="logo_1.webp" className="header-logo"/>
      <div>
        <h1 className="header-number">+7 (987) 654-32-10</h1>
        <p>Часы работы: с 10:00 до 20:00</p>
        <div className="header-ref">
          <a href="tg.com"><img src="fgs16_telegram.svg" alt="vk" height={32} width={32} /></a>
          <a href="vk.com"><img src="fgs16_vkontakte_1_4.svg" alt="tg" height={32} width={32}/></a>
          <p>Присоединяйтесь!</p>
        </div>
      </div>
      <div>
        <h1 className="header-title">
          Получите свой заказ
          <br />
          день в день!
        </h1>
      </div>
      <div>
        <input type="text" className="header-input" placeholder="Поиск по сайту..."/>
        <button>
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
