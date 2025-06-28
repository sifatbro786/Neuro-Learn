export const formatPrice = (price) => {
    const formattedPrice = Intl.NumberFormat("bn-BD", {
        style: "currency",
        currency: "BDT",
    }).format(price);

    return formattedPrice;
};
