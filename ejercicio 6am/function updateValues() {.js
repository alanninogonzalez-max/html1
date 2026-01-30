function updateValues() {
  console.log(event.target.options[event.target.value].text)
  let selectedVal = event.target.options[event.target.value].text;
  document.getElementById('descriptions1').value = selectedVal;
  document.getElementById('prices1').value = selectedVal;

}