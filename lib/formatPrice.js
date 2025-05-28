export const formatPrice = (price) => {
    const formattedPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return formattedPrice;
};
