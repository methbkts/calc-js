// declaration variable ecran affichage
var inputLabel = document.getElementById('inputLabel');

// declaration fonction appuie bouton
function pushBtn(obj) {

// declaration variable bouton
    var pushed = obj.innerHTML;

    if (pushed == '=') {
            // Calcul
            inputLabel.innerHTML = eval(inputLabel.innerHTML);

        } else if (pushed == 'AC') {
            // Nettoyage ecran
            inputLabel.innerHTML = '0';

        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;

            } else {
                inputLabel.innerHTML += pushed;

            }
        }
    }
