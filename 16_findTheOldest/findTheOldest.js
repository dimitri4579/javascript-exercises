const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    let res = people.reduce((oldest, person) => {
        if ((person.yearOfDeath || currentYear) - person.yearOfBirth > (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) {
            return person;
        }
        return oldest;
    })

    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
