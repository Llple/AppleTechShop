import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCartProducts } from "../redux/slices/cartSlice";

export default function ProductInfo() {
  const [countValue, setCountValue] = React.useState(0);
  const [productInfoItem, SetProductInfoItem] = React.useState<Products | null>(null);
  const { id } = useParams();
  const [storage, setStorage] = React.useState(1);
  const dispatch = useDispatch<AppDispatch>()
  const cartProducts = useSelector((state : RootState) => state.cart.cartProducts )
  console.log()
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Products[]>(
          `https://679223c9cf994cc68048dbd6.mockapi.io/AppleTech?id=${id}`
        );
        SetProductInfoItem(data[0] || null);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(countValue)
  if (!productInfoItem) {
    return <p>Загрузка...</p>;
  }
  const keyForStock = Number(productInfoItem.storage[storage])
  const maxStock = Number(productInfoItem.stock[keyForStock])
  return (
    <main className="item-info">
      
      <div className="item-info__box items-center">
        <div className="items-center text-center">
          <h1 className="font-bold text-white pb-2 text-xl">{productInfoItem.title}</h1>
          <img
          src={productInfoItem.imageUrl}
          alt={productInfoItem.title}
          className="h-64"
          />
          
        </div>
        <div>
          <div className="flex">
            <h2 className="item-info__price text-green-500 font-bold text-xl">{productInfoItem.price} <span text-green-500>USDT</span></h2>
            <h3>
              Товар <span>в наличии</span>
            </h3>
          </div>
          <div className="flex">
            <div className="flex item-info__buttons">
              <button
                className="item-info__buttons-minus"
                onClick={() => setCountValue((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <input
                type="number"
                className="item-info__count"
                value={countValue}
                onChange={(e) => setCountValue(Math.max(0, Number(e.target.value)))}
              />
              <button
                className="item-info__buttons-plus"
                onClick={() => setCountValue((prev) => Math.min(prev + 1, maxStock))}
              >
                +
              </button>
            </div>
            {productInfoItem.storage.map((item,index ) => <p className={index==storage?'item-info__storage-block--active' :'item-info__storage-block'}  onClick={()=>{setStorage(index)
              setCountValue(0)
            }}>{item} гб.</p>)}
            <button onClick={()=>{
              dispatch(setCartProducts({id: id!,
                imageUrl: productInfoItem.imageUrl,
                title: productInfoItem.title,
                storage: productInfoItem.storage[storage],
                price: productInfoItem.price,
                count:countValue}))
            }}>Добавить в корзину</button>

          </div>
        </div>
      </div>
    </main>
  );
}
