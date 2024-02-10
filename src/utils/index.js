import { toast } from "react-toastify";

export const formatPrice = (price, currency = "INR") => {
  switch (currency) {
    case "INR":
      return "₹ ".concat(price);
    default:
      return "₹ ".concat(price);
  }
}

export const handleToastError = (e, options = {}) => {
  toast.error(e?.message, {
    //To prevent multiple same message errors
    toastId: e?.message,
    ...options
  })
}