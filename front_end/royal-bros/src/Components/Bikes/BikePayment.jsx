import React from "react";
import styles from "./BikePayment.module.css";
import { useHistory, useParams } from "react-router-dom";
import TimeConversion from "./utils";
import { useSelector, useDispatch } from "react-redux";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import StripeCheckout from "react-stripe-checkout";
import { rentalsHandler } from "../../Redux/Transactions/Actions";
const BikePayment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { info } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const { bikePaymentId } = useParams();
  const bikesData = useSelector((state) => state.bikes.bikesData);
  const userData = useSelector((state) => state.authReducer.userData);
  const singleBike = bikesData.find((bike) => bike._id == bikePaymentId);
  const handlePayment = () => {
    var obj = {};
    obj.userId = userData._id;
    obj.bikeId = singleBike._id;
    obj.pickup_date = pickupDate;
    obj.pickup_time = pickupTime;
    obj.drop_date = dropDate;
    obj.drop_time = dropTime;
    obj.paid = total_amount(singleBike.hourly_rate);
    dispatch(rentalsHandler(obj));
    setTimeout(() => {
      history.push("/orders");
    }, 1000);
  };

  const no_of_hours = () => {
    return TimeConversion(pickupDate, dropDate) * 24;
  };
  const total_without_tax = (rate) => {
    return rate * no_of_hours();
  };
  const gst = (rate) => {
    return (total_without_tax(rate) * 0.14).toFixed(2);
  };
  const total_amount = (rate) => {
    return (total_without_tax(rate) + 2 * gst(rate)).toFixed(2);
  };
  return (
    <div className={styles.main__cont}>
      <div style={{ textAlign: "left" }}>
        <h1>Summary</h1>
        <div className={styles.main__cont__info}>
          <div className={styles.bike__image__name}>
            <div>
              <img src={singleBike.bike_image} alt="bike" />
              <p>{singleBike.bike_name}</p>
            </div>
          </div>
          <div className={styles.main__cont__infoMore}>
            <div className={styles.bikeItems__timings}>
              <div>
                <p>{pickupTime}</p>
                <p>{pickupDate}</p>
              </div>
              <div>to</div>
              <div>
                <p>{dropTime}</p>
                <p>{dropDate}</p>
              </div>
            </div>
            <hr />
            <div>
              Vishalpur (Nehru Bridge Corner)
              <br />
              B 429, Sakar-7 Ashram Rd, Vishalpur, Nehru Bridge Corner,
              <br />
              Ahmedabad, Gujarat 380009
            </div>
            <hr />
            <div className={styles.week__day__price}>
              <div>
                Weekday - {no_of_hours()} hrs * rupee{singleBike.hourly_rate}/hr
              </div>
              <div>{total_without_tax(singleBike.hourly_rate)}.0</div>
            </div>
            <hr />
            <div className={styles.week__day__priceTotal}>
              <div>Total</div>
              <div>{total_without_tax(singleBike.hourly_rate)}.0</div>
            </div>
            <div className={styles.week__day__priceTotal}>
              <div>Number of Helmet(?)</div>
              <select>
                {["1", "2"].map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.week__day__couponcode}>
              <input placeholder="Coupon code" />
              <button>APPLY</button>
            </div>
            <div className={styles.excess__charges}>
              <div>
                km limit(?)
                <br />
                Excess km charges (?)
              </div>
              <div>
                360km <br></br>4km
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <h1>checkout</h1>
        <div className={styles.checkout__part}>
          <div>
            <p>Boooking Fee</p>
            <p>CGST(14%)</p>
            <p>SGST(14%)</p>
            <p>Refundable Deposit</p>
          </div>
          <div>
            <p>{total_without_tax(singleBike.hourly_rate)}.0</p>
            <p>{gst(singleBike.hourly_rate)}</p>
            <p>{gst(singleBike.hourly_rate)}</p>
            <p>0.00</p>
          </div>
        </div>
        <div className={styles.total__payment}>
          <div>Total payable amount</div>
          <div>{total_amount(singleBike.hourly_rate)}</div>
        </div>
        <div className={styles.makepayment__button}>
          <StripeCheckout
            stripeKey="pk_test_51GuhVYJILFs8StGHjjzZha1VPsLlSzlDyahYHZksGhiDQZ94VIOGLzLOOsZoGwkm9nKgMM3qnVMg8ycODAV2FbWq00z0RR74IN"
            token={handlePayment}
            amount={total_amount(singleBike.hourly_rate) * 100}
            currency="INR"
          ></StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default BikePayment;
