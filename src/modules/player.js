export const PLAY_VIDEO_REQUESTED = 'player/PLAY_VIDEO_REQUESTED'
export const PLAY_VIDEO = 'player/PLAY_VIDEO'
export const PAUSE_VIDEO_REQUESTED = 'player/PAUSE_VIDEO_REQUESTED'
export const PAUSE_VIDEO = 'player/PAUSE_VIDEO'
export const CHANGE_SRC = 'player/CHANGE_SRC'

const initialState = {
  playingItem: null,
  isPlaying: false,
  defaultSrcWebm: 'http://techslides.com/demos/sample-videos/small.webm',
  defaultSrcMp4: 'http://techslides.com/demos/sample-videos/small.mp4'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return {
        ...state,
        isPlaying: true
      }

    case PAUSE_VIDEO:
      return {
        ...state,
        isPlaying: false
      }

    case CHANGE_SRC:
      return {
        ...state,
          defaultSrcWebm: 'http://techslides.com/demos/sample-videos/small2.webm',
          defaultSrcMp4: 'http://techslides.com/demos/sample-videos/small2.mp4',
          isPlaying: true
      }


    default:
      return state
  }
}

export const playVideo = () => {
  return dispatch => {
    dispatch({
      type: PLAY_VIDEO_REQUESTED
    })

    dispatch({
      type: PLAY_VIDEO
    })
  }
}



export const pauseVideo = () => {
  return dispatch => {
    dispatch({
      type: PAUSE_VIDEO_REQUESTED
    })

    dispatch({
      type: PAUSE_VIDEO
    })
  }
}


