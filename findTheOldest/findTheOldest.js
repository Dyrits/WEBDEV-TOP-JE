let findTheOldest = function(array) {
  return array.sort((objectOne, objectTwo) => {
    if(!objectOne.yearOfDeath) {objectOne.yearOfDeath = (new Date).getFullYear(); }
    if(!objectTwo.yearOfDeath) {objectTwo.yearOfDeath = (new Date).getFullYear(); }
    return (objectTwo.yearOfDeath - objectTwo.yearOfBirth) - (objectOne.yearOfDeath - objectOne.yearOfBirth);
  })[0]
}

module.exports = findTheOldest