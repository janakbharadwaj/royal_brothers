import React from "react";
import styles from "./Home.module.css";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import { useSelector, useDispatch } from "react-redux";
import FleetCard from "./FleetCard";
import { getBikesHandler } from "../../Redux/Tarrif/Actions";
import HomeCarousel from "./HomeCarousel";
import { useHistory } from "react-router";

function Home() {
  const allBikes = useSelector((state) => state.tarrifReducer.data);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(getBikesHandler());
  }, []);

  const exploreHandler = () => {
    history.push("/search");
  };

  const { onSubmitHandler, onChangeHandler, info } = React.useContext(
    SelectionContext
  );
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  return (
    <div className={styles.Home}>
      <div className={styles.Home__header}>
        <div className={styles.Search}>
          <h1>Search your next ride</h1>
          <form onSubmit={onSubmitHandler}>
            <label>Pickup</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  value={pickupDate}
                  name="pickupDate"
                  type="date"
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="pickupTime"
                  value={pickupTime}
                  type="time"
                ></input>
              </div>
            </div>
            <label>DropOff</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropDate"
                  value={dropDate}
                  type="date"
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropTime"
                  value={dropTime}
                  type="time"
                ></input>
              </div>
            </div>
            <div className={styles.Search__element}>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <div className={styles.Home__services}>
        <div className={styles.Home__services__main}>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/ads_one-db70a8af7a98baaee8e83c4201f1f3187f6f9a86adadfda982e3683304cd6f0d.png"
              alt="sanitizer"
            ></img>
          </div>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/ads_two-74137d80a5e444d475385d2be95581028dbe9dd0c246bb53f7b56fea44723f13.png"
              alt="delivery"
            ></img>
          </div>
        </div>
        <div className={styles.Home__services__foot}>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png"
              alt="insurance"
            ></img>
            <span>Vehicle Insurance</span>
          </div>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png"
              alt="assistance"
            ></img>
            <span>24/7 Roadside Assistance</span>
          </div>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png"
              alt="maintenance"
            ></img>
            <span>Bike Maintenance</span>
          </div>
        </div>
      </div>
      <div className={styles.Home__rentals}>
        <div className={styles.Home__rentals__sub}>Introducing</div>
        <div className={styles.Home__rentals__main}>
          Royal Brothers <span>X</span>
        </div>
        <div className={styles.Home__rentals__desc}>
          <div></div>
          <div>
            <p>Now rent vehicles on monthly subscription (1-9 months)</p>
            <ul>
              <li>Pay per month</li>
              <li>Free home delivery</li>
              <li>Sanitized bikes</li>
              <li>Free maintenance</li>
            </ul>
            <button onClick={exploreHandler}>Explore</button>
          </div>
        </div>
        <div className={styles.Home__rentals__biker}>
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/rbx_bike-0a229b31c998adf63b64a9f60efb6e33d52aac58a2192ad196122625129c9fef.png"
            alt="biker"
          ></img>
        </div>
      </div>
      <div className={styles.Home__fleet}>
        <div className={styles.Home__fleet__head}>
          <h1>Our Fleet</h1>
          <div className={styles.Home__bar}></div>
        </div>
        <div className={styles.Home_fleet_cards}>
          {allBikes
            ?.filter((_, index) => index < 4)
            .map((item) => (
              <FleetCard key={item._id} {...item}></FleetCard>
            ))}
        </div>
      </div>
      <div className={styles.Home__believe}>
        <div className={styles.Home__fleet__head}>
          <h1>We believe in quality</h1>
          <div className={styles.Home__bar}></div>
        </div>
        <HomeCarousel></HomeCarousel>
      </div>
    </div>
  );
}

export default Home;
