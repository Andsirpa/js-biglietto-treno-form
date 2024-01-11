
const userNameInput = document.getElementById('user-name')
const userName = userNameInput.value
console.log(userName);

const distanceInput = document.getElementById('distance')
const distance = parseInt(distanceInput.value);
console.log(distance);

const userAgeInput = document.getElementById('user-age')
const userAge = userAgeInput.value
console.log(userAge);

const printButton = document.getElementById('print-button')

const priceKm = 0.21
const basePrice = distance * priceKm
console.log(basePrice);

let discount = 0

if (userAge == Minorenne) {
    discount = 20
}

if (userAge == Over65) {
    discount = 40
}

const discountPrice = basePrice * discount / 100

const finalPrice = basePrice - discountPrice

const priceText = '€' + finalPrice
console.log(priceText);