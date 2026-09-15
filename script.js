// Function untuk menangkap listener data dari Game Client (NUI / CEF Event Listener)
window.addEventListener('message', function(event) {
    let data = event.data;

    // Menyesuaikan data event dari client game (apabila data dikirimkan via JS Event)
    if (data.type === "updateSpeedometer") {
        if (data.speed !== undefined) {
            document.getElementById('speed').innerText = Math.round(data.speed);
        }
        if (data.gear !== undefined) {
            document.getElementById('gear').innerText = data.gear;
        }
        if (data.fuel !== undefined) {
            document.getElementById('fuel').innerText = Math.round(data.fuel) + '%';
        }
    }
});

// Pengetesan Lokal (Simulasi Angka Bergerak saat dibuka di Browser biasa)
if (!window.invokeNative) {
    setInterval(() => {
        const mockSpeed = Math.floor(Math.random() * 120);
        document.getElementById('speed').innerText = mockSpeed;
    }, 500);
}