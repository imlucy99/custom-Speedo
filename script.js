let speedMode = 0; // 0 = KMH

// --- API TELEMETRI UTAMA ---
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

// --- INDIKATOR ---

// 1. Seatbelt (Merah kalau mati, Hijau kalau aktif)
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

// 2. Lock / Unlock Pintu
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

// 3. Lampu Sein Kiri & Kanan
function updateIndicator(elementId, state) {
    const el = document.getElementById(elementId);
    if (!el) return;
    // Menerima masukan boolean (true/false) maupun angka (1/0)
    if (state === true || state === 1) {
        el.classList.add('active');
        el.classList.remove('off');
    } else {
        el.classList.add('off');
        el.classList.remove('active');
    }
}

window.setLeftIndicator = function(state) {
    updateIndicator('signal-left', state);
};

window.setRightIndicator = function(state) {
    updateIndicator('signal-right', state);
};

// Dummy functions
window.setEngine = function(state) {};
window.setRPM = function(rpm) {};
window.setHealth = function(health) {};
window.setHeadlights = function(state) {};
window.setOdometer = function(distance) {};
window.setSpeedMode = function(mode) { speedMode = mode; };
