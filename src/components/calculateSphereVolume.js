//calculate volume of sphere
export const calculateSphereVolume = (radius) => {
    //radius
    const r = parseFloat(radius);
    //if input is NaN or <= 0 dont calculate
    if (isNaN(r) || r <= 0) {
        return 'Invalid input';
    } else {
        //the math!
        const volume = (4/3) * Math.PI * Math.pow(r, 3);
        return volume.toFixed(2);
    }
};
