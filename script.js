let speedMode = 0;

// --- TELEMETRI UTAMA ---
window.setSpeed = function(speed) {
    const speedEl = document.getElementById('speed');
    if (speedEl) speedEl.innerText = Math.round(speed * 3.6);
};

window.setFuel = function(fuel) {
    const fuelEl = document.getElementById('fuel');
    if (fuelEl) fuelEl.innerText = `${Math.round(fuel * 100)}%`;
};

window.setGear = function(gear) {
    const gearEl = document.getElementById('gear');
    if (!gearEl) return;
    let displayGear = String(gear);
    if (gear === 0) displayGear = 'R';
    gearEl.innerText = displayGear;
};

// --- ENGINE HEALTH ---
window.setHealth = function(health) {
    const healthEl = document.getElementById('health');
    if (!healthEl) return;
    // Health masuk dalam format desimal 0.0 - 1.0
    const healthPercent = Math.round(health * 100);
    healthEl.innerText = `${healthPercent}%`;
};

// --- INDIKATOR ---

// Seatbelt (Off = Merah, Active = Hijau)
window.setSeatbelts = function(state) {
    const el = document.getElementById('seatbelt');
    if (!el) return;
    if (state) {
        el.classList.add('active');
        el.classList.remove('off');
    } else {
        el.classList.add('off');
        el.classList.remove('active');
    }
};

// Lock / Unlock Pintu
window.setLock = function(state) {
    const el = document.getElementById('door-lock');
    if (!el) return;
    if (state) {
        el.innerText = "LOCKED";
        el.classList.add('active');
        el.classList.remove('off');
    } else {
        el.innerText = "UNLOCKED";
        el.classList.add('off');
        el.classList.remove('active');
    }
};

// Dummy Functions
window.setEngine = function(state) {};
window.setRPM = function(rpm) {};
window.setHeadlights = function(state) {};
window.setLeftIndicator = function(state) {};
window.setRightIndicator = function(state) {};
window.setOdometer = function(distance) {};
window.setSpeedMode = function(mode) { speedMode = mode; };
