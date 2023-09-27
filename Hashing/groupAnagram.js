function groupAnagrams(strs) {
    let group = new Map();
    for (let i = 0; i < strs.length; i++){
        let sortedElement = strs[i].split('').sort().join('');
        if (group.has(sortedElement)) {
            let str = group.get(sortedElement);
            str.push(strs[i]);
            group.set(sortedElement, str);
        } else {
            group.set(sortedElement,[strs[i]])
        }
    }
    //return group;
    return Array.from(group.values())
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramGroups = groupAnagrams(strs);
console.log(anagramGroups);