
        let acomulador = 0
        let clear
       
        function calcFormatTimer(count) {
            
                let millesimal, seconds, minutes, hours
                
                millesimal = ("00" + Math.floor(count % 100)).slice(-2)
                
                count /= 100
                seconds = ("00" + Math.floor(count % 60)).slice(-2)
                
                count /= 60
                minutes = ('00' + Math.floor(count % 60)).slice(-2)
                
                count /= 60
                hours = ('00' + Math.floor(count % 24)).slice(-2)
            
            return `${hours}:${minutes}:${seconds}.${millesimal}`
        }

        function timer() {
                
            $('#timer').text( calcFormatTimer( acomulador ))
            acomulador++
        }
        
        $('#start').click((e) => {
            if ($(e.target).text() === 'START') {
                
                $(e.target).text('STOP').css('background', 'rgb(216, 22, 22)')
                clear = setInterval(timer, 10)
            }
            else {
                
                $( e.target ).text( 'START' ).css('background','rgb(56, 209, 82)')
                clearInterval( clear ) 
            }
        })

        $('#restart').click( (e) => {
            clearInterval( clear )
	    $( e.target ).text( 'START' ).css('background','rgb(56, 209, 82)')
            $('#timer').text('00:00:00.00')
            acomulador = 0
        })


        
