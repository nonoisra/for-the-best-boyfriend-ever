// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Aaron",

    // The title that appears in the browser tab
    // You can use emojis! 💜💜💜💜💜💜💜💜
    pageTitle: "Will You Be My Valentine? 💗",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
floatingEmojis: {
    hearts: ['💜', '🌸', '💜', '🎀', '💜', '💕', '🍓', '💜'],  // Heart emojis
    bears: ['🧸', '🧸', '🍆']  // Bear emojis
},

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AWWWWW BABYYYY YOU LOVE ME SO MUCHH I LOVE YOU TOOOO 🥰🎀💕",  // Shows when they go past 5000%
        high: "eeeee yayayyyy i love you tooo!!! 🌸🌷 ",              // Shows when they go past 1000%
        normal: "if you dont go higher ill get you pregnant 🥺🥺"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "OMGGGGG YAYYAYAYAYY THANK YOU BABY THANK YOU THANK YOU THANK YOU I LOVE YOU IM SO LUCKY EEEE",
        message: "EEEEEEEE I LOVE YOU I LOVE YOUUUUUUUUUU 💞💞💞",
        emojis: "˚˖𓍢ִ໋✧🛍️˚.🎀༘⋆"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dxh0dlrpx/video/upload/v1768707039/itsy-bitsy-spider-goes-to-spain-instrumental-195024_kta2pe.mp3",
    startText: "Playy music 💗ྀི",
    stopText: "Stop music 🎀",
    volume: 0.5
    }
    
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
