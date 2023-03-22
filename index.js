const open_model = document.getElementById("open_model");

const close_model = document.getElementById("close_model");

const model = document.getElementById("model");

const start_game = document.getElementById("start_game");

const result = document.getElementById("result");


const block_1_1 = document.getElementById("block_1_1");
const block_1_3 = document.getElementById("block_1_3");
const block_1_4 = document.getElementById("block_1_4");
const block_1_5 = document.getElementById("block_1_5");
const block_1_6 = document.getElementById("block_1_6");
const block_1_7 = document.getElementById("block_1_7");
const block_1_10 = document.getElementById("block_1_10");
const block_1_12 = document.getElementById("block_1_12");
const block_1_13 = document.getElementById("block_1_13");


const id = document.getElementById("id");
const submit_game = document.getElementById("submit_game");


const action_button_1 = document.getElementById("action_button_1");
const action_button_2 = document.getElementById("action_button_2");
const action_button_3 = document.getElementById("action_button_3");
const action_button_4 = document.getElementById("action_button_4");



start_game.onclick = function () {

    start_game.remove();


    submit_game.onclick = function () {

        submit_game.remove();


        if (block_1_1.textContent == 4 && block_1_3.textContent == 2 && block_1_4.textContent == 3 && block_1_5.textContent == 2 && block_1_6.textContent == 3 && block_1_7.textContent == 1 &&
            block_1_10.textContent == 4 && block_1_12.textContent == 2 && block_1_13.textContent == 3) {


            result.style.color = 'black';
            result.innerHTML = "Congratulations you solved it Correctly";
            result.style.width = '60%';
            result.style.backgroundColor = 'yellow';
            result.style.padding = '1.5em';
            result.style.border = '1px solid yellow';
            result.style.borderRadius = '12px';
            result.style.margin = '0 auto';


        }
        else {
            // alert("You lost !!!!!!1");
            console.log(block_1_1);
            result.style.color = 'black';
            result.style.backgroundColor = 'red';
            result.style.width = '60%';
            result.style.margin = '0 auto';
            result.style.padding = '1.5em';
            result.style.borderRadius = '12px';
            result.innerHTML = "OOps !!! You Lost, as you didn't  solve it Correctly";
        }


    }



    action_button_1.onclick = function () {

        buttons = [block_1_1, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_10, block_1_12, block_1_13];

        buttons.forEach(element => {

            element.onclick = function () {
                element.textContent = '1';
            }

        });


    }


    buttons = [block_1_1, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_10, block_1_12, block_1_13];




    action_button_2.onclick = function () {
        buttons = [block_1_1, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_10, block_1_12, block_1_13];

        buttons.forEach(element => {

            element.onclick = function () {
                element.textContent = '2';
            }

        });



    }



    action_button_3.onclick = function () {

        buttons = [block_1_1, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_10, block_1_12, block_1_13];

        buttons.forEach(element => {
            element.onclick = function () {
                element.textContent = '3';
            }

        });



    }

    action_button_4.onclick = function () {

        buttons = [block_1_1, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_10, block_1_12, block_1_13];

        buttons.forEach(element => {
            element.onclick = function () {
                element.textContent = '4';
            }

        });




    }


}



open_model.onclick = function () {

    model.show();

}

close_model.onclick = function () {
    model.close();
}

