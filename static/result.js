document.getElementById('lamaTahunSelect').addEventListener('change', function () {
  const resultBox = document.getElementById('resultBox');
  resultBox.textContent = `Biaya Premi untuk ${this.value} Tahun`;
});
