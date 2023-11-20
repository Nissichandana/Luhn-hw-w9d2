  import { useState, useEffect } from 'react';

const validCard = (cardNumber) => {
  const digits = cardNumber.toString().split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  const sum = digits.reduce((acc, num) => acc + num, 0);

  return sum % 10 === 0;
};

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (cardNumber.length === 0) {
      setIsValid(null); // Reset validation state if the card number is empty
      return;
    }

    const isValidCard = validCard(cardNumber);
    setIsValid(isValidCard);
  }, [cardNumber]);

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(input);
  };

  return (
    <div>
      <label>Enter Credit Card Number:</label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      {isValid === true && <p>Card is valid!</p>}
      {isValid === false && <p>Card is not valid!</p>}
    </div>
  );
};

export default CreditCardForm;

  

