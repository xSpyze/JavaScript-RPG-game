var poziom = 1;
var zycie = 100;
var zloto = 20;
var completemissions = 0;
var inmission = false;
var wilkhp = 100;
var getrewad = false;
var atak = 0;
var w1 = false;
var w2 = false;
var bandytahp = 150;
var smokhp = 300;
var def = 0;

var city = document.querySelector(".city");
var inside = document.getElementsByClassName("inside");

function logowanie() {

    var nick = document.querySelector(".nick").value;
    if (nick == "") nick = "Bezimienny";

    document.querySelector(".gracontainer").style.display = "block";
    document.querySelector(".logcontainer").style.display = "none";

    document.querySelector("#nickgra").innerHTML = nick;
    checkstats();
    beginning();
}

function beginning() {
    var nick = document.querySelector("#nickgra").innerHTML;
    document.getElementsByClassName("imie")[0].innerHTML = nick;
    document.getElementsByClassName("imie")[1].innerHTML = nick;
}

function checkstats() {
    document.querySelector("#poziom").innerHTML = poziom;
    document.querySelector("#zycie").innerHTML = zycie + "%";
    document.querySelector("#zloto").innerHTML = zloto;

    if (zloto >= 20) {
        document.querySelector("#confirmheal").className = "option";
        document.querySelector("#healprice").className = "green";
    } else {
        document.querySelector("#confirmheal").className = "unableoption";
        document.querySelector("#healprice").className = "red";
    }

    if (w1 == false) {
        if (zloto >= 100) {
            document.querySelector("#weapon1").className = "button";
            document.querySelector("#w1price").className = "green";
        } else {
            document.querySelector("#weapon1").className = "unablebutton";
            document.querySelector("#w1price").className = "red";
        }
    } else {
        document.querySelector("#weapon1").className = "unablebutton";
        document.querySelector("#w1price").className = "green";
        document.querySelector("#w1price").innerHTML = "Zakupiono";
    }

    if (w2 == false)
        if (zloto >= 200) {
            document.querySelector("#weapon2").className = "button";
            document.querySelector("#w2price").className = "green";
        }
    else {
        document.querySelector("#weapon2").className = "unablebutton";
        document.querySelector("#w2price").className = "red";
    } else {
        document.querySelector("#weapon2").className = "unablebutton";
        document.querySelector("#w2price").className = "green";
        document.querySelector("#w2price").innerHTML = "Zakupiono";
    }
}


function karczma() {
    var divsToHide = document.getElementsByClassName("inside");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }
    city.style.display = "none";
    inside[0].style.display = "flex";

    checkstats();
}

function kosciol() {
    city.style.display = "none";
    inside[1].style.display = "flex";

    checkstats();
}

function kowal() {
    city.style.display = "none";
    inside[2].style.display = "flex";

    checkstats();
}

function wyprawa() {
    city.style.display = "none";
    inside[3].style.display = "flex";

    checkstats();
}

document.querySelector(".wejdz").addEventListener("click", logowanie);

document.querySelector("#bkarczma").addEventListener("click", karczma);
document.querySelector("#bkosciol").addEventListener("click", kosciol);
document.querySelector("#bwyprawa").addEventListener("click", wyprawa);
document.querySelector("#bkowal").addEventListener("click", kowal);

var goback = document.getElementsByClassName("back");

goback[0].addEventListener("click", back);
goback[1].addEventListener("click", back);
goback[2].addEventListener("click", back);
goback[3].addEventListener("click", back);
goback[4].addEventListener("click", karczma);
goback[5].addEventListener("click", back);
goback[6].addEventListener("click", back);

function back() {
    var divsToHide = document.getElementsByClassName("inside");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }

    document.querySelector(".city").style.display = "flex";
    checkstats();
}

