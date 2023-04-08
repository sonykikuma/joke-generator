const jokeEl = document.getElementById("joke");

const btnEl = document.getElementById("btn");

const apiKey = "IpS+JD8yx/YMtcbAPvvKaA==1ZdsxsEHZt5QT3aO";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "updating..";
    btnEl.disabled = true;
    jokeEl.innerText = "loading..";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    jokeEl.innerText = "tell me a joke";

    console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
