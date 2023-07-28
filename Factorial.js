function factorial(n) {
    let total = 1
    if (n == 0 || n == 1) {
        return total;
    }
    else if (n > 1) {
        for(let i = n; i >= 1; i--) {
            total = total * i
        }
        return total
    }

    
}