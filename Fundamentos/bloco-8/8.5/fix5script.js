const getNationality = ({ firstName, nationality }) => {
  if (nationality === undefined) {
    const { nationality = 'Brazilian' } = person;
    return `${firstName} is ${nationality}`;
  } else {

    return `${firstName} is ${nationality}`;
  }
};

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const { nationality = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
 

