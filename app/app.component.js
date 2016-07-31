;(function(app){


    var Component = ng.core.Component;
    var RandomQuoteService = app.RandomQuoteService;
    var RandomQuoteComponent = app.RandomQuoteComponent;

    app.AppComponent = Component({
        selector: 'my-app',
        providers: [RandomQuoteService],
        directives: [RandomQuoteComponent],
        template: '<h1>Hello World !</h1>'+'<random-quote></random-quote>'
    })
    .Class({
        constructor: function AppComponent(){
            //empty
        }
    })

}(window.app || (window.app = {})));