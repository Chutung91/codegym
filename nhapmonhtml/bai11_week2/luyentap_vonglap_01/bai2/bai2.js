let nhietDo = +prompt("hay nhap nhiet do");
do {
    if (nhietDo > 100) {
        nhietDo = +prompt("hay giam nhiet do");
    } else { nhietDo = +prompt("hay tang nhiet do"); }
} while ((nhietDo > 100) || (nhietDo < 20));
