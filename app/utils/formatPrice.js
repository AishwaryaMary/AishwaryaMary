const formatPrice = (price) => {
  const validPrice = Number(price);
  if (isNaN(validPrice)) return "$0.00";
  return `$${validPrice?.toFixed(2)}`;
};

export default formatPrice;
