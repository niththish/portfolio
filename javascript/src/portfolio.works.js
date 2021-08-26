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
            title:"Adobe Designs",
            description:"Some of my design works containing for both mobile and web",
            link:"https://github.com/niththish/Designs"
        },
        {
            title:"Pathole Classification",
            description:"This is an jupyter notebook developed for the classification of road conditions",
            link:"https://github.com/niththish/jupyter-notebook/tree/main/pathole_classification"
        },
        {
            title:"Leaf Disease Classification",
            description:"This is an jupyter notebook developed for the classifying varoius leaf disease",
            link:"https://github.com/niththish/jupyter-notebook/tree/main/leaf-disease-classification"
        },
        {
            title:"Java projects",
            description:"Some of my small java projects related to database connection,file handling,solutions etc",
            link:"https://github.com/niththish/java-programs"
        },

        
    ]

    console.log($scope.works);
}
