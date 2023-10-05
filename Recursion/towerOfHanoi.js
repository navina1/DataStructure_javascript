function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
        console.log(`Moved disk 1 from ${sourceRod} to ${destinationRod}`);
        return
    }
    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
    console.log(`Moved disk ${n} from ${sourceRod} to ${destinationRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
}
const numberOfDisks = 3;
towerOfHanoi(numberOfDisks, 'A', 'B', 'C');