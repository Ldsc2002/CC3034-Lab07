function Movements(array: string[], key) {
    let row = 0
	let pos = 0
	let temp = ""
    let move = ""
    
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    if (key === 'ArrowUp') {
        move = "UP"
    } else if (key === 'ArrowDown') {
        move = "DOWN"
    } else if (key === 'ArrowLeft') {
        move = "LEFT"
    } else if (key === 'ArrowRight') {
        move = "RIGHT"
    }
	
    for (let i = 0; i < array.length; i++) {
        if(array[i].includes("p")){
            pos = array[i].indexOf("p")
            row = i
        }
    }

    if(move == "UP"){
	
		temp = array[row - 1][pos]
	
		if(temp != "-" && temp != "+" && temp != "|"){
	
			if(temp == "g"){
				array[row] = array[row].replaceAt(pos, " ")
				alert("You Win!")
	
			}else{			
				array[row-1] = array[row-1].replaceAt(pos, "p")
				array[row] = array[row].replaceAt(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
	
	}
	
	else if(move == "DOWN"){

		temp = array[row +1][pos]
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				array[row] = array[row].replaceAt(pos, " ")
				alert("You Win!")
	
			}else{	
				array[row+1] = array[row+1].replaceAt(pos, "p")
				array[row] = array[row].replaceAt(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}

	}

	
	else if(move == "LEFT"){
	
		let temp = array[row][pos-1]
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				array[row] = array[row].replaceAt(pos, " ")
				alert("You Win!")
			}else{				
				array[row] = array[row].replaceAt(pos-1, "p")
				array[row] = array[row].replaceAt(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
		
	}
	
	else if(move  == "RIGHT"){

		let temp = array[row][pos+1]
	
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				array[row] = array[row].replaceAt(pos, " ")
				alert("You Win!")
			}else{				
				array[row] = array[row].replaceAt(pos+1, "p")
				array[row] = array[row].replaceAt(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
	}

    return array

}

export default Movements;