(function() {
    let u = document.querySelectorAll('.btn');
    var container = document.querySelectorAll('.container');
    var n = true;
    let currentPlayer = '◯';

    function handleButtonClick(event) {
        const button = event.target;
        if (button.innerHTML === '') {
            button.innerHTML = currentPlayer;
            if (currentPlayer === '◯') {
                button.style.color = 'red';
            } else {
                button.style.color = 'blue';
            }
            checkWin();
            currentPlayer = currentPlayer === '◯' ? '✖' : '◯';
        }
    }

    function checkWin() {
        if (
            (u[0].innerHTML === u[1].innerHTML && u[1].innerHTML === u[2].innerHTML && u[0].innerHTML !== '') ||
            (u[3].innerHTML === u[4].innerHTML && u[4].innerHTML === u[5].innerHTML && u[3].innerHTML !== '') ||
            (u[6].innerHTML === u[7].innerHTML && u[7].innerHTML === u[8].innerHTML && u[6].innerHTML !== '') ||
            (u[0].innerHTML === u[3].innerHTML && u[3].innerHTML === u[6].innerHTML && u[0].innerHTML !== '') ||
            (u[1].innerHTML === u[4].innerHTML && u[4].innerHTML === u[7].innerHTML && u[1].innerHTML !== '') ||
            (u[2].innerHTML === u[5].innerHTML && u[5].innerHTML === u[8].innerHTML && u[2].innerHTML !== '') ||
            (u[0].innerHTML === u[4].innerHTML && u[4].innerHTML === u[8].innerHTML && u[0].innerHTML !== '') ||
            (u[2].innerHTML === u[4].innerHTML && u[4].innerHTML === u[6].innerHTML && u[2].innerHTML !== '')
        ) {
            const m = document.createElement('h1');
            m.innerHTML = `${currentPlayer} wins!🥳🎉`;
            container[0].appendChild(m);
            if (currentPlayer === '◯') {
                document.body.style.backgroundColor = 'red';
            } else {
                document.body.style.backgroundColor = 'blue';
            }
            

            function removeAll() {    
                for (let i = 0; i < u.length; i++) {
                    u[i].innerHTML = '';
                }
                container[0].removeChild(m);
                document.body.style.backgroundColor = null;
            }
            return setTimeout(function () {removeAll();}, 4000), n = false
        }
    }

    function addEventListeners(n) {
        if (n === true){
            for (let i = 0; i < u.length; i++) {
                u[i].addEventListener('click', handleButtonClick);
            }
        }
    }

    addEventListeners(n);
})();
