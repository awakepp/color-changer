const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        if (e.target.id === 'box1') {
            body.style.backgroundColor = 'blueviolet';
        };
        if (e.target.id === 'box2') {
            body.style.backgroundColor = 'burlywood';
        };
        if (e.target.id === 'box3') {
            body.style.backgroundColor = 'aqua';
        };
        if (e.target.id === 'box4') {
            body.style.backgroundColor = 'rgb(185, 19, 19)';
        };
        if (e.target.id === 'reset') {
            body.style.backgroundColor = 'rgb(21, 19, 19)'
        }
    });
});