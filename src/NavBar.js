import React, {useState, useRef, useEffect, Component} from 'react';
import Select from 'react-select';
import styles from './Navbar.module.css';
import testAudio from './game3.mp3';
import testAudio2 from './chill.mp3';
import languages from './languages';

const NavBar = ({userLang, setUserLang, userTheme,
				setUserTheme, fontSize, setFontSize, defaultText, setText, music, setMusic}) => {
	// const languages = [
	// 	{ value: "c", label: "C", values: "// code" },
	// 	{ value: "cpp", label: "C++", values: "// code" },
	// 	{ value: "python", label: "Python", values: "// code" },
	// 	{ value: "java", label: "Java", values: "// code" },
	// ];
	
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]

	const musics = [
		{value: "default", label: "Default"},
		{value: "castle", label: "Castle"},
		{value: "hero", label: "Hero"},

	]	


	var audioTune = new Audio(testAudio);
	const audioTune2 = new Audio(testAudio2);

	 const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

	 const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  const play = () => {
  	alert("play");
    // audioPlayer.current.play();
      if(music == "hero") {
    	 audioTune2.play();
      }

      if(music == "castle") {
    	 audioTune.play();
      }
  
  };

  const pause = () => {
    // audioPlayer.current.pause();

    if(music == "castle") {
    	 audioTune.pause();
    }
  
  };

  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const setSpeed = (speed) => {
    audioPlayer.current.playbackRate = speed;
  };

	const [playing, setPlaying] = useState(false);

	  const toggle = () => setPlaying(!playing);

	  useEffect(() => {
	      playing ? audioTune.play() : audioTune.pause();
	    },
	    [playing]
	  );
	  useEffect(() => {
    audioTune.addEventListener('ended', () => setPlaying(false));
    return () => {
      audioTune
      .removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

		

	console.log("is playing", playing);
	const handler = (event) => {
		const value = event.value;
		setUserLang(event.value);

		// reload(true);
	
	}

	const stopSound = () => {
	
		audioTune2.pause();
		
	 
	 

	 
	 
		  	
	}

	const handler2 = (event) => {
		const value = event.value;
		setMusic(value);

		// if(event.value == "castle") {
		// 	console.log(playing)
		// 	audioTune.play();
	
			
		// }

		// if(event.value == "hero") {
			
		// 	audioTune2.play();
		// 	music = false;




		// }
	}

	
	return (
		<div className={styles.navbar}>
			<h1>✨Star Coder Compiler✨</h1>
			<Select options={languages} value={userLang}
					onChange={handler}
					placeholder={userLang} />
			<Select options={themes} value={userTheme}
					onChange={(e) => setUserTheme(e.value)}
					placeholder={userTheme} />

			 <Select options={musics} value={music}
			 		onChange={handler2}
					placeholder={music} />


			<label>Font Size</label>
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value)}}/>


		  	<button onClick={play}>Play Music</button>
		     <button onClick={pause}>Pause Music</button>
			


		</div>
	)
}

export default NavBar;

