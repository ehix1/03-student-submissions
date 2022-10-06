"use strict";
//submissions is an array of objects

//1.
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
console.log(submissions);
//2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if ((newScore) => 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};
addSubmission(submissions, "Erica", 90, "2022-10-05");
console.log(submissions);

//3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(array, index);
};
// deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

//4.
const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (foundIndex !== -1) {
    array.splice(foundIndex, 1);
  } else {
    console.log(`${name} not found`);
  }
  array.splice(foundIndex);
};
// deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

//5. (no array method needed)
const editSubmission = (array, index, score) => {};
if (`${score}` >= 60) {
  passed === true;
} else {
  passed === false;
}
console.log(submissions, 1, 90);

//6.
const findSubmissionsbyName = (array, name) => {
  const foundName = array.find((submission) => {
    return submission.name;
  });
  if (foundName) {
    return foundName;
  } else {
    return `No student found by this ${name}`;
  }
};
console.log(findSubmissionsbyName(submissions, "Harvey"));

// //7.
const findLowestScore = (array) => {
  let lowestScore = 0;
  array.forEach((submission) => {});
};

//8.
let sum = 0;
const findAverageScore = (array) => {
  for (const score of array) {
    sum += score;
    const avg = sum / array.length;
  }
};
console.log(findAverageScore(submissions));

//9.
const filterPassing = (array) => {};
  return passed.filter(()=> {
    return array.passed === true;
  })
console.log(filterPassing(submissions);)
//10.
const filter90AndAbove = array.filter(score) => {
  return score >= 90;
};
console.log(filter90AndAbove(score);)