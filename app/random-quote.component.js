;(function(app){


    var Component = ng.core.Component;
    var RandomQuoteService = app.RandomQuoteService;


    app.RandomQuoteComponent = Component({
        selector: 'random-quote',
        template: '<p>{{ quote.line }} - {{ quote.author }}</p>'
    })
    .Class({
        constructor: [RandomQuoteService, function RandomQuoteComponent(randomQuoteService){
            var self = this;
            randomQuoteService.generateRandomQuote(3, 2000, function(quote){
                self.quote = quote;
            })
        }]
    })



}(window.app || (window.app = {})));