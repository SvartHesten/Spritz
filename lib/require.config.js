require.config({
    paths: {
        jquery: '../lib/jquery-2.1.1',
        knockout: '../lib/knockout-3.1.0',
        bootstrap: '../lib/bootstrap'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});