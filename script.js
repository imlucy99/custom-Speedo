let speedMode = 0; // 0 = KMH, 1 = MPH, 2 = Knots

// 1. Fungsi Utama dari JGVRP API
window.setSpeed = function(speed) {
    const speedEl = document.getElementById('speed');
    if (!speedEl) return;
    
    // Kecepatan dari game masuk dalam satuan m/s (meters per second)
    switch(speedMode) {
        case 1: speedEl.innerText = Math.round(speed * 2.236936); break; // MPH
        case 2: speedEl.innerText = Math.round(speed * 1.943844); break; // Knots
        default: speedEl.innerText = Math.round(speed * 3.6); // KMH (Default)
    }
};

window.setFuel = function(fuel) {
    const fuelEl = document.getElementById('fuel');
    if (!fuelEl) return;
    // Bensin masuk angka desimal 0.0 sampai 1.0
    const fuelPercent = Math.round(fuel * 100);
    fuelEl.innerText = `${fuelPercent}%`;
};

window.setGear = function(gear) {
    const gearEl = document.getElementById('gear');
    if (!gearEl) return;
    
    let displayGear = String(gear);
    if (gear === 0) displayGear = 'R'; // Gigi 0 = Mundur
    gearEl.innerText = displayGear;
};

window.setEngine = function(state) {};
window.setRPM = function(rpm) {};
window.setHealth = function(health) {};
window.setHeadlights = function(state) {};
window.setLeftIndicator = function(state) {};
window.setRightIndicator = function(state) {};
window.setSeatbelts = function(state) {};
window.setOdometer = function(distance) {};
window.setSpeedMode = function(mode) { speedMode = mode; };
