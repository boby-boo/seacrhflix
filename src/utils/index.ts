type DefineColorStatus = (rate: number,
    elementClass?: string) => string

export const defineColorStatus: DefineColorStatus = (rate, elementClass = 'rate-') => {
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
