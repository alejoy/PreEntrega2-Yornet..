function calcular() {
  //const app = document.getElementById("simulador");
  const bancos = document.querySelector('input[name="banco"]:checked').value;
  let tna = 78/100;
  //console.log(tna)
  if (bancos==1){
  tna = 78 / 100;}
  if (bancos==2){
  tna = 77 / 100;}
  if (bancos==3)
  {tna = 79 / 100;}

//console.log(bancos)
//console.log(tna)
  const deposito = document.getElementById("capital").value;
  const duracion = document.getElementById("duracion").value;
   
    if(deposito!='' && duracion!=''){
    const cap = deposito * (1 + tna * (duracion / 365));
    const interes =  cap - deposito;
      if (deposito >= 1000) {
        let result = '$' + cap.toFixed(2);
        document.getElementById("calc_result").innerHTML = result;
        let calc_interes = '$' + interes.toFixed(2);
        document.getElementById("calc_interes").innerHTML = calc_interes;
        let dias = duracion + " dias";
        document.getElementById("dias").innerHTML = dias;  
        let monto = '$' + deposito;
        document.getElementById("monto").innerHTML = monto;
        let calc_error = "";
        document.getElementById("calc_error").innerHTML = calc_error;
        let tasa = 100 * tna + '%';
        document.getElementById("tna").innerHTML = tasa;
          }           
          else {
            alert("menos mil") 
            calc_error = 'Ingrese valor mayor a $1000';
            document.getElementById("calc_error").innerHTML = calc_error;
          }
      if(duracion <'30' || duracion>'365'){
        calc_error = 'Ingrese un valor de días mayor a 30 o menor a 365';
        document.getElementById("calc_error").innerHTML = calc_error;
        } else {
          calc_error = '';
        }
    }
    else {
      calc_error = 'Debe ingresar un valor en los campos solicitados';
    }
}