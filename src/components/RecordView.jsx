import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useReactMediaRecorder } from "react-media-recorder-2";
import { useNavigate } from "react-router-dom";

const RecordView = () => {

    const [mediaMode, setMediaMode] = useState('video')
    const [cookie, setCookie, removeCookie] = useCookies(['recorderUser']);
    const navigator = useNavigate();
    // const [videoOptions, setVideoOptions] = useEffect({ type: "video/mp4" })



    // const setMediaOptions = () => {

    //     if(mediaMode === 'screen' || mediaMode === 'video'){
    //         setVideoOptions({type: "video/mp4"})
    //     }else{
    //         setVideoOptions(true);
    //     }
    // }

    useEffect(() => {

        // setMediaOptions();


        if (!cookie) {
            alert("User not found. Please login first or signup first.");
            navigator('/login');
        }



    }, [mediaMode]);


    const { status, startRecording, stopRecording, mediaBlobUrl, resumeRecording, pauseRecording } =
        useReactMediaRecorder({  [mediaMode]: true });

    return (
        <div className="mt-10 p-5">

            <select className=" " onChange={(e) => { setMediaMode(e.target.value) }}>
                <option className="ms-5 p-2 bg-gray-300 text-black" value='video'>Video</option>
                <option className="ms-5 p-2 bg-gray-300 text-black" value='screen'>Screen</option>
                <option className="ms-5 p-2 bg-gray-300 text-black" value='audio'>Audio</option>
            </select>

            <div className="px-5"><h1>Status :</h1>
                <p className="text-red-500">{status}</p>
            </div>

            <button className="m5 border text-bold bg-green-500 p-5" onClick={startRecording}>Start Recording</button>
            <button className="m5 border text-bold bg-green-500 p-5" onClick={pauseRecording}>Pause Recording</button>
            <button className="m5 border text-bold bg-green-500 p-5" onClick={resumeRecording}>Resume Recording</button>
            <button className="m5 border text-bold bg-green-500 p-5" onClick={stopRecording}>Stop Recording</button>

            <video src={mediaBlobUrl} controls />



        </div>
    );
};
export default RecordView;