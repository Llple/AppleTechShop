import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setInputValue } from "../redux/slices/filterSlice";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Products } from "../redux/slices/itemsSlice";
import SearchProducts from "./FoundItems";
import { debounce } from "lodash";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector((state: RootState) => state.filter.inputValue);

  const [foundProduct, setFoundProduct] = React.useState<Products[]>();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>("");
  const [handleValue, setHandleValue] = React.useState<string>("");
  

  const handelInput = React.useCallback(
    debounce((str: string) => {
      setHandleValue(str);
    }, 250),
    []
  );

  React.useEffect(() => {
    if (handleValue && handleValue.trim() !== "") {
      (async () => {
        try {
          console.log("ЗАШЕЛ В БД СО СМЕНОЙ handleValue");
          const { data } = await axios.get(
            `https://679223c9cf994cc68048dbd6.mockapi.io/AppleTech?title=${handleValue}`
          );
          setFoundProduct(data);
          setError("");
        } catch (err) {
          const axiosError = err as AxiosError;
          if (axiosError.response && axiosError.response.status === 404) {
            setError("Товар не найден.");
          } else {
            setError("Ошибка при поиске.");
          }
          setFoundProduct([]);
        }
      })();
    } else {
      setFoundProduct([]);
    }
  }, [handleValue]);

  return (
    <div className="header container">
      <Link to="/">
        <img src="AppleBit.png" className="header__logo" alt="logo" />
      </Link>
      <div className="header__contacts">
        <h1 className="header__phone">+7 (987) 654-32-10</h1>
        <p>Часы работы: с 10:00 до 20:00</p>
        <div className="header__social-link">
          <a  href="https://telegram.org" target="_blank">
            <img
              src="telegram_logo.svg.webp"
              alt="telegram"
              height={32}
              width={32}
            />
          </a>
          <a href="https://vk.com" target="_blank">
            <img src="vk_logo.svg.webp" alt="vkontakte" height={32} width={32} />
          </a>
          <p>Присоединяйтесь!</p>
        </div>
      </div>
      <div>
        <h1 className="header__promo">
          Получите свой заказ
          <br />
          день в день!
        </h1>
      </div>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          className="header__search-input"
          placeholder="Поиск по сайту..."
          onChange={(e) => {
            dispatch(setInputValue(e.target.value));
            handelInput(e.target.value);
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div
          className={
            handleValue
              ? "header__search-animate-create header__search-results "
              : "header__search-results header__search-animate-none"
          }
        >
          {foundProduct?.map((item) => (
            <div
              className="header__search-item"
              key={item.id}
              onClick={() => {
                navigate(`/product/${item.id}`);
                dispatch(setInputValue(""));
                setFoundProduct([]);
              }}
            >
              <SearchProducts key={inputValue} {...item} />
            </div>
          ))}
        </div>

        <Link to="/cart">
          <button className="header__button-cart">Cart</button>
        </Link>
        <Link to="/login">
          <button className="header__button-cart">Login</button>
        </Link>
        
      </div>
    </div>
  );
};

export default React.memo(Header);
