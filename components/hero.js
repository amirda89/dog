async function fetchRandomDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = await res.json();
  const imageUrl = result.message;
  document.getElementById("heroImage").innerHTML =
    `<img src="${imageUrl}" alt="dog" class="w-full h-full object-cover"/>`;
  document.getElementById("heroImageDesktop").innerHTML =
    `<img src="${imageUrl}" alt="dogDesktop" class="w-full h-full object-cover"/>`;
}
fetchRandomDog();
