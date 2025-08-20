# Testes de Performance - Desafio Final Mentoria 2.0 🚀

Este repositório contém os testes de performance desenvolvidos para o projeto final da Mentoria 2.0, utilizando a ferramenta K6. O objetivo é simular cenários de carga e estresse para garantir a robustez e escalabilidade da aplicação. 💪

## 🛠️ Tecnologias Utilizadas

*   **K6**: Ferramenta de teste de carga e performance escrita em Go, que permite escrever testes em JavaScript. 📈
*   **JavaScript**: Linguagem de programação utilizada para escrever os scripts de teste do K6. 💻

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

*   `config/`: Contém arquivos de configuração, como `config.local.json` para variáveis de ambiente e configurações específicas do ambiente de teste. ⚙️
*   `fixtures/`: Armazena dados de teste (payloads) em formato JSON, como `postIMC.json` e `postTreinos.json`, utilizados nas requisições. 📦
*   `tests_k6/`: Diretório principal onde os scripts de teste do K6 estão localizados. Cada arquivo `.test.js` representa um cenário de teste específico.
    *   `imc.test.js`: Testes de performance relacionados ao cálculo de IMC. 🏋️‍♀️
    *   `treinos.test.js`: Testes de performance relacionados ao registro de treinos. 🏃‍♂️
*   `utils/`: Contém arquivos de utilitários, como `variaveis.js`, que podem armazenar funções ou variáveis reutilizáveis entre os testes. 💡

## ▶️ Como Executar os Testes

Para executar os testes de performance, siga os passos abaixo:

1.  **Instale o K6**: Se você ainda não tem o K6 instalado, siga as instruções na [documentação oficial do K6](https://k6.io/docs/getting-started/installation/). 📥

2.  **Navegue até o diretório do projeto**: 
    ```bash
    cd testes-performance-desafio-final-m20
    ```

3.  **Execute um teste específico**: Para rodar um teste, utilize o comando `k6 run` seguido do caminho para o arquivo de teste.

    Exemplo para o teste de IMC:
    ```bash
    k6 run tests_k6/imc.test.js
    ```

    Exemplo para o teste de Treinos:
    ```bash
    k6 run tests_k6/treinos.test.js
    ```

    Você pode adicionar opções ao comando `k6 run` para configurar a duração, o número de usuários virtuais (VUs) e outras métricas. Consulte a [documentação do K6](https://k6.io/docs/using-k6/options/) para mais detalhes. ⚙️

## 📊 Análise de Resultados

Após a execução dos testes, o K6 exibirá um resumo das métricas de performance diretamente no terminal. Para análises mais aprofundadas, você pode integrar o K6 com ferramentas de visualização como Grafana, Prometheus, ou exportar os resultados para diferentes formatos. 📈

Para gerar relatórios HTML a partir dos resultados do K6, você pode usar ferramentas de terceiros ou scripts personalizados que convertem o output JSON do K6 em um formato HTML visualmente agradável. Além disso, o K6 oferece uma funcionalidade experimental de Web Dashboard que pode exportar relatórios HTML diretamente.

### Geração de Relatórios HTML com Web Dashboard (Experimental)

O K6 possui uma funcionalidade de Web Dashboard que permite visualizar os resultados em tempo real e exportá-los para um relatório HTML. Para utilizá-la, defina as seguintes variáveis de ambiente antes de executar o teste:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests_k6/imc.test.js
```

Após a execução, um arquivo `html-report.html` será gerado no diretório raiz do projeto, contendo um resumo interativo dos resultados do teste. 📄

### Geração de Relatórios HTML a partir de JSON (Abordagem Comum)

Uma abordagem comum para gerar relatórios HTML é:

1.  **Exportar resultados para JSON**: Execute o K6 com a opção `--out json` para salvar os resultados em um arquivo JSON.
    ```bash
k6 run --out json=result.json tests_k6/imc.test.js
    ```

2.  **Converter JSON para HTML**: Utilize uma ferramenta ou script para transformar o `result.json` em um relatório HTML. Existem diversas opções disponíveis na comunidade K6, como o `k6-to-html` ou scripts Python/Node.js que processam o JSON e geram um HTML customizado. 📄

--- 

Desenvolvido com ❤️ por Ieda Ferreira Alves Flock na Mentoria 2.0. Você pode encontrar mais projetos em meu GitHub: [iedaflock](https://github.com/ieda-ia). 👩‍💻
