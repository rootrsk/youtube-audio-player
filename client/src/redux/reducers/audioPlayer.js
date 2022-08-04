import {
    MUSIC_PLAYER_PLAY,
    MUSIC_PLAYER_PAUSE,
    MUSIC_PLAYER_PLAY_NOW
} from '../constants/audioPlayer'

const initState = {
    isPlaying: false,
    queue:[],
    current:null,
    isLoading:false,
    currentlyPlaying:null
}

const audioPlayer = (state=initState, action) => {
    switch (action.type) {
        case MUSIC_PLAYER_PLAY:
            return {
                ...state,
                isPlaying:true
            }
        case MUSIC_PLAYER_PAUSE:
            return {
                ...state,
                isPlaying: false
            }
        case 'SET_CURRENT_PLAYING':
            return {
                ...state,
                currentlyPlaying:action.payload
            }
        case MUSIC_PLAYER_PLAY_NOW:
            return {
                ...state,
                current:action.payload
            }
        default:
            return initState
    }
}

export default audioPlayer