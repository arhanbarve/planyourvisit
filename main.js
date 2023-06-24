// Presetting click indicator to false for all elements
let night1click = false
let night2click = false
let night3click = false
let night4click = false
let people1click = false
let people2click = false
let people3click = false
let people4click = false
let budget1click = false
let budget2click = false
let budget3click = false
let budget4click = false
let businessclick = false
let leisureclick = false

// Asking questions to user
$w.onReady(function planyourvisit() {

    $w("#welcomebutton").onClick((event) => {
        $w("#planyourvisit").changeSlide(1);
    });

    // Business v Leisure Question
    $w("#business").onClick((event) => {
        businessclick = true
        $w("#planyourvisit").changeSlide(2);
    });

    $w("#leisure").onClick((event) => {
        leisureclick = true
        $w("#planyourvisit").changeSlide(2);
    });

    // Stay Length Question
    $w("#night1").onClick((event) => {
        night1click = true
        $w("#planyourvisit").changeSlide(3);
    });

    $w("#night2").onClick((event) => {
        night2click = true
        $w("#planyourvisit").changeSlide(3);
    });

    $w("#night3").onClick((event) => {
        night3click = true
        $w("#planyourvisit").changeSlide(3);
    });

    $w("#night4").onClick((event) => {
        night4click = true
        $w("#planyourvisit").changeSlide(3);
    });

    // Occupancy Question
    $w("#people1").onClick((event) => {
        people1click = true
        $w("#planyourvisit").changeSlide(4);
    });

    $w("#people2").onClick((event) => {
        people2click = true
        $w("#planyourvisit").changeSlide(4);
    });

    $w("#people3").onClick((event) => {
        people3click = true
        $w("#planyourvisit").changeSlide(4);
    });

    $w("#people4").onClick((event) => {
        people4click = true
        $w("#planyourvisit").changeSlide(4);
    });

    // Budget Question and Result x4
    $w("#budget1").onClick((event) => {
        budget1click = true
        if (budget1click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(5);
        } else if (budget1click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(6);
        } else if (budget1click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(7);
        } else if (budget1click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(8);
        } else if (budget2click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(9);
        } else if (budget2click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(10);
        } else if (budget2click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(11);
        } else if (budget2click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(12);
        } else if (budget3click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(13);
        } else if (budget3click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(14);
        } else if (budget3click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(15);
        } else if (budget3click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(16);
        } else if (budget4click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(17);
        } else if (budget4click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(18);
        } else if (budget4click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(19);
        } else if (budget4click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(20);
        } else if (budget1click && businessclick) {
            $w("#planyourvisit").changeSlide(21);
        } else if (budget2click && businessclick) {
            $w("#planyourvisit").changeSlide(22);
        } else if (budget3click && businessclick) {
            $w("#planyourvisit").changeSlide(23);
        } else if (budget4click && businessclick) {
            $w("#planyourvisit").changeSlide(24);
        } else {
            console.log("Error")
        }
    });

    $w("#budget2").onClick((event) => {
        budget2click = true
        if (budget1click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(5);
        } else if (budget1click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(6);
        } else if (budget1click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(7);
        } else if (budget1click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(8);
        } else if (budget2click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(9);
        } else if (budget2click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(10);
        } else if (budget2click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(11);
        } else if (budget2click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(12);
        } else if (budget3click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(13);
        } else if (budget3click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(14);
        } else if (budget3click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(15);
        } else if (budget3click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(16);
        } else if (budget4click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(17);
        } else if (budget4click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(18);
        } else if (budget4click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(19);
        } else if (budget4click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(20);
        } else if (budget1click && businessclick) {
            $w("#planyourvisit").changeSlide(21);
        } else if (budget2click && businessclick) {
            $w("#planyourvisit").changeSlide(22);
        } else if (budget3click && businessclick) {
            $w("#planyourvisit").changeSlide(23);
        } else if (budget4click && businessclick) {
            $w("#planyourvisit").changeSlide(24);
        } else {
            console.log("Error")
        }
    });

    $w("#budget3").onClick((event) => {
        budget3click = true
        if (budget1click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(5);
        } else if (budget1click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(6);
        } else if (budget1click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(7);
        } else if (budget1click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(8);
        } else if (budget2click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(9);
        } else if (budget2click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(10);
        } else if (budget2click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(11);
        } else if (budget2click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(12);
        } else if (budget3click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(13);
        } else if (budget3click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(14);
        } else if (budget3click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(15);
        } else if (budget3click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(16);
        } else if (budget4click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(17);
        } else if (budget4click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(18);
        } else if (budget4click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(19);
        } else if (budget4click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(20);
        } else if (budget1click && businessclick) {
            $w("#planyourvisit").changeSlide(21);
        } else if (budget2click && businessclick) {
            $w("#planyourvisit").changeSlide(22);
        } else if (budget3click && businessclick) {
            $w("#planyourvisit").changeSlide(23);
        } else if (budget4click && businessclick) {
            $w("#planyourvisit").changeSlide(24);
        } else {
            console.log("Error")
        }
    });

    $w("#budget4").onClick((event) => {
        budget4click = true
        if (budget1click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(5);
        } else if (budget1click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(6);
        } else if (budget1click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(7);
        } else if (budget1click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(8);
        } else if (budget2click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(9);
        } else if (budget2click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(10);
        } else if (budget2click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(11);
        } else if (budget2click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(12);
        } else if (budget3click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(13);
        } else if (budget3click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(14);
        } else if (budget3click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(15);
        } else if (budget3click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(16);
        } else if (budget4click && night1click && leisureclick) {
            $w("#planyourvisit").changeSlide(17);
        } else if (budget4click && night2click && leisureclick) {
            $w("#planyourvisit").changeSlide(18);
        } else if (budget4click && night3click && leisureclick) {
            $w("#planyourvisit").changeSlide(19);
        } else if (budget4click && night4click && leisureclick) {
            $w("#planyourvisit").changeSlide(20);
        } else if (budget1click && businessclick) {
            $w("#planyourvisit").changeSlide(21);
        } else if (budget2click && businessclick) {
            $w("#planyourvisit").changeSlide(22);
        } else if (budget3click && businessclick) {
            $w("#planyourvisit").changeSlide(23);
        } else if (budget4click && businessclick) {
            $w("#planyourvisit").changeSlide(24);
        } else {
            console.log("Error")
        }
    });
});
