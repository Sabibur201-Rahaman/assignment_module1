const amount = 250;
let discount = 0;

switch (true) {
  case amount <= 50:
    break;
  case amount > 50 || amount <= 100:
    discount = 5;
    break;
  case amount > 100 ||amount <= 200:
    discount = 10;
    break;
    case amount ==200 ||amount>200:
    break;
    default:
        console.log('invalid discount')
}

const discountAmount = (amount * discount) / 100;
const actualAmount = amount - discountAmount;

console.log(`The actual amount after discount is $${actualAmount} discount is $${discount} discountAmount is $${discountAmount}`);

