// Konversi m/s ke MPH (1 m/s = 2.236936 MPH)
const MPS_TO_MPH = 2.236936;
let indicatorsState = 0;

// 1. Kecepatan (MPH)
window.setSpeed = function(speed) {
    const el = document.getElementById('speed');
    if (el) el.innerText = Math.round(speed * MPS_TO_MPH);
};

// 2. Fuel (0.0 - 1.0)
window.setFuel = function(fuel) {
    const el = document.getElementById('fuel');
    if (el) el.innerText = `${Math.round(fuel * 100)}%`;
};

// 3. Gear
window.setGear = function(gear) {
    const el = document.getElementById('gear');
    if (!el) return;
    el.innerText = (gear === 0) ? 'R' : String(gear);
};

// 4. RPM (0.0 - 1.0)
window.setRPM = function(rpm) {
    const el = document.getElementById('rpm');
    if (el) el.innerText = `${Math.round(rpm * 100)}%`;
};

// 5. Engine Health (Menangani skala desimal 0-1 maupun skala GTA 0-1000)
window.setHealth = function(health) {
    const el = document.getElementById('health');
    if (!el) return;
    let percent = (health > 1) ? Math.round(health / 10) : Math.round(health * 100);
    percent = Math.max(0, Math.min(100, percent));
    el.innerText = `${percent}%`;
};

// 6. Engine On/Off
window.setEngine = function(state) {
    const el = document.getElementById('engine-state');
    if (!el) return;
    if (state) {
        el.innerText = "ENG ON";
        el.className = "badge active";
    } else {
        el.innerText = "ENG OFF";
        el.className = "badge off";
    }
};

// 7. Headlights Status (0: Off, 1: On, 2: High Beam)
window.setHeadlights = function(state) {
    const el = document.getElementById('headlights');
    if (!el) return;
    if (state === 2) {
        el.innerText = "HIGH BEAM";
        el.className = "status-badge high";
    } else if (state === 1) {
        el.innerText = "LIGHTS ON";
        el.className = "status-badge on";
    } else {
        el.innerText = "LIGHTS OFF";
        el.className = "status-badge off";
    }
};

// 8 & 9. Lampu Sein (Kiri & Kanan)
window.setLeftIndicator = function(state) {
    const el = document.getElementById('signal-left');
    if (!el) return;
    if (state) {
        el.classList.add('active');
        el.classList.remove('off');
    } else {
        el.classList.add('off');
        el.classList.remove('active');
    }
};

window.setRightIndicator = function(state) {
    const el = document.getElementById('signal-right');
    if (!el) return;
    if (state) {
        el.classList.add('active');
        el.classList.remove('off');
    } else {
        el.classList.add('off');
        el.classList.remove('active');
    }
};

// 10. Seatbelt (Off = Merah, Active = Hijau)
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

// 11. Odometer (Miles)
window.setOdometer = function(distance) {
    const el = document.getElementById('odometer');
    if (el) el.innerText = `${distance.toFixed(1)} Miles`;
};

// 12. Dummy Mode Callback
window.setSpeedMode = function(mode) {};
