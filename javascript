<script>
  window.onload = function() {
    var savedUrl = localStorage.getItem("xzar_url");
    var savedEmail = localStorage.getItem("xzar_email");
    if (savedUrl) document.getElementById("scriptUrl").value = savedUrl;
    if (savedEmail) document.getElementById("emailPenerima").value = savedEmail;
  };

  function simpanKonfigurasi() {
    var url = document.getElementById("scriptUrl").value.trim();
    var email = document.getElementById("emailPenerima").value.trim();
    if (!url || !email) { alert("Isi URL dan Email terlebih dahulu!"); return; }
    
    localStorage.setItem("xzar_url", url);
    localStorage.setItem("xzar_email", email);
    
    var status = document.getElementById("statusMsg");
    status.style.display = "block";
    setTimeout(function() { status.style.display = "none"; }, 3000);
  }

  function generateLink() {
    var url = localStorage.getItem("xzar_url");
    var email = localStorage.getItem("xzar_email");
    if (!url || !email) { alert("Simpan pengaturan URL dan Email terlebih dahulu!"); return; }

    // Mengarahkan ke file go.html
    var baseUrl = window.location.href.split('index.html')[0];
    var finalLink = baseUrl + "go.html?target=" + encodeURIComponent(email) + "&backend=" + encodeURIComponent(url);

    document.getElementById("linkHasil").href = finalLink;
    document.getElementById("linkHasil").textContent = finalLink;
    document.getElementById("resultBox").style.display = "block";
  }

  function copyLink() {
    var link = document.getElementById("linkHasil").textContent;
    navigator.clipboard.writeText(link).then(function() {
      alert("Link berhasil disalin!");
    });
  }
</script>
