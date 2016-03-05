
app.controller('cuadradoController', function ($scope) {
    //VistaModelo

    $scope.lado=0;
    

    $scope.Area=function(){
        var resul=($scope.lado * $scope.lado)
        var tam =$scope.lado * 10;
       if(resul>0){
         $scope.dibujo={ 
			     width:tam, 
			     height:tam, 
			     border:'3px solid #555',
			     background:'#428bca'
	        }
	    }else{

	    	 $scope.dibujo={}
	    }

	    
	     
        return  (resul);      
    }
     
    
	    
	    
   
});