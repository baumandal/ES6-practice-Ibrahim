class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.academy = 'BUFT';
    }
}

const student1 = new student('192-032-811', 'Shahriar Emon');
const student2 = new student("192-033-811", 'Din Mohammad Ibrahim Kholilullah');

console.log(student1, student2);