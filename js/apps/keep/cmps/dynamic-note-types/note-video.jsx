import { NoteControls } from '../note-controls.jsx'

export function NoteVideo({ note, onDeleteNote }) {
  const videoId = new URLSearchParams(note.info.url).get(
    'https://www.youtube.com/watch?v'
  )

  return (
    <div className="note note-video">
      <iframe
        width={'100%'}
        height={'100%'}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder={0}
        allow={'fullscreen'}
      ></iframe>
      <NoteControls />
    </div>
  )
}
