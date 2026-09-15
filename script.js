window.addEventListener('message', function(event) {
    let data = event.data;

    // Cetak semua data yang dikirim server ke Console F8 (nui_devtools)
    console.log("[SPEEDO DEBUG] Data Masuk:", JSON.stringify(data));

    if (!data) return;

    // Jika data dibungkus oleh action / payload bawaan
    let payload = data.data || data.payload || data;

    // 1. Tangkap Kecepatan
    let speed = payload.speed ?? payload.kmh ?? payload.mph ?? payload.val ?? payload.speedometer;
    if (speed !== undefined && speed !== null) {
        document.getElementById('speed').innerText = Math.round(Number(speed));
    }

    // 2. Tangkap Bensin
    let fuel = payload.fuel ?? payload.gas ?? payload.fuelLevel;
    if (fuel !== undefined && fuel !== null) {
        document.getElementById('fuel').innerText = Math.round(Number(fuel)) + '%';
    }

    // 3. Tangkap Gear
    let gear = payload.gear;
    if (gear !== undefined && gear !== null) {
        if (gear === 0) gear = 'R';
        document.getElementById('gear').innerText = gear;
    }
});
