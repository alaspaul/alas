





 function calcNumbers(result){

        form.displayResult.value=form.displayResult.value+result;
     
    }

 function comp1(){
 	let operators = [ "+" , "-" , "/" , "*" ];
	const operatornum = (Math.floor(Math.random() * 4));
	const number1 = (Math.floor(Math.random() * 10));
	const number2 = (Math.floor(Math.random() * 10));

	console.log( number1 );
	console.log( operators[operatornum] );
	console.log( number2 );

	const q = number1 + operators[operatornum] + number2;

		
    var x = eval(q);

	console.log(x);

    qq.question.value =  q

 }

function checking1(){
	const y = eval(form.displayResult.value);
    const x = eval(qq.question.value);

    console.log(eval(x + y));

    if( y == x){
    	alert("you're right");
    }else{
    	alert("try again")
    }
}


