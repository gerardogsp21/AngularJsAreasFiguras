
app.controller('circuloController', function ($scope) {
    //VistaModelo

    $scope.diametro=0;
    

    $scope.Area=function(){

        var radio=($scope.diametro)/2
        var numpi=(Math.PI);
        var radio2=radio*radio;
        var areasuperficie= numpi*(radio2);
        var tam=$scope.diametro;
      
       if(areasuperficie>0){
         $scope.dibujo={
		     width:tam*10,
		     height: tam*10,
		     '-moz-border-radius':'50%',
		     '-webkit-border-radius':'50%',
		     'border-radius':'50%',
		     background:'#5cb85c'
	        }
	    }else{

	    	 $scope.dibujo={}
	    }

	    
	     
        return  (areasuperficie);      
    }
     
    
	    
	    
   
});