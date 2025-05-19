const c = document.getElementById("matrix"),
      x = c.getContext("2d"),
      d = Array(50).fill(1);

let speedMultiplier = 1;
let showMessage = false;

(function a() {
  c.width = innerWidth;
  c.height = innerHeight;
  x.fillStyle = "rgba(0,0,0,.1)";
  x.fillRect(0, 0, c.width, c.height);
  x.font = "16px monospace";
  x.fillStyle = "#0F0";
  
  if (showMessage) {
    x.fillText("Son 3 görevde hız 2 katına çıktı!", 10, 40);
  }
  
  d.forEach((v, i) => {
    x.fillText(String.fromCharCode(33 + Math.random() * 94), i * 20, v * 20);
    d[i] = v * 20 > c.height && Math.random() > 0.98 ? 0 : v + speedMultiplier;
  });
  
  requestAnimationFrame(a);
})();

// Görev tamamlandığında çağrılacak fonksiyon
window.completeTask = function() {
  speedMultiplier = 2;
  showMessage = true;
};
