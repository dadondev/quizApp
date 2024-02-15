import { useState } from "react";

const State = () => {
  const [value, setValue] = useState(null);
  const update = (e, v) => {
    setValue(e);
  };
  return { value, update };
};
export default State;
