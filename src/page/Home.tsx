import React from "react";
import Categories from "../components/Categories";
import { fetchTech } from "../redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Sort from "../components/Sort";
import ItemsBlock from "../components/ItemsBlock";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector((state: RootState) => state.filter.category);
  const sortBy = useSelector((state: RootState) => state.filter.sortBy);
  const sorting = ["", "title", "rating"];
  const SortCategory = sorting[sortBy];

  console.log("HOME");

  React.useEffect(() => {
    dispatch(fetchTech({ category, SortCategory }));
  }, [category, SortCategory]);
  return (
    <div className=" container">
      <div className="wrapper__categories-sort flex ">
        <Categories />
        <Sort />
      </div>
      <ItemsBlock />
    </div>
  );
};

export default React.memo(Home);
