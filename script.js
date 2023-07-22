function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/img-light.png")
    img.setAttribute("alt", "mayk brito de óculos escuros")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "mayk brito")
  }
}
