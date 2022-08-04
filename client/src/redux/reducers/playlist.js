import {
} from '../constants/playlist'

const initState = {
    isLoading : false,
    songs :[]
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