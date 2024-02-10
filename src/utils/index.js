
export const formatPrice = (price, currency = "INR") => {
  switch (currency) {
    case "INR":
      return "₹ ".concat(price);
    default:
      return "₹ ".concat(price);
  }
}