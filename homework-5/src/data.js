export const compareText = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text.length > 15) {
        resolve("Пришёл ответ");
      } else {
        reject(new Error("Ошибка промиса"));
      }
    }, 1000);
  });
};
