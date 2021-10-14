function formatDate(date) {
    let now = +new Date();
    let timestamp = +date;

    if (now - timestamp <= 1) {
        return "прямо сейчас"
    }

    if (now - timestamp <= 30 * 1000) {
        return "30 сек. назад"
    }

    if (now - timestamp <= 5 * 60 * 1000) {
        return "5 мин. назад"
    }

    if (now - timestamp <= 86400 * 4 * 1000) {
        return "вчерашняя дата вроде 31.12.2016, 20:00"
    }


}

console.log(formatDate(new Date(new Date - 1)), "прямо сейчас");
console.log(formatDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)), "вчерашняя дата вроде 31.12.2016, 20:00");