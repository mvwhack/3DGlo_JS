const validate = () => {

  const calcBlock = document.querySelector('.calc-block');
  const calcInput = calcBlock.querySelectorAll('input');
  const formEmail = document.querySelectorAll('.form-email');
  const formPhone = document.querySelectorAll('.form-phone');
  const formName = document.querySelectorAll('[name="user_name"]');
  const massege = document.querySelectorAll('[name="user_message"]');

  //Калькулятор
  calcInput.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '');
    });
  });

  //Проверка Email
  formEmail.forEach(email => {
    email.addEventListener('input', () => {
      email.value = email.value.replace(/[^\@\-\.\!\~\*\'\w]+/gi, '');
    });
  });

  //Проверка телефона
  formPhone.forEach(phone => {
    phone.addEventListener('input', () => {
      phone.value = phone.value.replace(/[^\(\)\-\d]+/gi, '');
    });
  });

  //Проверка имени
  formName.forEach(name => {
    name.addEventListener('input', () => {
      name.value = name.value.replace(/[^А-Яа-я\s\-]+/gi, '');
    });
  });

  //Проверка текста сообщения
  massege.forEach(text => {
    text.addEventListener('input', () => {
      text.value = text.value.replace(/[^А-Яа-я\s\-]+/gi, '');
    });
  });

};

export default validate;