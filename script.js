/* 
Challenge: The program will determine the actual and ideal calories you consumed last week. It will return a message based on if you ate too much or too little.
*/

function inputCaloriesByDay(day) {
  switch (day) {
    case "Monday":
      return 1500;
      break;

    case "Tuesday":
      return 3650;
      break;

    case "Wednesday":
      return 500;
      break;

    case "Thursday":
      return 2000;
      break;

    case "Friday":
      return 1700;
      break;

    case "Saturday":
      return 3500;
      break;

    case "Sunday":
      return 800;
      break;

    default:
      calorieIntake = "Please choose a valid day";
  }
}

// console.log(inputCaloriesByDay("Friday")); 1700

//total calories consumed
function getTotalCalories() {
  return (
    inputCaloriesByDay("Monday") +
    inputCaloriesByDay("Tuesday") +
    inputCaloriesByDay("Wednesday") +
    inputCaloriesByDay("Thursday") +
    inputCaloriesByDay("Friday") +
    inputCaloriesByDay("Saturday") +
    inputCaloriesByDay("Sunday")
  );
}

//ideal calories

function getIdealCalories() {
  var idealDailyCalories = 1200;
  return idealDailyCalories * 7; //by 7 to get the total calories you prefer per week
}

// console.log("get total calories ", getTotalCalories());
// console.log(" get ideal cals ", getIdealCalories());

function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();

  if (actualCalories === idealCalories) {
    console.log("You ate just the right amound of food!");
  } else if (actualCalories > idealCalories) {
    console.log("Time to head to the gym");
  } else {
    console.log("Time for seconds");
  }
}

calculateHealthPlan();
