import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../redux/slices/itemsSlice";

export default function ProductInfo() {
  const [countValue, setCountValue] = React.useState(0);
  const [productInfoItem, SetProductInfoItem] = React.useState<Products | null>(null);
  const { id } = useParams();
  const [storage, setStorage] = React.useState(0);


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

  if (!productInfoItem) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="content">
      <h1 className="pInfo-title">{productInfoItem.title}</h1>
      <div className="pInfo-box">
        <img
          src={productInfoItem.imageUrl}
          alt={productInfoItem.title}
          height={400}
          
        />
        <div>
          <div className="pInfo-pr-tlt">
            <h2 className="pInfo-price">{productInfoItem.price} USDT</h2>
            <h3>
              Товар <span>в наличии</span>
            </h3>
          </div>
          <div className="flex">
            <div className="flex pInfo-area-btn">
              <button
                className="pInfo-btn minus"
                onClick={() => setCountValue((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <input
                type="number"
                className="pInfo-count-input"
                value={countValue}
                onChange={(e) => setCountValue(Math.max(0, Number(e.target.value)))}
              />
              <button
                className="pInfo-btn plus"
                onClick={() => setCountValue((prev) => Math.min(prev + 1, 100))}
              >
                +
              </button>
            </div>
            {productInfoItem.storage.map((item,index ) => <p className={index==storage?'categories-item active' :'categories-item'}  onClick={()=>{setStorage(index)}}>{item} гб.</p>)}
            <button>Добавить в корзину</button>

          </div>
        </div>
      </div>
    </div>
  );
}
