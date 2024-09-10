 function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    const m = name1.length;
    const p = name2.length;

    let name1_set = new Array(26).fill(0);
    let name2_set = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        name1_set[name1.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
    }

    for (let i = 0; i < p; i++) {
        name2_set[name2.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
    }

    let common_characters = 0;
    for (let i = 0; i < 26; i++) {
        if (name1_set[i] === 1 && name2_set[i] === 1) {
            common_characters++;
        }
    }

    const flames_value = m + p - 2 * common_characters;

    let result = '';
    if ([3, 5, 15].includes(flames_value)) {
        result = "FRIENDS";
    } else if ([10, 8].includes(flames_value)) {
        result = "LOVE";
    } else if ([8, 12].includes(flames_value)) {
        result = "AFFECTION";
    } else if ([6, 11, 13].includes(flames_value)) {
        result = "MARRIAGE";
    } else if ([3, 4, 7, 9, 14].includes(flames_value)) {
        result = "ENEMY";
    } else if (flames_value === 1) {
        result = "SISTER";
    } else {
        result = "Fuck you bitcheso";
    }

    // Redirect to the result page with the result as a query parameter
    window.location.href = `result.html?result=${result}`;
}

// If on the result page, display the result
if (window.location.pathname.endsWith('result.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get('result');
    document.getElementById('resultText').textContent = result;
}
