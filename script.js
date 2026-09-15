window.addEventListener('message', function(event) {
    const data = event.data;

    // Menangkap data dari CEF game
    if (data) {
        // Update Kecepatan (Speed)
        if (data.speed !== undefined) {
            document.getElementById('speed').innerText = Math.round(data.speed);
        } else if (data.speedometer !== undefined) {
            document.getElementById('speed').innerText = Math.round(data.speedometer);
        }

        // Update Bensin (Fuel / Gas)
        if (data.fuel !== undefined) {
            document.getElementById('fuel').innerText = Math.round(data.fuel) + '%';
        } else if (data.gas !== undefined) {
            document.getElementById('fuel').innerText = Math.round(data.gas) + '%';
        }

        // Update Gigi (Gear)
        if (data.gear !== undefined) {
            document.getElementById('gear').innerText = data.gear;
        }
    }
});
