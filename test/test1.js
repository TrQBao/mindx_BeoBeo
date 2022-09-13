const x = parseInt(prompt("Nhap so a: "));
const y = parseInt(prompt("Nhap so b: "));

function Primecheck(num) {
    if (num == 2) {
        return true;
    }
    else if (num < 2) {
        return false;
    }
    else {
        let count = 0;
        for (let i = num; i > 0; i--) {
            if (num % i == 0) {
                count++;
            }       
            else {
                continue;
            }
        }
        if (count == 2) {
            return true;
        }
        else {
            return false;
        }
    }
}

for (let i = y; i > x; i--) {
    if(Primecheck(i)) {
        document.write(i + ';')
    }
}