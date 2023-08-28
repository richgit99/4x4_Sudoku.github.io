const freezed_buttons = document.getElementsByClassName('freezed_button');
const to_be_filled_buttons = document.getElementsByClassName("to_be_filled");

const to_be_1 = document.getElementsByClassName("to_be_1");
const to_be_2 = document.getElementsByClassName("to_be_2");
const to_be_3 = document.getElementsByClassName("to_be_3");
const to_be_4 = document.getElementsByClassName("to_be_4");

[...freezed_buttons].forEach((each_button) => {
    each_button.disabled = true;
    each_button.style.backgroundColor = 'AEC3AE';
    each_button.style.color = 'black';
});

const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_4 = document.getElementById("button_4");

const start_button = document.getElementById("start_button");
const submit_button = document.getElementById("submit_button");
const play_again_button = document.getElementById("play_again_button");


start_button.onclick = function () {

    setTimeout(() => {
        start_button.remove();
        submit_button.style.display = 'block';
        play_again_button.style.display = 'block';
    }, 300);

    const user_clicked_buttons = [button_1, button_2, button_3, button_4];

    for (let i = 0; i < user_clicked_buttons.length; i++) {

        user_clicked_buttons[i].onclick = function () {

            [...to_be_filled_buttons].forEach((each_button) => {
                each_button.onclick = function () {
                    each_button.innerText = user_clicked_buttons[i].innerText;
                };
            });
        }
    }


    let win_counter = 0;

    submit_button.onclick = function () {

        setTimeout(() => {
            submit_button.remove();
        }, 500);

        const result_line = document.getElementById("result_line");


        [...to_be_1].forEach((each_button) => {
            if (each_button.innerText == "1") {
                win_counter++;
            }
        });

        [...to_be_2].forEach((each_button) => {
            if (each_button.innerText == "2") {
                win_counter++;
            }
        });

        [...to_be_3].forEach((each_button) => {
            if (each_button.innerText == "3") {
                win_counter++;
            }
        });


        [...to_be_4].forEach((each_button) => {
            if (each_button.innerText == "4") {
                win_counter++;
            }

        });

        // alert(win_counter);
 
        if (win_counter == 9) {
            result_line.innerText = 'You Won';
            result_line.style.color = '#614BC3';
            confetti();
            confetti();
            confetti();
            confetti(); confetti(); confetti(); confetti();
            result_line.style.display = 'block';
        }
        else {
            result_line.innerText = 'You Lost';
            result_line.style.display = 'block';
            result_line.style.color = 'red';
       
        }

    }


    play_again_button.onclick = function () {
        window.location.reload();
    }



}