document.querySelector("#begin1").addEventListener("click", function () {

    document.getElementsByClassName("titlecontainer")[4].innerHTML = "Wilk momentalnie się na ciebie rzucił. Chciałeś się zasłonić ręką, ale on cię w nią ugryzł. <span class='red'>(Stracono 10% życia)</span><br/>Cisnąłeś nim o ziemię, był lekki jak piórko. Tylko zaskomlał i uciekł spowrotem w krzaki.";
    zycie = 90;
    checkstats();
    document.querySelector("#begin1").style.display = "none";
    document.querySelector("#begin2").innerHTML = "Dalej";
});

document.querySelector("#begin2").addEventListener("click", function () {
    city.style.display = "flex";
    inside[4].style.display = "none";
});

function checkmission() {
    if (inmission == true) return;
    if (getrewad == true) return;
    if (completemissions == 0) mission1();
    else if (completemissions == 1) mission2();
    else if (completemissions == 2) mission3();

}

document.querySelector("#checkquests").addEventListener("click", checkmission);

function mission1() {
    inside[0].style.display = "none";
    inside[5].style.display = "flex";
    document.querySelector("#mission2").style.display = "none";
    document.querySelector("#mission3").style.display = "none";
}

function mission2() {
    inside[0].style.display = "none";
    inside[5].style.display = "flex";
    document.querySelector("#mission1").style.display = "none";
    document.querySelector("#mission2").style.display = "block";
    document.querySelector("#missiontalk").innerHTML = "Ostatnio poza wioską widzi się coraz więcej bandytów i złodzieji, którzy napadają na wozy kupieckie i podróżnych. Pozbądź się ich, a sowicie cię za to wynagrodzę. Możesz wziąć tą starą tarczę, miałem ją wyrzucić, ale jest w całkiem dobrym stanie i może ci się przydać."
}

function mission3() {
    inside[0].style.display = "none";
    inside[5].style.display = "flex";
    document.querySelector("#mission2").style.display = "none";
    document.querySelector("#mission3").style.display = "block";
    document.querySelector("#missiontalk").innerHTML = "Mam dla ciebie ostatnie, a zarazem najtrudniejsze zadanie. Musisz znaleźć i zabić smoka, którego widziano w jednej z jaskiń na szycie góry za miastem. Przed wyruszeniem w drogę dokładnie się przygotuj, odzyskaj pełnię zdrowia w kościele i zakup porządny oręż u kowala. I pamiętaj, bądź ostrożny."
}

function startmission1() {
    inmission = true;
    document.querySelector("#checkquests").className = "unableoption";
    document.querySelector("#gotomission").className = "option";
    document.querySelector("#checkquests").innerHTML = "Ukończ najpierw obecne zadanie";
    document.querySelector("#gotomission").innerHTML = "Poszukiwania wilka";
    inside[5].style.display = "none";
    city.style.display = "flex";
}

document.querySelector("#mission1").addEventListener("click", startmission1);

function startmission2() {
    inmission = true;
    document.querySelector("#checkquests").className = "unableoption";
    document.querySelector("#gotomission").className = "option";
    document.querySelector("#checkquests").innerHTML = "Ukończ najpierw obecne zadanie";
    document.querySelector("#gotomission").innerHTML = "Poszukiwania bandytów";
    inside[5].style.display = "none";
    city.style.display = "flex";
}

document.querySelector("#mission2").addEventListener("click", startmission2);

function startmission3() {
    inmission = true;
    document.querySelector("#checkquests").className = "unableoption";
    document.querySelector("#gotomission").className = "option";
    document.querySelector("#checkquests").innerHTML = "Ukończ najpierw obecne zadanie";
    document.querySelector("#gotomission").innerHTML = "Poszukiwania smoka";
    inside[5].style.display = "none";
    city.style.display = "flex";
}

document.querySelector("#mission3").addEventListener("click", startmission3);


