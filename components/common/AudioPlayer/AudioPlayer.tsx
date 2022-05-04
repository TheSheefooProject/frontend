import React, { useState, useEffect } from 'react'

const useAudio = (url: string) => {
  const [audio, setAudio] = useState<any>(null)

  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    setAudio(new Audio(url))
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])
  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  return [playing, toggle]
}

const AudioPlayer = (props: { url?: string }) => {
  const { url = '/sounds/test.wav', ...restProps } = props
  const [playing, toggle] = useAudio(url)

  return (
    <div>
      <button onClick={() => toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default AudioPlayer
