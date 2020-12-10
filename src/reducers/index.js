import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Apologies', duration: '4:15' },
        { title: 'No Apologies1', duration: '5:15' },
        { title: 'No Apologies2', duration: '6:15' },
        { title: 'No Apologies3', duration: '7:15' }
    ]
}

const songSelectedReducer = (state = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
   return state
} 

export default combineReducers({
    songs:songsReducer,
    selectedSong:songSelectedReducer
})