function checkgotomission() {
    if (inmission == false) return;

    if (completemissions == 0) {

        inside[3].style.display = "none";
        inside[6].style.display = "flex";
        document.querySelector("#enemy").innerHTML = "Wilk";

        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");
        log.innerHTML = "";

        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";
        log.innerHTML += "Życie Wilk: " + wilkhp + "\n";
    }

    if (completemissions == 1) {

        bandytahp = 150;

        inside[3].style.display = "none";
        inside[6].style.display = "flex";
        document.querySelector("#enemy").innerHTML = "Bandyta";

        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");
        log.innerHTML = "";

        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";
        log.innerHTML += "Życie Bandyta: " + bandytahp + "\n";
    }

    if (completemissions == 2) {

        smokhp = 300;

        inside[3].style.display = "none";
        inside[6].style.display = "flex";
        document.querySelector("#enemy").innerHTML = "Smok";

        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");
        log.innerHTML = "";

        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";
        log.innerHTML += "Życie Smok: " + smokhp + "\n";
    }

}

document.querySelector("#gotomission").addEventListener("click", checkgotomission);

function attack() {

    if (completemissions == 0) {
        var watk = Math.floor((Math.random() * 10) + 5);
        var patk = Math.floor((Math.random() * 20) + 10) + atak;
        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");


        log.innerHTML += "Zaatakowałeś z siłą: " + patk + "\n";
        wilkhp -= patk;
        log.innerHTML += "Życie Wilk: " + wilkhp + "\n";
        log.innerHTML += "Wilk zaatakował z siłą: " + watk + "\n";
        log.innerHTML += "Zablokowano obrażeń: " + def + "\n";
        zycie = zycie - watk + def;
        if(zycie > 100) zycie = 100;
        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";

        log.scrollTop = log.scrollHeight;

        if (wilkhp <= 0) {
            city.style.display = "flex";
            inside[6].style.display = "none";
            document.querySelector("#gotomission").innerHTML = "Nie masz żadnych misji";
            document.querySelector("#gotomission").className = "unableoption";
            inmission = false;
            getrewad = true;
            document.querySelector("#prize").className = "option";
            document.querySelector("#prize").innerHTML = "Odbierz nagrodę";
            completemissions = 1;
        }
        if (zycie <= 0) dead();
        checkstats();
    }

    if (completemissions == 1) {
        var batk = Math.floor((Math.random() * 22) + 16);
        var patk = Math.floor((Math.random() * 20) + 10) + atak;
        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");

        def = Math.floor((Math.random() * 12) + 5);

        log.innerHTML += "Zaatakowałeś z siłą: " + patk + "\n";
        bandytahp -= patk;
        log.innerHTML += "Życie Bandyta: " + bandytahp + "\n";
        log.innerHTML += "Bandyta zaatakował z siłą: " + batk + "\n";
        log.innerHTML += "Zablokowano obrażeń: " + def + "\n";
        zycie = zycie - batk + def;
        if(zycie > 100) zycie = 100;
        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";

        log.scrollTop = log.scrollHeight;

        if (bandytahp <= 0) {
            city.style.display = "flex";
            inside[6].style.display = "none";
            document.querySelector("#gotomission").innerHTML = "Nie masz żadnych misji";
            document.querySelector("#gotomission").className = "unableoption";
            inmission = false;
            getrewad = true;
            document.querySelector("#prize").className = "option";
            document.querySelector("#prize").innerHTML = "Odbierz nagrodę";
            completemissions = 2;
        }
        if (zycie <= 0) dead();
        checkstats();
    }

    if (completemissions == 2) {
        var satk = Math.floor((Math.random() * 22) + 16);
        var patk = Math.floor((Math.random() * 20) + 10) + atak;
        var nick = document.querySelector("#nickgra").innerHTML;
        var log = document.querySelector(".fightlogs");

        def = Math.floor((Math.random() * 15) + 7);

        log.innerHTML += "Zaatakowałeś z siłą: " + patk + "\n";
        smokhp -= patk;
        log.innerHTML += "Życie Smok: " + smokhp + "\n";
        log.innerHTML += "Smok zaatakował z siłą: " + satk + "\n";
        log.innerHTML += "Zablokowano obrażeń: " + def + "\n";
        zycie = zycie - satk + def;
        if(zycie > 100) zycie = 100;
        log.innerHTML += "Życie " + nick + ": " + zycie + "\n";

        log.scrollTop = log.scrollHeight;

        if (smokhp <= 0) {
            city.style.display = "flex";
            inside[6].style.display = "none";
            document.querySelector("#gotomission").innerHTML = "Nie masz żadnych misji";
            document.querySelector("#gotomission").className = "unableoption";
            inmission = false;
            getrewad = true;
            document.querySelector("#prize").className = "option";
            document.querySelector("#prize").innerHTML = "Odbierz nagrodę";
            completemissions = 3;
        }
        if (zycie <= 0) dead();
        checkstats();
    }
}

