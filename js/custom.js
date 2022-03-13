
function calculator(operation){

  
    let result, result_1, result_2,  mix_result;
    let  oper =  operation.value;
    let value_1 = document.getElementById("num-1").innerHTML;
    let value_2 = document.getElementById("num-2").innerHTML;
    console.log(value_2)
    value_1 = parseInt(value_1);
    value_2 = parseInt(value_2);


    switch(oper){
        case "add": 
                 result = value_1 + value_2;
                 alert(result)
                break;
        case "sub": 
                   result = value_1 - value_2;
                   alert(result)
                 break;
        case "multi": 
                  result = value_1 * value_2;
                  alert(result)
                break;
        case "div": 
                  result = value_1 / value_2;
                  alert(result)
                break;
        case "mod": 
                  result = value_1 % value_2;
                  alert(result)
                break; 
        case "incre": 
                  result_1 =  value_1 + 1;
                  result_2 = value_2 + 1;
                  mix_result  =  result_1  + " , " + result_2
                  alert(mix_result);


        case "decre":
                  result_1 = value_1 - 1;
                  result_2 = value_2 - 1;  
                  mix_result  =  result_1  + " , " + result_2
                  alert(mix_result);
        

        default:
               
                result  = "invaild";

    }
    
   
   
      
    

}