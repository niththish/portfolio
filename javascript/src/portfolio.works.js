angular.module('portfolio')
.controller('worksController',['$scope',worksController])
.component('worksComponent',{
    templateUrl:'works.html',
    controller:'worksController',
})

function worksController($scope){
    $scope.works=[
        {
            title:"Birthday Manager",
            description:"This is an Angular js application developed to keep track of my friends & family members birthdays",
            link:"https://github.com/niththish/birthdayManager"
        },
        {
            title:"Crime Report",
            description:"This is an Android application developed to report about local crime's inorder to cut the repeating cycle of same kind of crime in same location everytime",
            link:"https://github.com/niththish/crimeReport"
        },
        {
            title:"Tourist Guide",
            description:"This is an Anglar 8 application which will act as a guide for tourist people's visit india",
            link:"https://github.com/niththish/tourist-guide"
        },
        {
            title:"Carti5",
            description:"This is my first Angular js application developed for friend of friend to post blogs about the products",
            link:"https://github.com/niththish/carti5"
        },
        {
            title:"Pathole Classification",
            description:"This is an jupyter notebook developed for the classification of road conditions",
            link:"https://github.com/niththish/pathole_classification"
        },
        {
            title:"Leaf Disease Classification",
            description:"This is an jupyter notebook developed for the classifying varoius leaf disease",
            link:"https://github.com/niththish/leaf-diseases-classification"
        },
        {
            title:"Neo Bookstore",
            description:"This is an full stack application developed using angular and spring boot with my teammates in the hackathon for selling books online",
            link:"https://github.com/iamneowise/BookStore-Application-Angular-FS_Team_129"
        },

        
    ]

    console.log($scope.works);
}