document.querySelector("#attack").addEventListener("click", attack);

function shop() {
    inside[2].style.display = "none";
    inside[7].style.display = "flex";
    checkstats();
}

document.querySelector("#buy").addEventListener("click", shop);

function heal() {
    inside[1].style.display = "none";
    inside[8].style.display = "flex";
    checkstats();
}

document.querySelector("#heal").addEventListener("click", heal);

function confirmheal() {
    if (zloto < 20) return;
    zloto -= 20;
    zycie = 100;
    city.style.display = "flex";
    inside[8].style.display = "none";
    checkstats();
}

document.querySelector("#confirmheal").addEventListener("click", confirmheal);

function weapon1() {
    if (zloto < 100) return;
    if (w1 == true) return;
    zloto -= 100;
    atak = 20;
    w1 = true;
    city.style.display = "flex";
    inside[7].style.display = "none";
    checkstats();
}

document.querySelector("#weapon1").addEventListener("click", weapon1);

function weapon2() {
    if (zloto < 200) return;
    if (w2 == true) return;
    zloto -= 200;
    atak = 40;
    w2 = true;
    city.style.display = "flex";
    inside[7].style.display = "none";
    checkstats();
}

document.querySelector("#weapon2").addEventListener("click", weapon2);

function checkprize() {
    if (getrewad == false) return;
    if (completemissions == 0) return;

    else if (completemissions == 1) {
        zloto += 100;
        poziom += 1;
        getrewad = false;
        document.querySelector("#prize").className = "unableoption";
        document.querySelector("#prize").innerHTML = "Brak nagród do odebrania";
        document.querySelector("#checkquests").className = "option";
        document.querySelector("#checkquests").innerHTML = "Poszukuję pracy, nie masz może dla mnie jakiegoś zadania?";
    } else if (completemissions == 2) {
        zloto += 220;
        poziom += 1;
        getrewad = false;
        document.querySelector("#prize").className = "unableoption";
        document.querySelector("#prize").innerHTML = "Brak nagród do odebrania";
        document.querySelector("#checkquests").className = "option";
        document.querySelector("#checkquests").innerHTML = "Poszukuję pracy, nie masz może dla mnie jakiegoś zadania?";
    } else if (completemissions == 3) {
        zloto += 1000;
        poziom += 1;
        document.querySelector("#prize").className = "unableoption";
        document.querySelector("#prize").innerHTML = "Brak nagród do odebrania";
        document.querySelector("#checkquests").innerHTML = "Wykonałeś wszystkie zadania";
        document.querySelector("#bkoniec").style.display = "flex";
    }
    checkstats();
}

document.querySelector("#prize").addEventListener("click", checkprize);

function dead() {
    document.querySelector(".gracontainer").style.display = "none";
    document.querySelector(".text").innerHTML = "NIE ŻYJESZ"
    document.querySelector(".retry").style.display = "flex";
}

document.querySelector("#bkoniec").addEventListener("click", function () {
    document.querySelector(".gracontainer").style.display = "none";
    document.querySelector(".text").innerHTML = "UKOŃCZYŁEŚ GRĘ!"
    document.querySelector(".retry").style.display = "flex";
});

document.querySelector(".retry").addEventListener("click", function () {
    location.reload();
});

// Copyright by Michał Michasiów