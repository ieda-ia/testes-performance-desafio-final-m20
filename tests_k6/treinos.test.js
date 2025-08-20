import http from 'k6/http'
import { sleep, check } from 'k6'
const postTreinos = JSON.parse(open('../fixtures/postTreinos.json'))

export const options = {  
//     stages: [      
//     { duration: '30s', target: 50 }, // Estratégia de teste AVERAGELOAD
//     { duration: '60s', target: 30 },
//     { duration: '30s', target: 0 }   
//   ],
    iterations: 1,
    thresholds: {
        http_req_duration: ['p(90)<2000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    const url = 'http://localhost:3006/api/treinos/gerar'
    console.log(postTreinos)
    const payload = JSON.stringify(postTreinos)  

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const resposta = http.post(url, payload, params)
  check(resposta, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar se o treino for gerado': (r) => {
      const dados = r.json()      
      return dados.success === true
    },
})
  sleep(1) 
}