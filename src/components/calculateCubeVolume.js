//sample function to calculate cube volume given side length
export const calculateCubeVolume = (sideLength) => {
    const s = parseFloat(sideLength);
    if (isNaN(s) || s <= 0) {
        return 'Invalid input';
    } else {
        const volume = Math.pow(s, 3);
        return volume.toFixed(2);
    }
};