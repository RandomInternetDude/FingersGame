	   document.getElementById("checkFingers").onclick = function() {
                
                var randomNumber = Math.random();
                
                randomNumber = randomNumber * 6;
                
                randomNumber = Math.floor(randomNumber);

                magicword = "sauce";
                
                if (document.getElementById("fingers").value == randomNumber) {
                    
                    alert("Wow, You got it right! Thats amazing!");
                    
                } else {
                     alert("Nope! The number was " + randomNumber);

                    }

            }