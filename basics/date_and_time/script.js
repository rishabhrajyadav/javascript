//1

const addDaysToDate = (date, days) => {
   let updatedDate = date.setDate(date.getDate() + days)
   updatedDate = new Date(updatedDate)
   return updatedDate.toLocaleDateString();
}


const date1 = new Date("2024-04-29");
const newDate = addDaysToDate(date1, 18);
console.log(newDate);


//2 
const getDaysDifference = (d1,d2) => {
    const oneDay = 24 * 60 * 60 *1000
    let diff = Math.abs(d1 - d2);
    return Math.round(diff / oneDay);
}
const date2 = new Date("2024-04-29");
const date3 = new Date("2024-05-29");
console.log(getDaysDifference(date2,date3));
