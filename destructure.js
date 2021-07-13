// const person = { Name: 'Abbul Kuddus', age: 24, job: 'weed seller', phone: '01245454356', gfName: 'Tunir ma', Address: 'Dhanmondi', friends: ['Akkas Ali', 'Jobbar er Bap', 'Yunus er Mama'] }

// const { phone, gfName, salary, job } = person;

// console.log(phone, gfName, salary, job);
// console.log(phone, gfName, salary, job);

// const mate = ['Emon', 'Masud', 'Mahi', 'Mehedi', 'Siam', 'Sinu vai'];

// const [first, ...other] = mate;

// console.log(other);

const complexObject = {
    name: 'Baaler Pola',
    info: {
        address: 'lal-bari',
        leader: 'Khankir Pola'
    }
};

const { leader } = complexObject.info
console.log(leader);