//  Dom elements
const buttons = document.querySelectorAll('button')
const form = document.querySelector('form')
const formActivity = document.querySelector('form span')
const input = document.querySelector('input')
const error = document.querySelector('.error')

let activity = 'cycling'

buttons.forEach(button => {
    button.addEventListener('click', e => {
        // find out the activity on the button
        activity = e.target.dataset.activity

        // remove the active class from where it was and add to the button clicked
        buttons.forEach(button => button.classList.remove('active'))
        e.target.classList.add('active')

        // update the id on the input field
        input.setAttribute('id', activity)

        // set text of form span
        formActivity.textContent = activity
    })
})
