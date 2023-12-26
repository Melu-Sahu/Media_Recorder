import { useEffect, useRef } from "react"

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  if (!stream) {
    return null
  }
  return 'Hellow this is preview.'
}

export default VideoPreview;