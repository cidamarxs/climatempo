const apikey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9';

async function climaTempo(cidade) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('clima').textContent = `O clima está: ${data.weather[0].description}`;
    document.getElementById('temp').textContent = `A temperatura está: ${data.main.temp}°C`;
  } catch (error) {
    document.getElementById('clima').textContent = 'Não encontrado';
    document.getElementById('temp').textContent = 'Não encontrado';
  }
}

const input = document.getElementById('cidadeId');

input.addEventListener('input', () => {
  const cidade = input.value;
  climaTempo(cidade);
});
