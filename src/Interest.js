import React, {useState, useRef, useEffect, Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import stylesheet from './styles.js'
import btnstyles from './CompilerButton.module.css';
import appstyles from './Compiler.module.css';
import { useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace'
import testAudio from './game3.mp3';
import Editor from "@monaco-editor/react";
import NavBar from './NavBar.js';
import Axios from 'axios';
import spinner from './spinner.svg';
import languages from './languages';
import languages2 from './newlang';




function Interest(props) {
	  const navigate = useNavigate();
	  // Embed tutorial video
	  // const {
   //  	iframeSource = '<iframe width="1000px" height="1000px" src="https://replit.com/@AbigaylePeterso/ColorfulScarceIde?embed=true?lite=true"></iframe>'} = props;
  	// 	return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
		  

		  
 		  const audioTune = new Audio(testAudio);
		  // variable to play audio in loop
		  const [playInLoop, setPlayInLoop] = useState(false);
		 
		  // load audio file on component load
		
		 
		 //  // set the loop of audio tune
		 //  useEffect(() => {
		 //    audioTune.loop = playInLoop;
		 //  }, [playInLoop])
		 
		 // useEffect(() => {
		 // 	audioTune.loop = playInLoop
		 // }, [playInLoop]) // uses the state 
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
		  // coding language
		  const [userLang, setUserLang] = useState("python");
		  const file = languages2[userLang];

		  const [userTheme, setUserTheme] = useState("vs-dark");
		  // set the vibe, aesthetic 
		  const [vibe, setVibe] = useState("default");
		  // set the music 
		  const [music, setMusic] = useState("default");


		   // State variable to set editors default font size
		  const [fontSize, setFontSize] = useState(20);
		 
		  // State variable to set users input
		  const [userInput, setUserInput] = useState("");
		 
		  // State variable to set users output
		  const [userOutput, setUserOutput] = useState("");
		 
		  // Loading state variable to show spinner
		  // while fetching data
		  const [loading, setLoading] = useState(false);

		  const [defaultText, setText] = useState("");

		  const [isPython, setPython] = useState(true);
		  const [isChange, setChange] = useState(false);

		  // useEffect(() => {
		  // 	  	setText("blah")
		  // 	  	if(userLang == "python" && isPython) {

		  // 			setText("# Enter Code");
		  			
		  			
		  		
		  // 	  	} else if(userLang == "java") {
		  // 	  		console.log("test");
		  // 	  		setText("pls work");
		  // 	  	}

		  // 	  	// if(music == "castle") {
		  // 	  	// 	audioTune.play();
		  // 	  	// }
		     


		  // }, [defaultText, userLang]);
		

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

		
 		
 		// function playmusic() {
 		// 	if(music == "default") {
 		// 		audioTune.play(); 
 		// 	}
 		// }

 	
 		// 	useEffect(() => {
			//    if(userLang == "c") {
 		// 			setText("i hate tihs lol");
 		// 		}

 		// 		if(userLang == "c") {
 		// 			setText("test");
 		// 		}

			// }, [userLang])
 		
 
 		const editorRef = useRef(null);
 		console.log(file.value);

 		  useEffect(() => {
				   if(file.language == "c") {
				   		setText("asfasd");
				   }
				  }, [file.language]);
 		
		return (

			<div className={appstyles.App}>
			{/* the main nav bar */ }
		     	<NavBar
		     		userLang={userLang} setUserLang={setUserLang}
		     		userTheme={userTheme} setUserTheme={setUserTheme}
		     		fontSize={fontSize} setFontSize={setFontSize}
		     		music={music} setMusic={setMusic}
		     		defaultText={defaultText} setText={setText}
		     	/>

		     


		     	<div className={appstyles.main}>
		     		<div className={appstyles.leftcontainer}>

		     			<Editor
		     				options={options}
		     				height="calc(100vh - 50px)"
		     				width="100%"
		     				theme={userTheme}
		     				language={file.language}
		     				defaultValue={defaultText}
		     				onChange={(value) => {setUserCode(value)}}
		     				 onMount={(editor) => (editorRef.current = editor)}
		     			/>
		     	
		     		</div>

				  <div className={appstyles.rightcontainer}>
		          <h4>Input:</h4>
		          <div className={appstyles.inputbox}>
		            <textarea id={appstyles.codeinp} onChange=
		              {(e) => setUserInput(e.target.value)}>
		            </textarea>
		          </div>
		          <h4>Output:</h4>
		          {loading ? (
		            <div className={appstyles.spinnerbox}>
		              <img src={spinner} alt="Loading..." />
		            </div>
		          ) : (
		            <div className={appstyles.outputbox}>
		              <pre>{userOutput}</pre>
		            
		              <button onClick={() => { clearOutput() }}
		                 className={btnstyles.clearbtn}>
		                 Clear All
		              </button>

		            </div>
		          )}
		        </div>
		         <button className={btnstyles.runbtn} onClick={() => compile()}>
		     		Run Code
		     	</button>
		     	
		      </div>
		    </div>
		  );
		}
 
export default Interest;
 

