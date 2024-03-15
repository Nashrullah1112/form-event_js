const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Hai, ${inputNama}. Bagaimana Cuaca di ${inputDomisili}?`;

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault();
});
