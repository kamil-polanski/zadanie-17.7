const colors = require(`colors`);
const fs = require(`fs`);
fs.readdir('.', function(err, items) {
    if (err) {
        console.log(err);
    }
    console.log(`Zawartość folderu:`.yellow);
    console.log(items);
    fs.writeFile(`items.txt`, items, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log(`Nazwy pilków zapisano do pliku items.txt`.green)
});