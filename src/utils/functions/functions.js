export function bubbleSortPosts(posts) {
    let arrPosts = [...posts];
    for (let i = 0; i < arrPosts.length; i++) {
        for (let j = 0; j < arrPosts.length - i - 1; j++) {
            if (arrPosts[j].postData.date < arrPosts[j + 1].postData.date) {
                let a = arrPosts[j];
                arrPosts[j] = arrPosts[j + 1];
                arrPosts[j + 1] = a;
            }
        }
    }
    return arrPosts;
}

export function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

export function bubbleSort(arr) {
    let i, j;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);

            }
        }

    }
}