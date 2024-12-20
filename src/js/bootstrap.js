// Import only the Bootstrap components we need
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import Tooltip from "bootstrap/js/dist/tooltip";
import Popover from "bootstrap/js/dist/popover";




document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
    new Popover(popover)
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltip => {
    new Tooltip(tooltip)
});