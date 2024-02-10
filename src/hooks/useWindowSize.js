import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';
import constants from "../utils/constants";
const noop = f => f;

const useWindowSize = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", throttle(() => {
      setWidth(window.innerWidth);
    }, 300, { leading: true }));
    return () => window.removeEventListener("resize", noop);
  }, []);

  return {
    isMobile: width <= constants.breakpoints.sm
  };
}

export default useWindowSize