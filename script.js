let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', (e) => {
        let input = e.target.innerHTML;
        if (input == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (input == "Clr") {
            string = "";
            document.querySelector('input').value = string;
        }
        else {

            console.log(input);
            string = string + input;
            document.querySelector('input').value = string;
        }

    })
})