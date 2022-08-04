import './css/main.css'
import React,{ useEffect, useState } from 'react'
import UserRouter from './routes/UserRouter';
import AdminRouter from './routes/AdminRouter';
import GeneralRouter from './routes/GeneralRouter';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux'
import { play, pause} from './redux/actions/audioPlayer'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useRef } from 'react';
function App() {
	const [audioList,setAudioList] = useState([])
	const [isPlayerLoaded,setIsPlayerLoaded] = useState(false)
	const ref = useRef()
	const [options,setOptions] = useState({
		glassBg:true,
		defaultPosition: {
			right: 30,
			bottom: 30,
		},
		remember:true,
		showMiniModeCover: true,
		autoPlay: true,
		showMiniProcessBar:true,
		showDownload: false,
	})
	const song = useSelector((state) => {
		if (state.audioPlayer.current) {
			return [{
				name: state.audioPlayer.current.title,
				singer: 'Jay Chou',
				cover: state.audioPlayer.current ? state.audioPlayer.current.thumbnail : 'https://i.ibb.co/CHqW7CB/MDUDE.png',
				musicSrc: state.audioPlayer.current && state.audioPlayer.current.src,
			}]
		}
		return []
	})
	useEffect(() => {
		if(ref){
			console.log(ref.current)
			if(ref.current){
				ref.current.play()
			}
		}
	}, [ref.current ? ref.current.getPlayInfo:ref.current]);
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<GeneralRouter />} />
					<Route path='/app/*' element={<UserRouter />} />
					<Route path='/admin/*' element={<AdminRouter />} />
				</Routes>
			</BrowserRouter>
			<div
				style={{
					position:'relative',
					bottom:0,
					right:-10,
					zIndex:200
				}}
			>
				{true && <ReactJkMusicPlayer  
					onAudioPlay={play}
					onAudioPause={pause}
					audioLists={song}
					className='music-player'
					{...options}
					onAudioListsPanelChange={(e)=>console.log(e)}
					onAudioListsChange={(a,b,c)=>{
						if(ref.current){
							if(ref.current.state.audioLists.length){
								ref.current.updatePlayIndex(ref.current.state.audioLists.length)
							}
						}
					}}
					style={{
						zIndex:200
					}}
					autoPlay
					ref={ref}
				/>}
			</div>
			{console.log(ref)}
		</div>
		
	)
}

export default App