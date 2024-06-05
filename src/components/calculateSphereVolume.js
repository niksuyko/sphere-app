export const calculateSphereVolume = (radius) => {
    const r = parseFloat(radius);
    if (isNaN(r) || r <= 0) {
        return 'Invalid input';
    } else {
        const volume = (4/3) * Math.PI * Math.pow(r, 3);
        return volume.toFixed(2);
    }
};
