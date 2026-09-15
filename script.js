window.addEventListener('message', function(event) {
    let data = event.data;

    // Jika data terbungkus dalam objek 'data' atau 'action' bawaan FiveM NUI
    if (data.data) {
        data = data.data;
    }

    if (!data) return;

    // --- 1. AMBIL SPEED (KECEPATAN) ---
    // Menangkap berbagai kemungkinan variabel speed dari FiveM
    let speed = data.speed ?? data.kmh ?? data.mph ?? data.currSpeed ?? data.vehicleSpeed ?? data.val;
    
    if (speed !== undefined && speed !== null) {
        document.getElementById('speed').innerText = Math.round(Number(speed));
    }

    // --- 2. AMBIL FUEL (BENSIN) ---
    let fuel = data.fuel ?? data.gas ?? data.fuelLevel ?? data.tank;
    
    if (fuel !== undefined && fuel !== null) {
        document.getElementById('fuel').innerText = Math.round(Number(fuel)) + '%';
    }

    // --- 3. AMBIL GEAR (GIGI) ---
    let gear = data.gear ?? data.currentGear;
    
    if (gear !== undefined && gear !== null) {
        if (gear === 0) gear = 'R'; // 0 biasanya posisi Mundur
        document.getElementById('gear').innerText = gear;
    }
});
