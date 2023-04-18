function calcular() {
  //const app = document.getElementById("simulador");
  const bancos = document.querySelector('input[name="banco"]:checked').value;
  let tna = 78/100;
  console.log(tna)
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
   
    if(deposito!='' && tna!='' && duracion>='30' && duracion<='365' ){
    const cap = deposito * (1 + tna * (duracion / 365));
    const interes =  cap - deposito;
          if (cap >= 1000) {
          $('#calc_result').text('$' + cap.toFixed(2));
          $('#calc_interes').text('$' + interes.toFixed(2));
          $('#tna').text(100*tna.toFixed(2)+"%");
          $('#dias').text( duracion + ' dias');
          $('#monto').text('$' + deposito);
          $('#clac_error').text('');
          $('#duracion').element.classList.remove('danger');
          $('#capital').element.classList.remove('danger');
      } 
      else {
        $('#capital').element.classList.add('danger');
        $('#clac_error').text('Ingrese valor mayor a $1000.');
        
      }
      
    }else{
        $('#clac_error').text('Ingrese un valor de días mayor a 30 o menor a 365');
        $('#duracion').element.classList.add('danger');
    } 

}