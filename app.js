import Turbo from "turbolinks";

const App = {
    init: () => {
        App.replaceURL();
        Turbo.start();
        Turbo.setProgressBarDelay(100);
    },
    replaceURL: () => {
        window.history.replaceState(null, null, window.location.pathname.split('.html')[0]);
    }
};

document.addEventListener("DOMContentLoaded", App.init);
document.addEventListener("turbolinks:load", App.init);