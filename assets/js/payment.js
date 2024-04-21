 function generateRandomNumber() {
    return Math.floor(Math.random() * 1000); 
  }

  // Function to generate a unique ID
  function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9); 
  }

  function getCurrentDateTime() {
    return new Date().toISOString();
  }
  function generateRandomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let name = '';
    for (let i = 0; i < 5; i++) { 
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return name;
  }
  function generateAndStoreRandomNumbers(count) {
    const randomNumberData = [];

    for (let i = 0; i < count; i++) {
      const id = generateUniqueId();
      const number = generateRandomNumber();
      const date = getCurrentDateTime();
      const name = generateRandomName();


      const data = { id, number, date,name };
      randomNumberData.push(data);
    }

    localStorage.setItem('randomNumbers', JSON.stringify(randomNumberData));
    console.log('Random numbers generated and stored successfully.');
  }

  function checkInputValue(inputClass) {
    const inputValue = document.querySelector(inputClass).value;
    const randomNumbers = JSON.parse(localStorage.getItem('randomNumbers')) || [];

    for (const randomNumber of randomNumbers) {
      if (parseInt(inputValue) === randomNumber.number) {
        alert('Success! Input value matches a random number from Local Storage.');
        return;
      }
    }
    alert('No match found.');
  }
  function checkInputValue2(inputClass) {
    const inputValue = document.querySelector(inputClass).value;
    const randomNumbers = JSON.parse(localStorage.getItem('randomNumbers')) || [];

    for (const randomNumber of randomNumbers) {
      if (inputValue === randomNumber.date) {
        alert('Success! Input value matches a random number from Local Storage.');
        return;
      }
    }
    alert('No match found.');
  }
  function checkInputValue3(inputClass) {
    const inputValue = document.querySelector(inputClass).value;
    const randomNumbers = JSON.parse(localStorage.getItem('randomNumbers')) || [];

    for (const randomNumber of randomNumbers) {
      if (inputValue === randomNumber.name) {
        alert('Success! Input value matches a random number from Local Storage.');
        return;
      }
    }
    alert('No match found.');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const divCircleButton = document.querySelector('.divCircle');
    divCircleButton.addEventListener('click', function() {
      generateAndStoreRandomNumbers(10); 
    });

    const paymentInput = document.querySelector('.submitPayment');
    paymentInput.addEventListener('click', function() {
      checkInputValue('.payment1');
      checkInputValue2('.dateHere');
      checkInputValue3('.NamehereAs');
    });
  });
  const divCircleButton = document.querySelector('.divCircle');
  divCircleButton.addEventListener('click', function() {
    generateAndStoreRandomNumbers(10); 
  });

  const paymentInput = document.querySelector('.submitPayment');
  paymentInput.addEventListener('click', function() {
    const successFlags = {
      valueCheck: false,
      dateCheck: false,
      nameCheck: false
    };

    checkInputValue('.payment1');
    checkInputValue2('.dateHere');
    checkInputValue3('.NamehereAs');

    if (document.querySelector('.payment1').value !== '') {
      successFlags.valueCheck = true;
    }
    if (document.querySelector('.dateHere').value !== '') {
      successFlags.dateCheck = true;
    }
    if (document.querySelector('.NamehereAs').value !== '') {
      successFlags.nameCheck = true;
    }

    if (successFlags.valueCheck && successFlags.dateCheck && successFlags.nameCheck) {
let allTobeValueAnd=document.querySelectorAll(".allTobeValueAnd");
allTobeValueAnd.forEach(item=>{
    item.innerHTML="0";
})

    } else {
      alert('One or more checks failed. Please fill in all fields correctly.');
    }
  });