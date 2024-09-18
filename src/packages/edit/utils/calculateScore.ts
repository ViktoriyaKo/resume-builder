const scoreWeights = {
  employment: 25,
  education: 10,
  summary: 15,
  skills: 15,
  jobTitle: 10,
  name: 10,
  lastName: 10,
  email: 5,
};

const calculateScore = (data: any) => {
  let totalScore = 0;

  Object.keys(scoreWeights).forEach((category) => {
    if (data[category] && typeof data[category] !== 'object') {
      totalScore += scoreWeights[category];
      console.log(category);
    }
  });
  console.log(totalScore);

  return totalScore;
};

export default calculateScore;
