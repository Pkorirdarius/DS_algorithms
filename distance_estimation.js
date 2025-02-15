function minRefuelStops(target, startFuel, stations) {
    let maxHeap = [];
    let fuel = startFuel;
    let stops = 0;
    let i = 0;
// The while loop determines the number of stops required to reach the target distance.
// The inner while loop adds the fuel from the stations that are reachable from the current fuel.
// The if condition checks if there are no stations available to refuel, and returns Infinity.
// The fuel is refueled with the largest available fuel from the maxHeap.
// The stops are incremented and the loop continues until the target distance is reached.
    if (target === Infinity){
        return Infinity;
    } else {
        while (fuel < target) {
            while (i < stations.length && stations[i][0] <= fuel) {
                maxHeap.push(stations[i][1]);
                maxHeap.sort((a, b) => b - a); // Sort in descending order
                i++;
            }

            if (maxHeap.length === 0) 
                return Infinity;

            fuel += maxHeap.shift(); // Refuel with the largest available fuel
            stops++;
        }
    }
    return stops;
}

// usage:
const target = 500; // Distance to destination
const startFuel = 0; // Initial fuel
const stations = [[0, 200], [100, 100], [200, 100], [300, 100], [400, 100]]; // [distance, fuel]
// calling the function
console.log(minRefuelStops(target, startFuel, stations)); // Output: 3
// there are 4 assumptions made in the code:
// 1. The target distance is not Infinity.
// 2. The fuel is not negative.
// 3. The stations are sorted in ascending order of distance.
// 4. The max_distance between the stations is the maximum fuel distance coverable.