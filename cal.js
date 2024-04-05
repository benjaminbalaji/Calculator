const outputscreen = document.getElementById("outputscreen");

            function display(input)
            {
                    outputscreen.value += input
            }

            function clr()
            {
                    outputscreen.value = ""
            }

            function del()
            {
                outputscreen.value = outputscreen.value.slice(0,-1)
            }

            function equate()
            {
                try{
                    outputscreen.value = eval(outputscreen.value)
                }

                catch(error){
                    alert("invalid value")
                }
            }