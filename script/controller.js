var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $window) {

    var IncSum = 0,ExpSum=0;
    $scope.IsDisabled =false; 
    //$scope.addRowButton = true;
    // JSON ARRAY TO POPULATE TABLE.
    $scope.IncArray =
    [   
       { 'IncDate': '', 'DtOfInc': '','IncAmount' : '','ExpDate' : '','DtOfExp' : '','ExpAmount' : '' }
    ];
    //console.log($scope.IncArray);
$scope.typeChange = function(){
    $scope.IsDisabled =false;
  
}



$scope.ExpSum = function(Amount1){
    var e = Amount1; 
    $scope.f = e + d;
    d = $scope.f;
    console.log( $scope.f);
    $scope.IsDisabled =false;
}

 // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
 $scope.addRow = function () { 
    $scope.addRowButton = false;
        var Inc = [];
        Inc.IncDate = $scope.IncDate;
        Inc.DtOfInc = $scope.DtOfInc;
        Inc.IncAmount = $scope.IncAmount;
        Inc.ExpDate = $scope.ExpDate;
        Inc.DtOfExp = $scope.DtOfExp;
        Inc.ExpAmount = $scope.ExpAmount;
         
        if(Inc.IncDate != null && Inc.IncDate != "" && Inc.DtOfInc != null && Inc.DtOfInc != "" && Inc.IncAmount != null && Inc.IncAmount != "" && Inc.ExpDate != null && Inc.ExpDate != "" && Inc.DtOfExp != null && Inc.DtOfExp != "" && Inc.ExpAmount != null && Inc.ExpAmount != "")
        {
            $scope.IncArray.push(Inc);
            console.log($scope.IncArray);

            for(var i = 1;i < $scope.IncArray.length;i++){
                $scope.total = $scope.IncArray[i].IncAmount; 
                //console.log($scope.IncArray[i].IncAmount);
                $scope.total1 = IncSum + $scope.total;
                IncSum =  $scope.total1;
                console.log($scope.total1);
            }
            IncSum= 0; 
            for(var j = 1;j < $scope.IncArray.length;j++){
                $scope.Exptotal = $scope.IncArray[j].ExpAmount; 
                //console.log($scope.IncArray[i].IncAmount);
                $scope.Exptotal1 = ExpSum + $scope.Exptotal;
                ExpSum =  $scope.Exptotal1;
                console.log($scope.Exptotal1);
            }
            ExpSum = 0;
            //$scope.IsDisabled =false;
            $scope.IncDate = "";
            $scope.DtOfInc = "";
            $scope.IncAmount = "";
            $scope.ExpDate = "";
            $scope.DtOfExp = "";
            $scope.ExpAmount = "";
        }
        else{
           alert("you must enter values");
        }
       
};

/*
$scope.Remove = function (index) {
    //Find the record using Index from Array.
    var IncDate = $scope.IncArray[index].IncDate;
    //if ($window.confirm("Do you want to delete: " + IncDate)) {
        //Remove the item from Array using Index.
        $scope.IncArray.splice(index, 1);
    //}
}
*/
});
