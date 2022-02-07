function calculate(age, weight) {
  console.log("Im in calc");
  if (age >= 5 && age <= 7) {
    if (weight >= 15 && weight <= 20) {
      return (res = 0);
    } else if (weight > 20) {
      return (res = 1);
    } else if (weight < 15) {
      return (res = -1);
    }
  } else if (age >= 8 && age <= 10) {
    if (weight >= 21 && weight <= 25) {
      return (res = 0);
    } else if (weight > 25) {
      return (res = 1);
    } else if (weight < 21) {
      return (res = -1);
    }
  } else if (age >= 11 && age <= 15) {
    if (weight >= 26 && weight <= 30) {
      return (res = 0);
    } else if (weight > 30) {
      return (res = 1);
    } else if (weight < 26) {
      return (res = -1);
    }
  } else if (age >= 16 && age <= 20) {
    if (weight >= 31 && weight <= 40) {
      return (res = 0);
    } else if (weight > 40) {
      return (res = 1);
    } else if (weight < 31) {
      return (res = -1);
    }
  } else {
    alert("Age out of range");
  }
}
function bound(age,res){
  var bound=0;
  if(res<1)
  {
    if (age >= 5 && age <= 7)
    {
      bound='15Kg';
    }
    else if(age >= 8 && age <= 10)
    {
      bound='21kg';
    }
    else if (age >= 11 && age <= 15)
    {
      bound='26Kg';
    }
    else//if (age >= 16 && age <= 20)
    {
      bound='31kg';
    }
  }
  if(res>0)
  {
    if (age >= 5 && age <= 7)
    {
      bound='20Kg';
    }
    if(age >= 8 && age <= 10)
    {
      bound='25kg';
    }
    if (age >= 11 && age <= 15)
    {
      bound='30Kg';
    }
    if (age >= 16 && age <= 20)
    {
      bound='40kg';
    }
  }
  console.log(bound);
  return bound;
}
function result(res, name, age,limit) {
  if (res == 0) {
    console.log(res);
    document.getElementById("output").innerHTML =
      "Hello " + name + "!!! Your weight is perfect.";
  } else if (res > 0) {
    document.getElementById("output").innerHTML =
      "Hello " +
      name +
      "!!! Your weight is greater than the recommened value of "+limit+" at an age of " +
      age;
  } else if (res < 0) {
    document.getElementById("output").innerHTML =
      "Hello " +
      name +
      "!!! Your weight is less than the recommened value of "+limit+" at an age of " +
      age;
  }
}

function fetchData() {
  console.log("Im in function");
  var name = document.getElementById("fname").value;
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var res,limit;

  //checking data range

  //perfoming operations
  res = calculate(age, weight);
  //calculating bound
  limit=bound(age,res);
  //displaying result
  result(res, name, age,limit);
}
