/**
 * Created by vipintomar on 1/25/2016.
 */
angular.module("myApp",['ui.router'])
    .controller("myController",function($scope){
        $scope.books = ["Turning Points","Thinks and grow rich","Its Happen For a reason"];
        $scope.movies = ["Fast & furious 1","Fast & furious2","Fast & furious3"];
    })
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'home.html'
                //template:'<p>This is home page</p>'
            })
            .state('home.list1',{
                url:'/list1',
                template:'<ul><li ng-repeat="book in books">{{book}}</li></ul>'
            })
            .state('home.list2',{
                url:'/list2',
                template:'<ul><li ng-repeat="movie in movies">{{movie}}</li></ul>'
            })
            .state('about',{
                url:'/about',
                //template:'<p>This is about us page.<br/><a ui-sref=".state1">State1</a><a ui-sref=".state2">State2</a></p><div ui-view="viewA"></div><div ui-view="viewB"></div>',
                views:{
                    '':{template:'<p>This is about us page.'},
                    'viewA':{template:'This is about.viewA'},
                    'viewB':{template:'This is about.viewB'},
                }
            })
    })
