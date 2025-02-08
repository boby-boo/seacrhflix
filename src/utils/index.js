export const defineColorStatus = (rate, elementClass = 'rate-') => {
    let currentRate = elementClass;

    if (rate <= 4) {
        currentRate += 'low';
    } else if (rate >= 5 && rate < 7) {
        currentRate += 'medium';
    } else {
        currentRate += 'high';
    }

    return currentRate;
};
