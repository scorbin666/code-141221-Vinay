import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../redux/reducers/productReducer";
import ProductComponent from "./productComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://myfakeapi.com/api/cars/")
      .catch((error) => {
        console.log("Error", error);
      });
    //console.log("Response: ", response);

    dispatch(setProducts(response.data.cars));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  return (
    <div className="ui grid container segment">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
