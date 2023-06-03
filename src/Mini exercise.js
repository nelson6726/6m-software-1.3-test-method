const grades = [100, 75, 68, 95, 43];

for (let i = 0; i < grades.length; i++) {
  const grade = grades[i];
  let result;

  if (grade > 75) {
    result = 'Pass';
  } else {
    result = 'Fail';
  }

  console.log(`Your grade of ${grade} is ${result}.`);
}
