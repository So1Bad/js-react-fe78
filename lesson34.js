const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   geography: {
      students: 60,
      teachers: 2
   },
   chemistry: {
      students: 100,
      teachers: 3
   }
}
const subjectsString = Object.keys(subjects).join(', ')
console.log(subjectsString)
const subjectsTotal = Object.values(subjects).reduce((acc, value) => {
   acc.students += value.students;
   acc.teachers += value.teachers;
   return acc
}, {
   students: 0, teachers: 0
})
console.log(`Общее количество студентов: ${subjectsTotal.students} Общее количество учителей: ${subjectsTotal.teachers}`);
console.log(`Среднее количество студентов: ${subjectsTotal.students / Object.values(subjects).length}`)

const subjectsArr = Object.entries(subjects).map(([value, data]) => ({
   name: value,
   ...data
}));
console.log(subjectsArr)
const sortedSubjects = subjectsArr.toSorted((min, max) => max.teachers - min.teachers);
console.log(sortedSubjects)