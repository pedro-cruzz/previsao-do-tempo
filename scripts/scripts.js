const apiKey = "95a18d3c836649b3be811117252903";

async function buscar_clima() {
  document.querySelector(".initial-msg").style.display = "none"; // Oculta a mensagem inicial

  const inputCidade = document.querySelector("input");
  const cidade = inputCidade.value.trim();

  if (!cidade) {
    alert("Por favor, digite o nome de uma cidade!");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    cidade
  )}&lang=pt`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (resposta.ok) {
      atualizarDadosNaTela(dados);
    } else {
      alert("Cidade não encontrada ou erro na requisição!");
    }
  } catch (erro) {
    alert("Erro ao buscar os dados: " + erro.message);
  }
}

function atualizarDadosNaTela(dados) {
  document.querySelector("h2").innerText = `Tempo em ${dados.location.name}`;
  document.querySelector(".temp").innerText = `${dados.current.temp_c}°`;
  document.querySelector(".descricao").innerText = dados.current.condition.text;
  document.querySelector(".icon-weather").src = dados.current.condition.icon;
  document.querySelector(
    ".umidade"
  ).innerText = `Umidade: ${dados.current.humidity}%`;

  document.querySelector("h2").classList.remove("hidden");
  document.querySelector(".temp").classList.remove("hidden");
  document.querySelector(".little-box").classList.remove("hidden");
  document.querySelector(".umidade").classList.remove("hidden");

  const isDay = dados.current.is_day;
  mudarFundo(dados.current.condition.text, isDay);
}

function mudarFundo(condicao, isDay) {
  let imagemFundo = "";

  if (
    condicao.includes("Chuva") ||
    condicao.includes("Garoa") ||
    condicao.includes("Aguaceiros fracos")
  ) {
    imagemFundo = isDay
      ? "url('img/chuva-dia.jpg')"
      : "url('img/chuva-noite.jpg')";
  } else if (condicao.includes("Sol") || condicao.includes("Claro")) {
    imagemFundo = "url('img/sol.jpg')";
  } else if (
    condicao.includes("Parcialmente nublado") ||
    condicao.includes("Encoberto")
  ) {
    imagemFundo = isDay
      ? "url('img/dia-nublado.jpg')" // dia
      : "url('img/noite-nublada.jpg')"; //noite
  } else if (condicao.includes("Nevoeiro") || condicao.includes("Neblina")) {
    imagemFundo = isDay
      ? "url('img/neblina.jpg')" // dia
      : "url('img/neblina-noite.jpg')"; //noite
  } else if (condicao.includes("Céu limpo")) {
    imagemFundo = isDay
      ? "url('img/sol.jpg')" // dia
      : "url('img/noite-limpa.jpg')"; // noite
  } else if (condicao.includes("Neve")) {
    imagemFundo = isDay
      ? "url('img/neve-dia.jpg')" // dia
      : "url('img/tempestade-noite.jpg')"; // noite
  } else if (condicao.includes("Tempestade")) {
    imagemFundo = isDay
      ? "url('img/tempestade-dia.jpg')" // dia
      : "url('img/tempestade-noite.jpg')"; // noite
  } else if (condicao.includes("Vento")) {
    imagemFundo = "url('img/vento.jpg')"; // vento
  } else {
    imagemFundo = "url('img/background.jpg')"; // imagem padrão
  }

  document.body.style.backgroundImage = imagemFundo;
}
