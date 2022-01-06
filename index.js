var slidePage = document.querySelector('.slidepage')
var nextFirst = document.querySelector('.next-1')
var nextSec = document.querySelector('.next-2')
var nextThird = document.querySelector('.next-3')
var prevSec = document.querySelector('.prev-2')
var prevThird = document.querySelector('.prev-3')
var prevFourth = document.querySelector('.prev-4')
var number = document.querySelectorAll('.number')
var bullet = document.querySelectorAll('.bullet')
var text = document.querySelectorAll('.step p')
var submit = document.querySelector('.submit-btn')

var firstName = document.querySelector('.firstname')
var nameError = document.querySelector('.name1')
var email = document.querySelector('.email')
var emailError = document.querySelector('.emaile')
var phone = document.querySelector('.phone')
var phoneError = document.querySelector('.phonee')
var birth = document.querySelector('.birth')
var birthError = document.querySelector('.birthe')
var user = document.querySelector('.user')
var userError = document.querySelector('.usere')
var pass = document.querySelector('.pass')
var passError = document.querySelector('.passe')

var current = 1;
nextFirst.addEventListener('click', function() {
    var patternName = /[A-Za-z]/.test(firstName.value)
    if (patternName) {
        nameError.style.visibility = 'hidden'
        slidePage.style.marginLeft = "-100%"
        text[current - 1].classList.add('text')
        bullet[current - 1].classList.add('text')
        number[current - 1].classList.add('violet')
        current +=1
    }
    else {
        nameError.style.visibility = 'visible'
    }
})

nextSec.addEventListener('click', function() {
    var patternEmail = /[\w]+[@]+[\w]+[\w]\.[\w]+[\w]/.test(email.value)
    var patternPhone = /^(\()?\d{2}(\))?(|\s)?\d{3}(|\s)\d{7}$/.test(phone.value)
    if (patternEmail && patternPhone) {
        emailError.style.visibility = 'hidden'
        phoneError.style.visibility= 'hidden'
        slidePage.style.marginLeft = "-200%"
        text[current - 1].classList.add('text')
        bullet[current - 1].classList.add('text')
        number[current - 1].classList.add('violet')
        current +=1
    } else if (patternEmail) {
        emailError.style.visibility = 'hidden'
        phoneError.style.visibility= 'visible'
    } else if (patternPhone) {
        emailError.style.visibility = 'visible'
        phoneError.style.visibility= 'hidden'
    } else {
        emailError.style.visibility = 'visible'
        phoneError.style.visibility= 'visible'
    }
})
nextThird.addEventListener('click', function() {
    var patternBirth = /^(\()?\d{4}(\))?(-|\s)?\d{2}(-|\s)\d{2}$/.test(birth.value)
    if (patternBirth) {
        birthError.style.visibility = 'hidden'
        slidePage.style.marginLeft = "-300%"
        text[current - 1].classList.add('text')
        bullet[current - 1].classList.add('text')
        number[current - 1].classList.add('violet')
        current +=1
    } else {
        birthError.style.visibility = 'visible'
    }
})
prevSec.addEventListener('click', function() {
    slidePage.style.marginLeft = '0%'
    text[current - 2].classList.remove('text')
    bullet[current - 2].classList.remove('text')
    number[current - 2].classList.remove('violet')
    current -=1
})
prevThird.addEventListener('click', function() {
    slidePage.style.marginLeft = '-100%'
    text[current - 2].classList.remove('text')
    bullet[current - 2].classList.remove('text')
    number[current - 2].classList.remove('violet')
    current -=1
})
prevFourth.addEventListener('click', function() {
    slidePage.style.marginLeft = '-200%'
    text[current - 2].classList.remove('text')
    bullet[current - 2].classList.remove('text')
    number[current - 2].classList.remove('violet')
    current -=1
})
submit.addEventListener('click', function() {
    var patternUser = /[\w]/.test(user.value)
    var patternPass = /((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})/.test(pass.value)
    if (patternUser && patternPass) {
        userError.style.visibility = 'hidden'
        passError.style.visibility = 'hidden'
        text[current - 1].classList.add('text')
        bullet[current - 1].classList.add('text')
        number[current - 1].classList.add('violet')
        current +=1
        setTimeout(function() {
            alert('You are successfully registered.')
            location.reload()
        }, 500)
    } else if (patternUser) {
        userError.style.visibility = 'hidden'
        passError.style.visibility = 'visible'
    } else if (patternPass) {
        userError.style.visibility = 'visible'
        passError.style.visibility = 'hidden'
    } else {
        userError.style.visibility = 'visible'
        passError.style.visibility = 'visible'
    }
})