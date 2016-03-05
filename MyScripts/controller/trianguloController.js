
app.controller('trianguloController', function ($scope) {
    //VistaModelo

    $scope.Altura=0;
    $scope.Base=0;

    $scope.Area=function(){
        var resul=($scope.Base * $scope.Altura)/2

       if(resul>0){
         $scope.dibujo={
		     width: '0px',
		     height: '0px',
		     'border-right': '100px solid transparent',
		     'border-top': '100px solid transparent',
		     'border-left': '100px solid transparent',
		     'border-bottom': '100px solid #f0ad4e'
	        }
	    }else{

	    	 $scope.dibujo={}
	    }

	    
	     
        return  (resul);      
    }
     
    
	    
	    
   
});

