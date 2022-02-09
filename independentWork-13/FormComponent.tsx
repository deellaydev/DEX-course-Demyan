
export const FormCompomemt = () => {
  const submit = (e: any) => {
    alert(e.target.password?.value);
  };

  return (
    <>
      {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
   По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
      <form onSubmit={submit}>
        
        <fieldset>
          <legend>Подформа 1</legend>
          
          <label>Скрытый</label>
          <input hidden/>
          
          <label for='password'>Пароль</label>
          <input id='password' type='password' required/>
          
          <label for='readonly'>Чтение</label>
          <input id='readonly' readonly value="something"/>
          
          <label>Радио кнопки</label>
          <div>
            <input type='radio' name='form1' value='testBtn1'/> testBtn1
            <input type='radio' name='form1' value='testBtn2'/> testBtn2
            <input type='radio' name='form1' value='testBtn3'/> testBtn3
            <input type='radio' name='form1' value='testBtn4'/> testBtn4
          </div>
          
        </fieldset>
          
        <fieldset>
          <legend>Подформа 2</legend>
          
          <label>Не активное поле</label>
          <input disabled/>
          
          <label for='number'>Число</label>
          <input id='number' type='number' max='100' min='1'/>
          
          <label for='maxlength'>Поле с ограниченной длинной</label>
          <input id='maxlength' maxlength='9' minlength='3'/>
          
          <label for='email'>Email с множеством вводов</label>
          <input id='email' type='email' multiple/>
          
          <label for='help'>Поле с подсказкой</label>
          <input id='help' placeholder='Подсказка'/>
        </fieldset>
        
        <fieldset>
          <legend>Подформа 3</legend>
          
          <label for='date'>Дата</label>
          <input id='date' type='date'/>
          
          <label for='tel'>Телефон</label>
          <input id='tel' type='tel'/>
          
          <label for='file'>Загрузка файла</label>
          <input id='file' type='file'/>
          
          <label>Чекбоксы</label>
          <div>
            <input type="checkbox" id="form3" name="form3"/> Условие 1
            <input type="checkbox" id="form3" name="form3"/> Условие 2
            <input type="checkbox" id="form3" name="form3"/> Условие 3
          </div>
          
        </fieldset>
        
        <fieldset disabled>
          <legend >Подформа 4</legend>
          
          <label>Скрытый</label>
          <input hidden/>
          
          <label for='password4'>Пароль</label>
          <input id='password4' type='password' required/>
          
          <label for='readonly4'>Чтение</label>
          <input id='readonly4' readonly value="something"/>
          
          <label>Радио кнопки</label>
          <div>
            <input type='radio' name='form1' value='testBtn1'/> testBtn1
            <input type='radio' name='form1' value='testBtn2'/> testBtn2
            <input type='radio' name='form1' value='testBtn3'/> testBtn3
            <input type='radio' name='form1' value='testBtn4'/> testBtn4
          </div>
          
        </fieldset>
        
        <fieldset>
          <legend>Подформа 5</legend>
          
          <label>Селект</label>
          <select>
            <option value='Значение 1'>Значение 1</option>
            <option value='Значение 2'>Значение 2</option>
            <option value='Значение 3'>Значение 3</option>
          </select>
          
          <label>Мульти селект</label>
          <select multiple>
            <option value='Значение 1'>Значение 1</option>
            <option value='Значение 2'>Значение 2</option>
            <option value='Значение 3'>Значение 3</option>
          </select>
          
          <label>TextArea</label>
          <textarea style={{resize: 'none'}} maxlength='10' minlength='3'/>
          
        </fieldset>
        
        
        <input type='submit' value='Отправить'/>
        <input type='reset' value='Сбросить'/>
      </form>
            
      {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

      {/* 3 */}
      {/* 1 группа : скрытое поле, обязательное поле пароля,
       текстовое поля(только для чтения), группа из 3 радиобатаннов */}
      {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
       текстовое поля(с ограничением длины от 3 до 9 символов), 
       поле email с множественным вводом, текстове поле c подсказкой */}
      {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю, 
       группа из 3 checkbox */}
      {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}
    </>
  );
};
