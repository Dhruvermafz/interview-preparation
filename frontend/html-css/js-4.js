// write a js program to get the current date. expected output: mm-dd--yyyy, mm/dd/yyyy , dd-mm-yyyy, dd/mm/yyyy

const formateDate = (date = new Date()) => {
  const days = date.getDay() + 1;
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

console.log(formateDate());
