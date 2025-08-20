import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {  
    stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '20s', target: 0 }
    
  ],
    thresholds: {
        http_req_duration: ['p(90)<2000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
  const url = 'http://localhost:3006/api/imc/calcular'

  const payload = JSON.stringify({    
    nomeUsuario: 'João Silva',
    peso: 70,
    altura: 1.75,
    idade: 25,
    gerarTreino: false
  })  

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const resposta = http.post(url, payload, params)
  check(resposta, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar que o IMC está correto': (r) => {
      const dados = r.json()      
      return dados.resultadoIMC.imc === 22.86
    },
})
  sleep(1) 
}