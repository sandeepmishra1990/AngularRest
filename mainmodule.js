(function(){

var app=angular.module("mainmodule",[]);
app.controller("maincontroller",['$scope','$http',function($scope,$http){

$scope.search=function(username){
$http.get("https://api.github.com/users/"+username).then(oncomplete,onerror);
};

var oncomplete=function(response){
$scope.userdetails=response.data;
$http.get($scope.userdetails.repos_url).then(reposedetails,onerror);

};

var reposedetails=function(response){
$scope.repos=response.data;

};

var onerror=function(reason){

$scope.error="opps... errrrrr";

};

}]);




}());