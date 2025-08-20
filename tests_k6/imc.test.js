import http from 'k6/http'
import { sleep, check } from 'k6'
const postIMC = JSON.parse(open('../fixtures/postIMC.json'))
import { pegarBaseUrl } from '../utils/variaveis.js'

export const options = {  
    stages: [
        { duration: '5s', target: 10 }, // Estratégia de teste SHORT
        { duration: '20s', target: 10 },
        { duration: '5s', target: 0 }
    
    // { duration: '30s', target: 50 }, // Estratégia de teste AVERAGELOAD
    // { duration: '60s', target: 30 },
    // { duration: '30s', target: 0 }

    // { duration: '50s', target: 100 }, // Estratégia de teste STRESS
    // { duration: '100s', target: 100 },
    // { duration: '50s', target: 0 }

    // { duration: '30s', target: 50 }, // Estratégia de teste SOAK
    // { duration: '1000s', target: 50 },
    // { duration: '50s', target: 0 }
    
    // { duration: '2500s', target: 10000 }, // Estratégia de teste BREAKINGPOINT, 
    // precisa do threshold http_req_failed: ['rate<0.01']
    
    // { duration: '5s', target: 3000 }, // Estratégia de teste SPIKE
    // { duration: '5s', target: 0 }
  ],   

//iterations: 1,
    
    thresholds: {
        http_req_duration: ['p(90)<2000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    
    const url = pegarBaseUrl() + '/api/imc/calcular'    
    const payload = JSON.stringify(postIMC)  

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