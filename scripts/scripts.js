const apiKey = "95a18d3c836649b3be811117252903";

async function buscar_clima() {
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
  document.querySelector(".big-box p").innerText = `${dados.current.temp_c}°`;
  document.querySelector(".little-box p").innerText =
    dados.current.condition.text;
  document.querySelector(".icon-weather").src = dados.current.condition.icon;

  document.querySelector("h2").classList.remove("hidden");
  document.querySelector(".temp").classList.remove("hidden");
  document.querySelector(".little-box").classList.remove("hidden");
  document.querySelector(".umidade").classList.remove("hidden");
 
  
  const umidade = dados.current.humidity;
  document.querySelectorAll(".big-box p")[2].innerText = `Umidade: ${umidade}%`;

  const isDay = dados.current.is_day;
  mudarFundo(dados.current.condition.text, isDay, umidade);
}

function mudarFundo(condicao, isDay, umidade) {
  let imagemFundo = "";

  if (condicao.includes("Chuva")) {
    imagemFundo = isDay
      ? "url('https://img.freepik.com/free-photo/traffic-jam_53876-42983.jpg?t=st=1743215194~exp=1743218794~hmac=669462f7227e171ef57bd42600e7583e741743cddd6ba2f7e89eb62b0aa303be&w=1060')"
      : "url('https://img.freepik.com/free-photo/waterdrops-window-blurring-lights-outside-with-black_181624-10500.jpg?t=st=1743215241~exp=1743218841~hmac=98396b2671bc913a62b1b544028c231a8682905e4c38f1d57ac9a3b39a43ac15&w=996')";
  } else if (condicao.includes("Sol") || condicao.includes("Claro")) {
    imagemFundo = "url(''https://img.freepik.com/free-photo/low-angle-nature-night-time_23-2148282355.jpg?t=st=1743212506~exp=1743216106~hmac=e922fabe81505764d179da33d2fd24b105012969a72a9bca678f4a33ce5628fa&w=1380'')";
  } else if (condicao.includes("Nublado")) {
    imagemFundo = isDay
      ? "url('https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?t=st=1743214795~exp=1743218395~hmac=7fac7ec8234165baba775178e48289d4f49f0c7370b67228dffc5ef78a83d78f&w=1380')"
      : "url('https://img.freepik.com/free-photo/amazing-beautiful-sky-with-clouds_58702-1653.jpg?t=st=1743215013~exp=1743218613~hmac=516c86a0025a3e6d43ee5b1037feb4f6f0c76b1158eecddb718dc5204144060e&w=1380')";
  } else if (condicao.includes("Céu limpo")) {
    imagemFundo = isDay
      ? "url('https://img.freepik.com/free-photo/background-blue-sky-with-white-clouds_1048-2877.jpg?t=st=1743212449~exp=1743216049~hmac=8ad309ae625afc2c2cd2f52344172ccebc847e5764d69fdbb56b4e817d028c43&w=1380')" //dia
      : "url('https://img.freepik.com/free-photo/low-angle-nature-night-time_23-2148282355.jpg?t=st=1743212506~exp=1743216106~hmac=e922fabe81505764d179da33d2fd24b105012969a72a9bca678f4a33ce5628fa&w=1380')"; ///noite
  } else {
    return none;
  }

  document.body.style.backgroundImage = imagemFundo;
}
