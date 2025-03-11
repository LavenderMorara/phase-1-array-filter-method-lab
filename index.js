const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(arr,name){
    let filteredArray= arr.filter((driver)=>{return driver.toLowerCase()=== name.toLowerCase()});
    return filteredArray;
}
console.log(findMatching(drivers,'Bobby'))

function fuzzyMatch(arr,letter){
let filteredArray=arr.filter((driver)=>{return driver.startsWith(letter)})
return filteredArray
}
console.log(fuzzyMatch(drivers,'Sa'))

const Drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
//   function matchName(arr,n){
//     let filteredArray=arr.filter((driver)=>{driver.name===n})
//     return filteredArray
// }
function matchName(arr, n) {
    return arr.filter(driver => driver.name === n);
}

console.log(Drivers,'Sally')