angular.module('portfolio')
.config(['$urlRouterProvider','$stateProvider',config])

function config($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        template:'<home-component></home-component>'
    })
    .state('about',{
        url:'/about',
        template:'<about-component></about-component>'
    })
    .state('contact',{
        url:'/contact',
        template:'<contact-component></contact-component>'
    })
    .state('works',{
        url:'/works',
        template:'<works-component></works-component>'
    })
}