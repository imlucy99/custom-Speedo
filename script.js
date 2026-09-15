// Fungsi untuk memproses data NUI
function handleNuiData(data) {
    if (!data) return;

    // Jika data dibungkus objek action / payload / detail
    let payload = data.data || data.payload || data.detail || data;

    // 1. Update Speed
    let speed = payload.speed ?? payload.kmh ?? payload.mph ?? payload.val ?? payload.speedometer;
    if (speed !== undefined && speed !== null) {
        document.getElementById('speed').innerText = Math.round(Number(speed));
    }

    // 2. Update Fuel
    let fuel = payload.fuel ?? payload.gas ?? payload.fuelLevel;
    if (fuel !== undefined && fuel !== null) {
        document.getElementById('fuel').innerText = Math.round(Number(fuel)) + '%';
    }

    // 3. Update Gear
    let gear = payload.gear;
    if (gear !== undefined && gear !== null) {
        if (gear === 0) gear = 'R';
        document.getElementById('gear').innerText = gear;
    }
}

// Handler A: Dengar event message biasa
window.addEventListener('message', function(event) {
    handleNuiData(event.data);
});

// Handler B: Dengar event dari Parent Window (jika berada di dalam <iframe>)
if (window.parent && window.parent !== window) {
    window.parent.addEventListener('message', function(event) {
        handleNuiData(event.data);
    });
}

// Handler C: Custom Event Dispatch dari FiveM NUI
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('speedometerUpdate', function(e) {
        handleNuiData(e.detail);
    });
});
