const students = [
    {
        id : 22,
        name : "Anayet Ullah",
        institution : "Chittagong University",
        address : "Chittaong"
    },
    {
        id : 12,
        name : "Murshed Fahim",
        institution : "Dhaka University",
        address : "Dhaka"
    },
    {
        id : 32,
        name : "Joeeta Benarjee",
        institution : "Premier University",
        address : "Chittaong"
    }
];
const studentNames = [];
for (let i = 0; i < students.length; i++) {
    const elelment = students[i];
    const elelmentName = elelment.name;
    studentNames.push(elelmentName);
}
// console.log(studentNames);

// same thing we can easily solve by using map
const stdInstitution = students.map(s => s.institution);
console.log(stdInstitution);

const bigId = students.filter(x => x.id > 20);
console.log(bigId);