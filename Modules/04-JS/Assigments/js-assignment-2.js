/*
Calculate the age based on input date
The age will only +1 if the date today is after birthday*/
function calculateAge(date) {
    const [currentDay, currentMonth, currentYear] = [29,4,2022]
    const dateArray = date.split("/")
    const [birthDay, birthMonth, birthYear] = [dateArray[0], dateArray[1], dateArray[2]]
    if(currentMonth> birthMonth){
        if(currentDay > birthDay){
            return currentYear - birthYear
        }
    }
    else{
        return currentYear - birthYear - 1
    }
} 
console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)