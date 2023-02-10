const priceFormat = (price) => {
  if (price[0] === "$") {
    return Number(price.replace(/[^0-9.]+/g, ""));
  } else {
    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return dollarUS.format(price);
  }
};

export default priceFormat;
