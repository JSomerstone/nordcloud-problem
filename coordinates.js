/**
 * Task:
 *  Create a function that solves the most suitable (with most power) link station for a device at given point [x,y]
 */

// Points to tests
var points = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
];

//Find the best station (if any) for each point and printout the results
points.map(findBestStation).map(function (value) {
    if (!value.station) {
        console.log("Point [", value.point[0], ',', value.point[1], "]: No link station within reach")
    } else {
        console.log(
            "Point [", value.point[0], ',', value.point[1], "]: Best link station at [",
            value.station.coordinates[0], ',', value.station.coordinates[1], "] power: ", value.station.power.toFixed(2)
        );
    }
});

/**
 * Finds best link station for given coordinate point [x,y] from predefined stations
 * @param point
 */
function findBestStation(point) {
    var stations = [
        {coordinates: [0, 0], reach: 10, power: 0},
        {coordinates: [20, 20], reach: 5, power: 0},
        {coordinates: [10, 0], reach: 12, power: 0}
    ];

    var bestStation = stations.map(function (station) {
        station.power = getPower(
            getDistanceBetween(point, station.coordinates),
            station.reach
        );
        return station;
    }).filter(function (station) {
        return station.power > 0;
    }).sort(function (stationA, stationB) {
        return stationA.power > stationB.power;
    }).pop();

    return {
        point: point,
        station: bestStation
    };
}

/**
 * Calculate the distance between two-dimensional coordinates
 * @param array coordinateA [x,y]
 * @param array coordinateB [x,y]
 * @returns {number}
 */
function getDistanceBetween(coordinateA, coordinateB) {
    return Math.sqrt(
        Math.pow(Math.abs(coordinateA[0] - coordinateB[0]), 2)
        + Math.pow(Math.abs(coordinateA[1] - coordinateB[1]), 2)
    );
}

/**
 * Calculate the power of link station to given distance
 * @param distance to the link tower
 * @param reach of the link tower
 * @returns {number}
 */
function getPower(distance, reach) {
    return (distance > reach)
        ? 0
        : Math.pow((reach - distance), 2);
}
