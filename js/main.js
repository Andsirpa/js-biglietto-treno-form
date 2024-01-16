
const userNameInput = document.getElementById("user-name")
const distanceInput = document.getElementById('distance')
const userAgeInput = document.getElementById('user-age')
const printButton = document.getElementById('print-button')
const resultElement = document.getElementById('result-element')

const priceKm = 0.21
const basePrice = parseInt(distanceInput * priceKm)

let discount = 0


const discountPrice = (basePrice * discount) / 100

const finalPrice = basePrice - discountPrice

const priceText = finalPrice + '€'


printButton.addEventListener('click', function () {

    const Name = userNameInput.value
    const Age = userAgeInput.value

    if (Age == 'minorenne') {
        discount = 20
    }

    if (Age == 'Over-65') {
        discount = 40
    }



    resultElement.innerText = 'Il tuo biglietto costa' + priceText
})