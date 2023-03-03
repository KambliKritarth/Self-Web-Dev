const joinButton = document.getElementById('join');
const cardHeading = document.getElementById('cardHeading');
const changeButton = document.getElementById('change')
const modifyButton = document.getElementById('modify')
const sizeInput = document.getElementById('size')

function onClick() {
  cardHeading.textContent = "Thanks for joining us"
}
joinButton.addEventListener('click', onClick);

cardHeading.addEventListener('mouseenter', function onMouseEnter() {
  cardHeading.style.color = "black";
})
cardHeading.addEventListener('mouseleave', function onMouseLeave() {
  cardHeading.style.color = "#FAD3E7";
})

const paragraphs = document.getElementsByTagName('p')
for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].textContent = "Paragraph "+i+" here";
}

changeButton.addEventListener('click', function change() {
  for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].textContent = "Paragraph "+(paragraphs.length-i)+" here";
}
})
modifyButton.addEventListener('click', function modify() {
  for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].style.fontSize = sizeInput.value+'px';
}
})