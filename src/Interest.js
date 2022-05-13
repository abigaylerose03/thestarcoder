import React, {useState, useEffect, Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import stylesheet from './styles.js'
import Button from './Button';
import styles from './Button.module.css';
import appstyles from './App.module.css';
import { useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace'
import testAudio from './game3.mp3';
import Editor from "@monaco-editor/react";
import Navbar from './NavBar.js';
import Axios from 'axios';




function Interest(props) {
	  const navigate = useNavigate();
	  // Embed tutorial video
	  // const {
   //  	iframeSource = '<iframe width="1000px" height="1000px" src="https://replit.com/@AbigaylePeterso/ColorfulScarceIde?embed=true?lite=true"></iframe>'} = props;
  	// 	return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
		  const [code, setCode] = useState(`function hello() {
  console.log("Hello World!");

}`)

		  
 		 const audioTune = new Audio(testAudio);
		  // variable to play audio in loop
		  const [playInLoop, setPlayInLoop] = useState(false);
		 
		  // load audio file on component load
		  useEffect(() => {
		    audioTune.load();
		  }, [])
		 
		  // set the loop of audio tune
		  useEffect(() => {
		    audioTune.loop = playInLoop;
		  }, [playInLoop])
		 
		 useEffect(() => {
		 	audioTune.loop = playInLoop
		 }, [playInLoop]) // uses the state 
		  // play audio sound
		  const playSound = () => {
		    audioTune.play();
		  }

			// pause audio sound
		  const pauseSound = () => {
		    audioTune.pause();
		  }
		 
		  // stop audio sound
		  const stopSound = () => {
		    audioTune.pause();
		    audioTune.currentTime = 0;
		  }

		  const [userCode, setUserCode] = useState(``);
		  const [userLang, setUerLang] = useState("python");
		  const [userTheme, setUserTheme] = useState("vs-code");
		   // State variable to set editors default font size
		  const [fontSize, setFontSize] = useState(20);
		 
		  // State variable to set users input
		  const [userInput, setUserInput] = useState("");
		 
		  // State variable to set users output
		  const [userOutput, setUserOutput] = useState("");
		 
		  // Loading state variable to show spinner
		  // while fetching data
		  const [loading, setLoading] = useState(false);

		  const options = {
		    fontSize: fontSize
		  }
		 
		  // Function to call the compile endpoint
		  function compile() {
		    setLoading(true);
		    if (userCode === ``) {
		      return
		    }
		 
		    // Post request to compile endpoint
		    Axios.post(`http://localhost:8000/compile`, {
		      code: userCode,
		      language: userLang,
		      input: userInput }).then((res) => {
		      setUserOutput(res.data.output);
		    }).then(() => {
		      setLoading(false);
		    })
		  }

		  function clearOutput() {
		  	setUserOutput("");
		  }
 


		return (

			<div className={appstyles.container2}>
			{/*  <input className={appstyles.btn} type="button" value="Play" onClick={playSound}></input>*/}
				 <AceEditor
            style={{
                height: '100vh',
                width: '100%',
            }}
            placeholder='Start Coding'
            mode='javascript'
            theme='monokai'
            name='basic-code-editor'
            onChange={currentCode => setCode(currentCode)}
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
        />
				
			</div>
		
		);
	
	
}

export default Interest;
