/*  ============ RELÓGIO DIGITAL -FUNCIONANDO ============= */

/* MANIPULANDO RELÓGIO DIGITAL */
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

/* Função que irá cria um intervalo */
function updateClock() {
  /* Propriedade que irá atribuir a hora atual */
  /* Date classe para atribuir data */
  /*  Classe de manipulação de data - Date maninupula hora,minuto e segundo entre outros.*/
  let now = new Date()
  /* Propriedade que irá atribuir a hora */
  let hour = now.getHours()
  /* Propriedade que irá atribuir os minutos */
  let minute = now.getMinutes()
  /* Propriedade que irá atribuir os segundos */
  let second = now.getSeconds()

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`

  /*  ========= RELÓGIO ANALÓGICO - FUNCIONANDO ============== */

  //  - LÓGICA APLICADA OS PONTEIROS -

  // Calcula quantos graus o ponteiro vai andar por hora.
  // 360 / 12HORAS,ou seja, o ponteiro vai rodar 2 vezes

  // 1 - Circulo tem 360graus
  // 2 - 360graus dividos por 60segundos
  // 3 - Cada segunda PEGA 6graus
  // 4 - 6graus * 10 = 60segundos
  // 5 - o ponto inicial fica em cima por isso o -90 para mudar a posição

  // sDeg = ANGULO DOS SEGUNDOS
  let sDeg = (360 / 60) * second - 90 // Calcula quantos graus o ponteiro vai andar por SEGUNDO.

  // sDeg = ANGULO DOS MINUTOS
  let mDeg = (360 / 60) * minute - 90 // Calcula quantos graus o ponteiro vai andar por MINUTO.

  // sDeg = ANGULO DAS HORAS

  let hDeg = (360 / 12) * hour - 90 // O 12 É POR QUE O DIA TEM 24 E O RELÓGIO RODA 2X

  // - ALINHAMENTO DE CADA PONTEIRO -

  //POSICIONAMENTO DO PONTEIRO DOS SEGUNDOS
  sElement.style.transform = `rotate(${sDeg}deg)` //sDeg irá RECUPERAR o valor da conta dos SEGUNDOS a cima.

  //POSICIONAMENTO DO PONTEIRO DOS MINUTOS
  mElement.style.transform = `rotate(${mDeg}deg)` //sDeg irá RECUPERAR o valor da conta dos MINUTOS a cima.

  //POSICIONAMENTO DO PONTEIRO DA HORA
  hElement.style.transform = `rotate(${hDeg}deg)`
  //sDeg irá RECUPERAR o valor da conta da HORA a cima.
}

/* Essa função irá corrigir o problema dos números que for menor que 10 no relógio */
function fixZero(time) {
  /*  if (time < 10) { // pode ser feito dessa forma aqui
    return '0' + time
  } else {
    return time
  }
  */
  return time < 10 ? `0${time}` : time
}

setInterval(updateClock, 1000)
/* 1000 refere-se a 1 milessegundo. 1 milessegundo segundo é igual 1 segundo. */
updateClock()
/* A cada 1 um em 1 Segundo ele irá executar essa função */
