let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "other",
  },
];

// Сурагч бүрд овог нэмж оруулах

//
// ];(
// 🌕🌕🌕🌕🌕🌕  Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих🌕🌕🌕🌕🌕🌕🌕

function countGender(students) {
  const obj = {};

  students.forEach((element) => {
    if (obj[element.gender]) {
      obj[element.gender]++;
    } else {
      obj[element.gender] = 1;
    }
  });

  return obj;
}

const genderCounts = countGender(students);
console.log(genderCounts);

// /🌕🌕🌕🌕🌕🌕/ Сурагчдын насны дунджийг олох🌕🌕🌕🌕🌕🌕🌕

function averageAge(srudants) {
  let sum = 0;
  for (i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  const averageAge = sum / students.length;
  return averageAge;
}
const result = averageAge(students);
console.log(result);

//🌕🌕🌕🌕🌕🌕 Ижилхэн настай сурагчдыг олж шинэ object дотор хийх🌕🌕🌕🌕🌕🌕🌕

function groupStudentsByAge(students) {
  const groupedStudents = {};
  for (const student of students) {
    const age = student.age;
    if (!groupedStudents[age]) {
      groupedStudents[age] = [];
    }
    groupedStudents[age].push(student);
  }
  return groupedStudents;
}
const groupedByAge = groupStudentsByAge(students);
console.log(groupedByAge);

//🌕🌕🌕🌕🌕🌕  Сурагч бүрд овог нэмж оруулах🌕🌕🌕🌕🌕🌕🌕

function addLastName(students) {
  const studentsWithLastName = students.map((student) => {
    const fullName = student.name + " " + student.lastname;
    return { ...student, lastname: "bataa" };
  });
  return studentsWithLastName;
}
const studentsWithLastName = addLastName(students);
console.log("Students with Last Name:", studentsWithLastName);
//   let maleCount = 0;
//   let femaleCount = 0;

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].gender === "male") {
//       maleCount++;
//     } else if (students[i].gender === "female") {
//       femaleCount++;
//     }
//   }
//   return {
//     male: maleCount,
//     female: femaleCount,
//   };
