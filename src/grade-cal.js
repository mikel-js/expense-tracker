let studentScore = function (score, totalScore = 20) {
  let perc = score / totalScore * 100
  let bracket = ""

  if (perc >= 90 && perc <=100) {
    bracket = 'A'
  } else if (perc >= 80 && perc <=89) {
    bracket = 'B'
  } else if (perc >= 70 && perc <=79) {
    bracket = 'C'
  } else if (perc >= 60 && perc <=69) {
    bracket = 'D'
  }  else {
    bracket = 'F'
  }
  return `${score}/${totalScore}. You got a ${bracket} (${perc}%)`
}

console.log(studentScore(15))