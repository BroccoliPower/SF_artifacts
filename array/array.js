function inputArray() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        readline.question('Введите элементы массива через пробел: ', input => {
            const array = input.trim().split(' ').map(Number);
            readline.close();
            resolve(array);
        });
    });
}

function findMax(array) {
    if (array.length === 0) return null;
    return Math.max(...array);
}

async function main() {
    try {
        const array = await inputArray();

        const max = findMax(array);

        console.log('Максимальный элемент массива:', max);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

main();
