//let simulacion = new Object();
  //const app = document.getElementById("simulador");
  const tnaA = [];
 // const bancos = document.querySelector('input[name="banco"]:checked').value;
  const bancos =  prompt("Ingresa el banco de su preferencia 1, 2 o 3");
  let tna = 91/100;

  if (bancos==1){
  tna = 91 / 100;
  tnaA.splice (1,0,tna)}
  if (bancos==2){
  tna = 90 / 100;
  tnaA.splice (2,0,tna) 
 }
  if (bancos==3)
  {tna = 89 / 100;
  tnaA.splice (3,0,tna)
   }

  //const deposito = document.getElementById("capital").value;
  const deposito = prompt("Ingresa el capital a invertir");
  //const duracion = document.getElementById("duracion").value;
  const duracion = prompt("Ingresa el tiempo para tu plazo fijo");
 // const dangerCapital = document.getElementById("capital");
 // const dangerDuracion = document.getElementById("duracion");
  const cap = multiplicar(deposito,(sumar(1, (multiplicar(tnaA,(duracion / 365))))));
  const interes =  cap - deposito; 
  console.log (duracion) 

if (deposito >=1000)
    if (duracion>=30 && duracion<=365){
      let result = '$' + cap.toFixed(2);
        //document.getElementById("calc_result").innerHTML = result;
        let calc_interes = '$' + interes.toFixed(2);
        //document.getElementById("calc_interes").innerHTML = calc_interes;
        let dias = duracion + " dias";
        //document.getElementById("dias").innerHTML = dias;  
        let monto = '$' + deposito;
        //document.getElementById("monto").innerHTML = monto;
        let calc_error = "";
        //document.getElementById("calc_error").innerHTML = calc_error;
        let tasa = multiplicar(100, tnaA) + '%';
        //document.getElementById("tna").innerHTML = tasa;
        //dangerDuracion.classList.remove("danger");
        //dangerCapital.classList.remove("danger");
        alert("Monto Total " + result
            + " Plazo " + dias
            + " Capital " + monto
            + " Tasa " + tasa 
            + " Intereses " + calc_interes
            );
    }
    else
    {
      calc_error = 'Ingrese un valor de días mayor a 30 o menor a 365';
      alert(calc_error);
      //document.getElementById("calc_error").innerHTML = calc_error;
      //dangerDuracion.classList.add("danger");

      }
      else {
        calc_error = 'Ingrese valor mayor a $1000';
        alert(calc_error);
        //document.getElementById("calc_error").innerHTML = calc_error;
        //dangerCapital.classList.add("danger");
      } 
      
function simul (plazo, capital, interses,total,tna) {
        this.plazo = plazo;
        this.capital = capital;
        this.interses = interses;
        this.total = total;
        this.tna = tna;
      }
      const simulacion = new simul(duracion, deposito, interes,cap, tnaA[0]);
      
      console.log(simulacion);
      


function sumar(sum1, sum2)
{
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

function multiplicar(mult1, mult2)
{
    let resultado;
    resultado = mult1 * mult2;
    return resultado;
}


//function enviarcot() {
  
 // alert(JSON.stringify(simulacion));
//}