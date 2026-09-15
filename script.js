const MPS_TO_MPH = 2.236936;

window.setSpeed = function(speed) {
    const el = document.getElementById('speed');
    if (el) el.innerText = Math.round(speed * MPS_TO_MPH);
};

window.setFuel = function(fuel) {
    const el = document.getElementById('fuel');
    if (el) el.innerText = `${Math.round(fuel * 100)}%`;
};

window.setGear = function(gear) {
    const el = document.getElementById('gear');
    if (!el) return;
    el.innerText = (gear === 0) ? 'R' : String(gear);
};

// --- RPM BAR (0.0 - 1.0 dikonversi ke %) ---
window.setRPM = function(rpm) {
    const barEl = document.getElementById('rpm-bar');
    if (!barEl) return;
    
    let percent = Math.round(rpm * 100);
    percent = Math.max(0, Math.min(100, percent)); // Batasi 0% - 100%
    
    barEl.style.width = `${percent}%`;
};

window.setHealth = function(health) {
    const el = document.getElementById('health');
    if (!el) return;
    let percent = (health > 1) ? Math.round(health / 10) : Math.round(health * 100);
    percent = Math.max(0, Math.min(100, percent));
    el.innerText = `${percent}%`;
};

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

window.setOdometer = function(distance) {
    const el = document.getElementById('odometer');
    if (el) el.innerText = `${distance.toFixed(1)} Miles`;
};

window.setSpeedMode = function(mode) {};
