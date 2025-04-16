import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setSortBy } from "../redux/slices/filterSlice";

const Sort =() => {
  const dispatch = useDispatch<AppDispatch>()
  const sortСhoice = ["умолчанию", "алфавиту", "популярности"];
  const sortBy = useSelector((state:RootState) => state.filter.sortBy)
  const popup = React.useRef<HTMLDivElement | null>(null);
  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(popup.current && !event.composedPath().includes(popup.current)){
        setClicked(false)
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
 
  
  return (
    <>
      <div ref={popup} onClick={()=>{setClicked(prev=>!prev)}} className="sort">
        <p className="sort__label ">
          Сортировать по:{" "}
          <span className="sort__select">{sortСhoice[sortBy]}</span>
        </p>
        {clicked?<div className="sort__popup">
            {sortСhoice.map((item,index)=><li className="sort__popup-item" onClick={()=>{
              dispatch(setSortBy(index))
            }}>{item}</li>)}
        </div>: null}
      </div>
      
    </>
  );
}


export default React.memo(Sort)
