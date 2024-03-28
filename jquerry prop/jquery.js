$(document).ready(function() {
    $('#password').keyup(function() {
        var password = $(this).val();
        var strength = checkStrength(password);
        updateStrengthMeter(strength);
    });
});

function checkStrength(password) {
    var score = 0;

    // Minimum length
    if (password.length >= 8) {
        score++;
    }

    // Uppercase letter
    if (/[A-Z]/.test(password)) {
        score++;
    }

    // Lowercase letter
    if (/[a-z]/.test(password)) {
        score++;
    }

    // Number
    if (/[0-9]/.test(password)) {
        score++;
    }

    // Special character
    if (/[^a-zA-Z0-9]/.test(password)) {
        score++;
    }

    var strengthText, meterColor;
    switch (score) {
        case 0:
        case 1:
            strengthText = "Weak";
            meterColor = "#df4723";
            break;
        case 2:
            strengthText = "Medium";
            meterColor = "#ffc107";
            break;
        case 3:
        case 4:
        case 5:
            strengthText = "Strong";
            meterColor = "#4CAF50";
            break;
    }

    return {
        text: strengthText,
        color: meterColor
    };
}

function updateStrengthMeter(strength) {
    var meter = $('.strength-meter');
    var percentage = strength.score / 5 * 100;
    meter.css('width', percentage + '%');
    meter.css('background-color', strength.color);
    $('#strength-text').text(strength.text);
}