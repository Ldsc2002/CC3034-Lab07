import React, { useState, useEffect } from "react";
import "./css/App.css";
import Maze from "./maze";
import Movements from "./movements";
import { hot } from "react-hot-loader/root";

function App() {
    const [width, setWidth] = useState<number>(5);
    const [height, setHeight] = useState<number>(5);
    const [maze, setMaze] = useState<string[]>([])

    
    const handleWidth = event => {
        setWidth(event.target.value);  
    };

    const handleHeight = event => {
        setHeight(event.target.value);  
    };

	const getMaze = () => {
        let array : string[] = []

		fetch("https://maze.juanelcaballo.club/?type=json&w="+width+"&h="+height).then(response => {
		    return response.json();
		}).then(responseInJSON => {
		
			responseInJSON.map(obj1 => {
                let item = "";
                obj1.forEach(i => {
                    if (i == " ") {
                        item = item + " ";
                    } else {
                        item = item + i;
                    }
                });

                array.push(item)
			});

            setMaze(array)
		});
	}

    useEffect(() =>{
		document.onkeydown = (e) => {
			e = e || window.event;
			console.log(e.key)
            let newMaze = Movements(maze, e.key)
            setMaze([...newMaze])
            console.log(maze)
		}
	});

    return (
        <div className="App">
            <input placeholder="Ancho" onChange={handleWidth}/>
            <input placeholder="Ancho" onChange={handleHeight}/>

            <button onClick={getMaze}>New Game</button>

            <Maze maze={maze}/>

        </div>
    );
}

export default hot(App);
