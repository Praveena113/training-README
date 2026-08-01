//1
let student = 
{
     name : "Praveena",
     age : 29,
     course : "JS",
}
//thirdchange
student.getDetails = function () 
{
    console.log ("Name :", this.name);
    console.log ("Age :", this.age);
    console.log ("Course :", this.course);
}
student.getDetails ();

//2
function Employee (name, company, experience)
{
    this.name = name;
    this.company = company;
    this.experience = experience;
}
Employee.prototype.showInfo = function ()
{
    console.log ("Name :", this.name);
    console.log ("Company :", this.company);
    console.log ("Experience :", this.experience);
}
let employee1 = new Employee ("Praveena", "MRC", 5);
let employee2 = new Employee ("Arvind", "Google", 8);

employee1.showInfo ();

//3
let fruits = ["Apple", "Banana"]
fruits.push ("Orange");
fruits.unshift ("Mango");
fruits.pop ();
fruits.splice (2,1 , "Grapes");
console.log (fruits);

//4
let nums = [5, 10, 15, 20, 25, 30]
let result = nums.filter ((num)=> num>=10)
console.log (result);
for (let num of result)
{
    console.log ("Print :", num)
}

//5
let companies = ["Google", "Amazon", "Microsoft"]
companies.forEach ((n) =>
{
console.log ("Company :", n);
});

//6
let colors = ["Red", "Blue", "Green", "Black"]
let [a, b, c, d] = colors;
console.log (a,d);

//7
let ages = [15, 18, 22, 14, 30]
let result = ages.filter ((age)=> age>=18)
console.log (result);

//8
let prices = [100, 200, 300]
let result = prices.map ((price)=> price+50)
console.log (result);

//9
let marks = [80, 90, 70, 60]
let result = marks.reduce ((total, mark)=> total + mark, 0)
console.log (result);

//10
let nums = [5, 10, 15, 20, 25, 30];
let filtered = nums.filter ((num)=> num%2 ===0)
let result = filtered.map ((num)=>num*2)
let sum = result.reduce ((total, num)=> total + num,0)
console.log (filtered);
console.log (result);
console.log (sum);

//11
let cities = ["Chennai", "Bnagalore", "Chennai", "Mumbai"]
let unique = new Set (cities)
console.log (unique);
unique.add ("Delhi");
unique.delete ("Mumbai");
console.log (unique.size);
console.log (unique);
let unique1 = [...unique]
console.log (unique1);

//
function Hospital (hospital_name, city, doctor_name, specialization, experience, patient_name, age, disease)
{
    this.hospital_name = hospital_name;
    this.city = city;

        this.doctor =
        {
            doctor_name : doctor_name,
            specialization : specialization,
            experience : experience,
        }
            this.patient = 
            {
                patient_name : patient_name,
                age : age,
                disease : disease,
            }
    Hospital.prototype.getDetails = function ()
    {
        console.log ("Hospital name :", this.hospital_name);
        console.log ("City :", this.city);
        console.log ("Doctor name :", this.doctor.doctor_name);
        console.log ("Specialization :", this.doctor.specialization);
        console.log ("Experience :", this.doctor.experience);
        console.log ("Patient name :", this.patient.patient_name);
        console.log ("Age :", this.patient.age);
        console.log ("Disease :", this.patient.disease);
    }
}
let hospital1 = new Hospital ("Apollo", "Chennai","Ravi", "cardiologist", 5, "Arun", 35, "Fever");
let hospital2 = new Hospital ("Manipal", "Bangalore","Nair", "orthology", 10,"Chandru", 40, "Cold");

hospital1.getDetails ();
hospital2.getDetails ();

console.log (delete hospital2.patient.disease);

for (let key in hospital1)
{
    console.log (key, hospital1 [key]);
}

let doubleage = (n)=>n*2;
console.log (doubleage (35));

let age = 70;
let status = age>=18 ? "Adult" : "Minor"
console.log (status);