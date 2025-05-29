      // var A = 'Kavikulguru Institute of Technology and Science';
      //   console.log(A);

      //   var B = '24';
      //   console.log(B);

      //   let C = 'Golden';
      //   console.log(C);

      //   C = 'Blue';
      //   console.log(C);

      //   {
      //       var D = 'Logo';
      //   }

      //   console.log(D);

      //   let arr = ['Apple', 'Mango', 'Garpes'];
      //   console.log(arr);

      //   arr.push('Litchi');
      //   console.log(arr);


// Assignment1: Arithmetic Operators

num1 = 10;
num2 = 25;

console.log('Addition of two numbers',num1+num2);

console.log('Subtraction of two numbers',num2-num1);

console.log('Multiplication of two numbers',num1*num2);

console.log('Division of two numbers',num1/num2);

console.log('Modulus of two numbers',num2%num1);

// Assignment2: Comparison Operators

Number1 = 80;
Number2 = 20;

console.log('is equal', (Number1===Number2));

console.log('is not equal', (Number1!==Number2));

console.log('Number1 is greater than Number2', (Number1 > Number2));

console.log('Number1 is less than Number2', (Number1 < Number2));

// Assignment3: Logical Operators

let Maths = 95;
let Science = 85;

console.log('Scolarship Eligibility:', ((Maths >= 90) && (Science >= 85)));

// Assignment4: Assignment Operators 

let x = 10;

console.log(x+5);

console.log(x*3);

console.log(x-10);

console.log(x/2);

console.log(x%3);

// Assignment5: Operator Precedence

let result = 10 + 3 * 5;
console.log(result);

let result1 = (10 + 3) * 5;
console.log(result1);

let result2 = (20 / 2 + 3);
console.log(result2);

let result3 = (20 / (2 + 3));
console.log(result3);

// Assignment6: combined Example

let length = 4;
let width = 8;

// Perimeter of Rectangle
perimeter = (2 * (length + width));

// Area of Rectangle
area = (length * width);

console.log('Perimeter of rectangle is:', (perimeter));

console.log('Area of rectangle is:', (area));

console.log('Is perimeter greater than area', (perimeter > area));

// Assignment7: Complex Logical and Comparison Operations

let age = 20;

let citizenship = 'Indian';

console.log('Eligible to vote:', (age >= 18 && citizenship == 'Indian'));

// Assignment8: BMI Calculator

let weight = 70;

let height = 1.75;

BMI = (weight / height);

console.log(BMI);

console.log('Underweight', (BMI < 18.5));

console.log('Normal Weight',(18.5 <= BMI && BMI < 24.9));

console.log('Overweight', (25 <= BMI && BMI < 29.9));

console.log('Obesity', (BMI >= 30));

// Assignment9: Even or Odd

let NUM1 = 25;
let NUM2 = 88;

console.log('Number is Even',(NUM1 % 2 == 0));
console.log('Number is Even',(NUM2 % 2 == 0));



// Assignment10: Shopping Discount
totalAmount = 200;

console.log(totalAmount);

if(totalAmount > 100)
{
    finalPrice = totalAmount - totalAmount*10/100
}else
{
    finalPrice = totalAmount
}

console.log(finalPrice);












