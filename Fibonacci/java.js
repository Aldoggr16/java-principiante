// FIBONACCI
    
var a,b,result;

a=0;
b=1;
result=b;
for (let i = 0; i < 9; i++) {
        result=a+b;
        a=b;
        b=result;
        document.write(result+'<br/>');
    
    }