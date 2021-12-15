import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);

  const renderList = products.map((product) => {
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
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="ui card">
              <div className="image">{/*<img src={image} title={car} />*/}</div>
              <div className="content">
                <div className="header">{car}</div>
                <ul>
                  <li className="meta">Model: {car_model}</li>
                  <li className="meta">Color: {car_color}</li>
                  <li className="meta">Model Year: {car_model_year}</li>
                  <li className="meta price">Price: {price}</li>
                  <li className="meta">
                    Availability: {availability ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
