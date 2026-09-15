let speedMode = 0; // 0 = KMH

// --- API DASAR ---
window.setSpeed = function(speed) {
    const speedEl = document.getElementById('speed');
    if (!speedEl) return;
    speedEl.innerText = Math.round(speed * 3.6); // Convert m/s ke KMH
};

window.setFuel = function(fuel) {
    const fuelEl = document.getElementById('fuel');
    if (!fuelEl) return;
    fuelEl.innerText = `${Math.round(fuel * 100)}%`;
};

window.setGear = function(gear) {
    const gearEl = document.getElementById('gear');
    if (!gearEl) return;
    let displayGear = String(gear);
    if (gear === 0) displayGear = 'R';
    gearEl.innerText = displayGear;
};

// --- TAMBAHAN INDIKATOR ---

// 1. Seatbelt ( true / false )
window.setSeatbelts = function(state) {
    const seatbeltEl = document.getElementById('seatbelt');
    if (!seatbeltEl) return;
    if (state) {
        seatbeltEl.classList.add('active');
        seatbeltEl.classList.remove('off');
    } else {
        seatbeltEl.classList.remove('active');
        seatbeltEl.classList.add('off');
    }
};

// 2. Lock / Unlock Pintu ( true / false )
window.setLock = function(state) {
    const lockEl = document.getElementById('door-lock');
    if (!lockEl) return;
    if (state) {
        lockEl.innerText = "LOCKED";
        lockEl.classList.add('active');
    } else {
        lockEl.innerText = "UNLOCKED";
        lockEl.classList.remove('active');
    }
};

// 3. Lampu Sein Kanan & Kiri
window.setLeftIndicator = function(state) {
    const leftEl = document.getElementById('signal-left');
    if (!leftEl) return;
    if (state) {
        leftEl.classList.add('active');
    } else {
        leftEl.classList.remove('active');
    }
};

window.setRightIndicator = function(state) {
    const rightEl = document.getElementById('signal-right');
    if (!rightEl) return;
    if (state) {
        rightEl.classList.add('active');
    } else {
        rightEl.classList.remove('active');
    }
};

// Callback dummy bawaan JGVRP agar tidak error
window.setEngine = function(state) {};
window.setRPM = function(rpm) {};
window.setHealth = function(health) {};
window.setHeadlights = function(state) {};
window.setOdometer = function(distance) {};
window.setSpeedMode = function(mode) { speedMode = mode; };
