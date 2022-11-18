function pesta() {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
    audio.play();

    $("#hero").removeClass("hero-a");
    $("#hero").addClass("hero-b");
    $("video").remove();
    $("#hero").prepend('<video id="background-video" autoplay loop muted poster="https://live.staticflickr.com/307/30754681024_5b916d99a3_b.jpg"><source src="https://drive.google.com/uc?export=download&id=1wSHGiiuWzX4OHTOTLGm9wDLqkIye7mUi" type="video/mp4"></video>');
    window.setTimeout(function() {
        var count = 200;
        var defaults = {
        origin: { y: 0.7 }
        };
    
        function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
        }
    
        fire(0.25, {
        spread: 26,
        startVelocity: 55,
        });
        fire(0.2, {
        spread: 60,
        });
        fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 45,
        });
    
        window.setTimeout(function() {
            var duration = (221 * 1000); //3 menit 41 detik
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };
    
            function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
            }
    
            var interval = setInterval(function() {
                var timeLeft = animationEnd - Date.now();
        
                if (timeLeft <= 0) {
                    $("#hero").removeClass("hero-b");
                    $("#hero").addClass("hero-a");
                    $("video").remove();
                    audio.currentTime = 0;
                    audio.pause();
                    return clearInterval(interval);
                }
        
                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            }, 2000);
        }, 2000);
    },500);
}
function hideorshow() {
    if ($(".card.hidden")[0]){
        $(".card").removeClass("hidden");
        $(".card").addClass("show");
    } else {
        $(".card").addClass("hidden");
    }
}
