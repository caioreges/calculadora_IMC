const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
      e.preventDefault();
      const peso = form.querySelector('.peso').value;
      const altura = form.querySelector('.altura').value;

      if (!peso) {
            setResponse('Peso inválido', false)
            console.log('Peso inválido')
            return
      }
      if (!altura) {
            setResponse('Altura inválida', false)
            console.log('Altura inválida')
            return
      }

      const imc = calcular(peso, altura)
      const imcLevel = getImcLevel(imc)
      const msg = `Seu IMC é ${imc}. ${imcLevel}`

      setResponse(msg, true);
})

function calcular(peso, altura) {
      const imc = peso / (altura ** 2);
      return imc.toFixed(1);
}
function getImcLevel (imc) {
      const imcLevel = [
            '(Abaixo do peso)',
            '(Peso normal)',
            '(Sobrepeso)',
            '(Obesidade grau 1)',
            '(Obesidade grau 2)',
            '(Obesidade grau 3)'
      ]

      if (imc >= 40) return imcLevel[5];
      if (imc >= 35) return imcLevel[4];
      if (imc >= 30) return imcLevel[3];
      if (imc >= 25) return imcLevel[2];
      if (imc >= 18.5) return imcLevel[1];
      if (imc < 18.5) return imcLevel[0];
}
function createParagraph (){
      const p = document.createElement('p')
      return p
}

function setResponse(msg, isValid) {
      const response = document.querySelector('.response');
      response.innerHTML = ''

      const p = createParagraph();
      if (isValid) {
            p.classList.add('p-response-positive')
      } else {
            p.classList.add('p-response-negative')
      }
      p.innerHTML = msg;
      response.appendChild(p);
}