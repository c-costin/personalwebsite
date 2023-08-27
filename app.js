import Turbo from "turbolinks";

const App = {
    init: () => {
        Turbo.start();
        Turbo.setProgressBarDelay(100);
    },
};

document.addEventListener("DOMContentLoaded", App.init);
document.addEventListener("turbolinks:load", App.init);