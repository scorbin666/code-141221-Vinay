import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    id,
    price,
    car,
    car_model,
    car_model_year,
    car_color,
    car_vin,
    availability,
  } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://myfakeapi.com/api/cars/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data.Car));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui segment">
      {Object.keys(product).length == 0 ? (
        <div>
          <br />
          <br />
          <br />
          ...Loading
        </div>
      ) : (
        <div className="ui container">
          <br />
          <br />
          <br />
          <div className="ui">
            <div className="ui card">
              <div className="content">
                <h1>{car}</h1>
                <h2 className="ui brown bloack header">Model: {car_model}</h2>
                <h3 className="ui teal tag label">Price: {price}</h3>
                <ul>
                  <li className="meta">Color: {car_color}</li>
                  <li className="meta">Model Year: {car_model_year}</li>

                  <li className="meta">Vin: {car_vin}</li>
                  <li className="meta">
                    Availability: {availability ? "Yes" : "No"}
                  </li>
                </ul>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
