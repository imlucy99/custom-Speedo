window.addEventListener('message', function(event) {
    let data = event.data;

    // Jika data dikirim dalam bentuk string JSON, lakukan parse
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (e) {
            return;
        }
    }

    if (!data) return;

    // 1. Tangkap Kecepatan (Speed)
    let valSpeed = data.speed ?? data.speedometer ?? data.vehicleSpeed ?? data.kmh ?? data.val;
    if (valSpeed !== undefined && valSpeed !== null) {
        document.getElementById('speed').innerText = Math.round(Number(valSpeed));
    }

    // 2. Tangkap Bensin (Fuel / Gas)
    let valFuel = data.fuel ?? data.gas ?? data.vehicleFuel;
    if (valFuel !== undefined && valFuel !== null) {
        document.getElementById('fuel').innerText = Math.round(Number(valFuel)) + '%';
    }

    // 3. Tangkap Gigi (Gear)
    let valGear = data.gear ?? data.vehicleGear;
    if (valGear !== undefined && valGear !== null) {
        document.getElementById('gear').innerText = valGear;
    }
});
