import React,{useRef,useEffect,useState} from 'react'

function AudioPlayer({song}) {
    console.log(song)
    const audioElement = new Audio(song.url)
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio(song.url));
    const intervalRef = useRef();
    const isReady = useRef(false);
    const { duration } = audioRef.current;
    const currentPercentage = duration? `${(trackProgress/duration) * 100}%`: "0%";
    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                // toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };
    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };
    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);
    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);
    return (
        <div>
            <audio controls>
                <source src={song.url} type="audio/ogg" />
            </audio>
            <button
                onClick={()=>audioElement.play()}
            >
                play
            </button>
            <button
                onClick={()=>audioElement.pause()}
            >
                pause
            </button>
        </div>
    )
}

export default AudioPlayer