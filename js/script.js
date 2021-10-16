const num = +prompt(`Введите число:`);
if (num > 1 && !isNaN(num)) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            alert(i);
            break;
        } 
    }    
} 
else {
    alert(`NAN`);
}
