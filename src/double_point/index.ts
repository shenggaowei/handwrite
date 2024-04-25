const doubleSort = (a: number[], b: number[]): number[] => {
    let pl = 0, pr = 0;
    let newList = [];

    while (pr < b.length && pl < a.length) {
        if (a[pl] > b[pr]) {
            newList.push(b[pr]);
            pr++;
        } else {
            newList.push(a[pl]);
            pl++
        }
    }

    while (pl < a.length) {
        newList.push(a[pl]);
        pl++;
    }

    while (pr < b.length) {
        newList.push(b[pr]);
        pr++;
    }

    return newList
}

export default doubleSort;