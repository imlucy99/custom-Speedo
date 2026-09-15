// 1. Fungsi Utama Update Tampilan
function updateHUD(speed, fuel, gear) {
    if (speed !== undefined && speed !== null) {
        document.getElementById('speed').innerText = Math.round(Number(speed));
    }
    if (fuel !== undefined && fuel !== null) {
        document.getElementById('fuel').innerText = Math.round(Number(fuel)) + '%';
    }
    if (gear !== undefined && gear !== null) {
        document.getElementById('gear').innerText = gear;
    }
}

// 2. Hubungkan ke WebSocket Localhost JGRP (CEF JGRP)
function connectJGRPWebSocket() {
    // Port standar WebSocket CEF JGRP
    const socket = new WebSocket('ws://127.0.0.1:7777/'); 

    socket.onmessage = function(event) {
        try {
            const data = JSON.parse(event.data);
            updateHUD(data.speed, data.fuel || data.gas, data.gear);
        } catch (e) {
            // Jika format teks biasa
        }
    };

    socket.onerror = function() {
        // Retry connection jika belum terhubung
        setTimeout(connectJGRPWebSocket, 2000);
    };
}

// Jalankan WebSocket Connection
connectJGRPWebSocket();

// 3. Cadangan: Menangkap Event Listener Message NUI/CEF
window.addEventListener('message', function(event) {
    let data = event.data;
    if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (e) { return; }
    }
    if (!data) return;

    let speed = data.speed ?? data.speedometer ?? data.kmh ?? data.val;
    let fuel = data.fuel ?? data.gas;
    let gear = data.gear;

    updateHUD(speed, fuel, gear);
});
