export const dataProcessingAboutSalary = (f, s) => {
  return f+s;
};

export const calculateCashback = (isCashback, sum, cb) => {

  let a = sum;
  let b = parseFloat(cb)/100;

  if(String(isCashback).toLowerCase()=='true'){
    a = sum;
    b = parseFloat(cb) / 100;
  } else {
    b=0;
  }
  return (a*b).toFixed(2);

};

export const getHolidaysNotifications = (f, s) => {
  let phrase = f.toLowerCase();
  if (phrase == 'happy holidays' || phrase == 'marry christmas' || phrase == 'happy birthday'){
    return `Поздравление ${f} должно быть отправлено ${s} раз`
  }
};

export const getHolidayPrizes = (f, s, t) => {

  let date_now = new Date();
  let date_user = new Date(s);

  if (date_now.getDate() == date_user.getDate() && date_now.getMonth()==date_user.getMonth()){

    let day = date_user.getDate();
    let month = date_user.getMonth() + 1;

    let sum = Math.ceil((day*month)/10)*10 + (+t*0.1);

    return `У ${f} сегодня праздник, его премия составляет ${sum}`;

  }

};
