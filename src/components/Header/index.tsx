import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setInputValue } from "../../redux/slices/filterSlice";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Products } from "../../redux/slices/itemsSlice";
import SearchProducts from "../SearchProducts";
import { debounce } from "lodash";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue } = useSelector((state: RootState) => state.filter);
  const cleanInputValue = inputValue.replace(/\s+/g, " ").trim();
  const [foundProduct, setFoundProduct] = React.useState<Products[]>();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>(""); // Состояние для ошибки
  const [handleValue, setHandleValue] = React.useState<string>("");

  const handelInput = React.useCallback(
    debounce((str: string) => {
      setHandleValue(str);
    }, 500),
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
        <img src="logo_1.webp" className="header-logo" alt="logo" />
      </Link>
      <div>
        <h1 className="header-number">+7 (987) 654-32-10</h1>
        <p>Часы работы: с 10:00 до 20:00</p>
        <div className="header-ref">
          <a href="tg.com">
            <img src="fgs16_telegram.svg" alt="telegram" height={32} width={32} />
          </a>
          <a href="vk.com">
            <img
              src="fgs16_vkontakte_1_4.svg"
              alt="vkontakte"
              height={32}
              width={32}
            />
          </a>
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
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          className="header-input"
          placeholder="Поиск по сайту..."
          onChange={(e) => {
            dispatch(setInputValue(e.target.value));
            handelInput(e.target.value);
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Отображение ошибки */}
        <div className="search-results">
          {foundProduct?.map((item) => (
            <div
              className="wrapper-found-item"
              key={item.id}
              onClick={() => {
                navigate(`/product/${item.id}`);
                dispatch(setInputValue(""));
                setFoundProduct([]);
              }}
            >
              <SearchProducts {...item} />
            </div>
          ))}
        </div>

        <button>Cart</button>
      </div>
    </div>
  );
};

export default Header;
