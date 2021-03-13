import moment from "moment";
import React from "react";
import { useHistory } from "react-router-dom";
export const SelectionContext = React.createContext();

const initState = {
  pickupDate: "",
  pickupTime: "",
  dropDate: "",
  dropTime: "",
};

const selectedInit = {
  _id: "",
  bike_name: "",
  bike_image: "",
  hourly_rate: "",
  kilometer_limit: "",
  locationId: "",
};

function SelectionContextProvider({ children }) {
  const [info, setInfo] = React.useState(initState);
  const [selectedBike, setSelectedBike] = React.useState(selectedInit);
  const history = useHistory();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/search");
    // history.push("/partnerWithUs");
  };

  const selectedBikeHandler = (payload) => {
    setSelectedBike({ ...payload });
  };

  const value = {
    info,
    onChangeHandler,
    onSubmitHandler,
    selectedBikeHandler,
    selectedBike,
    setInfo,
  };
  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export default SelectionContextProvider;
