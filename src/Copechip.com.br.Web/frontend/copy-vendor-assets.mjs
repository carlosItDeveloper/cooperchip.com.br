import { copyFileSync, mkdirSync } from 'node:fs';

const packages = new URL('../node_modules/', import.meta.url);
const output = new URL('../wwwroot/generated/vendor/', import.meta.url);

const assets = [
    ['tom-select/dist/js/tom-select.complete.min.js', 'tom-select/tom-select.complete.min.js'],
    ['tom-select/dist/js/tom-select.complete.min.js.map', 'tom-select/tom-select.complete.min.js.map'],
    ['tom-select/dist/css/tom-select.min.css', 'tom-select/tom-select.min.css'],
    ['tom-select/dist/css/tom-select.min.css.map', 'tom-select/tom-select.min.css.map'],
    ['tom-select/LICENSE', 'tom-select/LICENSE.txt'],
    ['sweetalert2/dist/sweetalert2.min.js', 'sweetalert2/sweetalert2.min.js'],
    ['sweetalert2/dist/sweetalert2.min.css', 'sweetalert2/sweetalert2.min.css'],
    ['sweetalert2/LICENSE', 'sweetalert2/LICENSE.txt'],
];

for (const [source, relativePath] of assets) {
    const destination = new URL(relativePath, output);
    mkdirSync(new URL('./', destination), { recursive: true });
    copyFileSync(new URL(source, packages), destination);
}
