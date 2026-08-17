(function () {

    const hostname = window.location.hostname;

    const isLocal =
        hostname === "127.0.0.1" ||
        hostname === "localhost" ||
        hostname === "";

    if (isLocal) {

        window.SWIPEX_API_URL =
            "http://127.0.0.1:8000";

    } else {

        window.SWIPEX_API_URL =
            "https://backend-one-delta-70.vercel.app";

    }

})();