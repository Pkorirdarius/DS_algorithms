function findTownChief(n, trust) {
    // trustCounts is the number of people that person i trusts
    let trustCounts = new Array(n + 1).fill(0);
    // trustedByCounts is the number of people that trust person i
    let trustedByCounts = new Array(n + 1).fill(0);

    for (let [a, b] of trust) {
        trustCounts[a]++;
        trustedByCounts[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === 0 && trustedByCounts[i] === n - 1) {
            // town chief must be trusted by all other n - 1 people
            return i;
        }
    }

    return -1; // No town chief found
}

// Example usage:
const n = 3;
const trust = [[1, 3], [2, 3]];
console.log(findTownChief(n, trust)); 