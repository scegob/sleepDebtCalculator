// sleep debt calculator

const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8
    } else if (day === 'tuesday') {
      return 6
    } else if (day === 'wednesday') {
      return 7
    } else if (day === 'thursday') {
      return 7
    } else if (day === 'friday') {
      return 6
    } else if (day === 'saturday') {
      return 5
    } else if (day === 'sunday') {
      return 8
    } else {
      return 'Invalid day of the week';
    }
  }
  
  // adds all the actual sleep hours together
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  // adds ideal number of hours you should get
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  // function to compare the different conditions between actual and ideal sleep hours
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  // checks to see if they are equal and prints a response
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) { // sees if actual sleep is greater than ideal sleep and prints a response
      console.log("User got more sleep than needed");
    } else { // sees if actual sleep is less than ideal sleep and prints a response
      console.log('User should get some rest');
    }
  
    if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
    }
  
  }
  // why does my code show undefine when in console.log(calculateSleepDebt());
  calculateSleepDebt();
  // does not show now since the function is not inside a console.log