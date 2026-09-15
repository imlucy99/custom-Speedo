window.addEventListener('message', function(event) {
    let item = event.data;

    // Menangkap data dari SendNUIMessage FiveM
    if (item !== undefined) {

        // 1. Update Kecepatan (Speed)
        // FiveM biasa mengirim dalam mph atau kmh, atau raw speed
        if (item.speed !== undefined) {
            document.getElementById('speed').innerText = Math.round(item.speed);
        } else if (item.showHud && item.speed !== undefined) {
            document.getElementById('speed').innerText = Math.round(item.speed);
        }

        // 2. Update Bensin (Fuel)
        if (item.fuel !== undefined) {
            document.getElementById('fuel').innerText = Math.round(item.fuel) + '%';
        }

        // 3. Update Gigi (Gear)
        if (item.gear !== undefined) {
            // Jika gear 0 biasanya R (Mundur) di FiveM
            let gearText = item.gear;
            if (gearText === 0) gearText = 'R';
            document.getElementById('gear').innerText = gearText;
        }

        // Jika HUD FiveM mengirimkan perintah sembunyikan/tampilkan
        if (item.show !== undefined) {
            document.body.style.display = item.show ? "block" : "none";
        }
    }
});
