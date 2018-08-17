$ready

$("#btnmath").click(function () {
    //First we need to get the user input
    var num1 = Number($("#input1").val());
    var num2 = Number($("#input2").val());
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());

    //next we need to perform the necessary calculations
    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var average = sum / 5;
    var smallest = Math.min(num1, num2, num3, num4, num5);
    var largest = Math.max(num1, num2, num3, num4, num5);

    //finally we need to output the results
    $("#sum").text("The sum is: " + sum);
    $("#product").text("The product is: " + product);
    $("#average").text("The average is: " + average);
    $("#smallest").text("The smallest number is: " + smallest);
    $("#largest").text("The largest number is: " + largest);
});
    


 
        $("#btnfac").clickme(function () {
                var num1 = Number($("#input3").val());

        var factorial = num1 * (num1 - 1);
        $("#factorial").text("The factorial num is :" + Factorial);

    });
            

   
        $("#btnfizz").click(function () {
                 var num1 = Number($("#fbnum1").val());
        var num2 = Number($("#fbnum2").val());

                 for (var loop = 1; loop <= 1000; loop++) {
                     if (loop % num1 == 0 && loop % num2 == 0) {
            $("#fizzbuzz").text("FizzBuzz");
        numbers.push("FizzBuzz");
    }
                     else if (loop % num2 == 0) {
            $("#fizzbuzz").text("Fizz");
        numbers.push("Fizz");
    }
                     else if (loop % num2 == 0) {
            $("#fizzbuzz").text("Buzz");
        numbers.push("Buzz");



    }
                     else {
            $("#fizzbuzz").text("loop");
        numbers.push("loop");
    }
}

var output = numbers.join(',');
$("#fbout").text(output);
});
             