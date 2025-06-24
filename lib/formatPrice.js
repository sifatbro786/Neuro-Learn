export const formatPrice = (price) => {
    const formattedPrice = Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return formattedPrice;
};
