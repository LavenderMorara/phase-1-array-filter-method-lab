const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name){
let filterArray=array.filter(driver => driver.toLowerCase() === name.toLowerCase());
return filterArray
}
console.log(findMatching(drivers,'Bobby'))
console.log(findMatching(drivers,'Sammy'))
console.log(findMatching(drivers,'Benda'))

function fuzzyMatch(array, letter){
    let filterArray=array.filter(driver=>driver.startsWith(letter))
    return filterArray
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
function matchName(array,name){
    let filterArray=array.filter(driver=>driver.name===name) //driver.name ensures only the element with the given name property is returned
    return filterArray 
}
console.log(matchName(Drivers,'Bobby'))