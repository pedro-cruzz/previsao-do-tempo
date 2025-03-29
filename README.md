# ClimaIfElse - if "sol" else "chuva" 🌤️🌧️
[Página GitHub pages](https://pedro-cruzz.github.io/previsao-do-tempo/)

Este projeto é um aplicativo web simples que exibe a previsão do tempo em tempo real para qualquer cidade do mundo. Ele utiliza a **WeatherAPI** para buscar os dados climáticos e altera dinamicamente o fundo da página conforme as condições do tempo.

## 📌 Funcionalidades
- Buscar a previsão do tempo para qualquer cidade.
- Exibir temperatura, umidade e condições climáticas.
- Alterar o fundo do site com base no clima atual.
- Suporte para diferentes condições meteorológicas, como sol, chuva, neve, neblina, tempestade e vento.

## 🛠️ Tecnologias Utilizadas
- **HTML** → Estrutura do site
- **CSS** → Estilização e design
- **JavaScript** → Lógica da aplicação e integração com a API
- **WeatherAPI** → Fonte dos dados meteorológicos

## 🚀 Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/weather-app.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Digite o nome de uma cidade no campo de busca e pressione **Enter**.
4. Veja a previsão do tempo e observe a mudança do fundo conforme o clima.

## 🔑 Configuração da API
Para que o aplicativo funcione corretamente, é necessário configurar a chave da **WeatherAPI**.
- Substitua a variável `apiKey` no arquivo JavaScript pelo seu próprio token de acesso:
  ```js
  const apiKey = "SUA_CHAVE_API_AQUI";
  ```

## 🌦️ Climas Suportados
O fundo do site muda dinamicamente para os seguintes climas:
- ☀️ **Ensolarado / Céu limpo**
- 🌤️ **Parcialmente nublado**
- ☁️ **Nublado**
- 🌫️ **Neblina**
- 🌧️ **Chuva / Garoa**
- ⛈️ **Tempestade**
- ❄️ **Neve**
- 💨 **Vento forte**

## 📷 Exemplos de Imagens de Fundo
As imagens de fundo são carregadas dinamicamente de fontes online. Caso queira utilizar imagens locais, basta substituir as URLs das imagens no código:
```js
imagemFundo = "url('images/chuva-dia.jpg')";
```

## 📝 Melhorias Futuras
- Adicionar suporte para previsão de vários dias.
- Melhorar a responsividade para dispositivos móveis.
- Implementar modo escuro.
- Exibir mais detalhes como sensação térmica e velocidade do vento.

## 📌 Licença
Este projeto é de código aberto e pode ser modificado conforme necessário. 😊

