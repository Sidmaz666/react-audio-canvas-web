"use client"
import { AudioPlayer, Audio, AudioStream } from "react-audio-canvas"
import { FaPlay, FaPause, FaStop, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa"
import TabSwitch from "./TabSwitch"



export default function AudioExample() {
  
const customVisual = ({
  barHeight,
  barWidth,
  canvasContext,
  x,
  color,
  colorFunction,
  audioDuration,
  dataArray,
  bufferLength,
  canvasNode,
}) => {
  const centerY = canvasNode.height / 2;
  for (let index = 0; index < bufferLength; index++) {
    barHeight = Math.abs(dataArray[index]) / 4;
    if(barHeight >= canvasNode.height / 2) barHeight = barHeight - (Math.ceil(50 * Math.random()))
    if (colorFunction) {
      color = colorFunction({
        barHeight,
        barWidth,
        index,
        dataArray,
        audioDuration,
      });
    }
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x, centerY);
    if (index % 2 === 0) {
      canvasContext.lineTo(x + barWidth / 2, centerY - barHeight);
    } else {
      canvasContext.lineTo(x + barWidth / 2, centerY + barHeight);
    }
    canvasContext.lineTo(x + barWidth, centerY);
    canvasContext.closePath();
    canvasContext.fill();
    x += barWidth;
  }
};

  const progressVisualizer = ({
    barHeight,
    barWidth, 
    canvasContext,
    x,
    color,
    colorFunction, 
    audioDuration, 
    dataArray, 
    canvasNode,
    audioNode
  }) => {
    if(dataArray == null || audioNode == null) return
	for (let index = 0; index < dataArray?.length; index++) {
	  barHeight = canvasNode.height - Math.abs(dataArray[index]) / 2 ;
	  if(colorFunction) color = colorFunction({barHeight, barWidth, index, dataArray});
	  canvasContext.fillStyle = color;
	  canvasContext.fillRect(
	    x,
	    canvasNode.height - barHeight,
	    barWidth,
	    barHeight
	  );
	  x += barWidth;
	}
    function animate(){
      const currentTime = audioNode.currentTime
      const fillWidth = canvasNode.width * (currentTime / audioDuration);  
      canvasContext.fillStyle = 'rgba(0, 0, 255, 1)';
      canvasContext.fillRect(0, canvasNode.height - 8, fillWidth, 5);
      requestAnimationFrame(animate)
    }
    animate()
  }

  return (
    <div className="py-2 flex flex-col space-y-4">
    	<TabSwitch 
        title={"Static <Audio/>"}
    	description={"The following example shows how to render a static <Audio/> component with basic styling using tailwind CSS. The Static Audio element will print the Audio representation in the canvas. We have used CSS to position the duration and current audio time. The following component is not responsive."}
    	code={`import { Audio } from "react-audio-canvas"

<Audio
	width={100}
	height={100}
	dataCount={64}
	src="./assets/audio/sample.mp3" 
	color="pink"
	playButton={<FaPlay/>}
	pauseButton={<FaPause/>}
	enableDuration={true}
	enableCurrentTime={true}
	clickableCanvas={true}
	currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
	durationClassName="absolute top-1/2 right-5 z-50 text-black"
	className="flex w-full flex-row-reverse relative shadow-md"
	toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
	rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
	canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
	cursor-pointer"
/>`}>
    	<Audio
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
	</TabSwitch>
    	<TabSwitch 
        title={"Dynamic <AudioPlayer/>"}
    	description={"The following example shows how to render a dynamic <AudioPlayer/> component with basic styling using tailwind CSS. The following component will animate the bars upon being played, upon pause it won't show any visualization."}
    	code={`<AudioPlayer
       width={100}
       height={100}
       dataCount={64}
       src="./assets/audio/sample.mp3" 
       color="pink"
       playButton={<FaPlay/>}
       pauseButton={<FaPause/>}
       enableDuration={true}
       enableCurrentTime={true}
       clickableCanvas={true}
       currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
       durationClassName="absolute top-1/2 right-5 z-50 text-black"
       className="flex w-full flex-row-reverse relative shadow-md"
       toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
       rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
       canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
       cursor-pointer"
/>`}
    >
    	<AudioPlayer
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
    </TabSwitch>
    	<TabSwitch 
        title={"Audio Player Progress"}
    	description={"The following example shows how to use the <Audio/> component and craft a custom Audio Player with progress bar. The following component will animate the bars upon being played, upon pause it won't show any visualization."}
    	code={`import { Audio } from "react-audio-canvas"

const progressVisualizer = ({
    barHeight,
    barWidth, 
    canvasContext,
    x,
    color,
    colorFunction, 
    audioDuration, 
    dataArray, 
    canvasNode,
    audioNode
  }) => {
    if(dataArray == null || audioNode == null) return
	for (let index = 0; index < dataArray?.length; index++) {
	  barHeight = canvasNode.height - Math.abs(dataArray[index]) / 2 ;
	  if(colorFunction) color = colorFunction({barHeight, barWidth, index, dataArray});
	  canvasContext.fillStyle = color;
	  canvasContext.fillRect(
	    x,
	    canvasNode.height - barHeight,
	    barWidth,
	    barHeight
	  );
	  x += barWidth;
	}
    function animate(){
      const currentTime = audioNode.currentTime
      const fillWidth = canvasNode.width * (currentTime / audioDuration);  
      canvasContext.fillStyle = 'rgba(0, 0, 255, 1)';
      canvasContext.fillRect(0, canvasNode.height - 8, fillWidth, 5);
      requestAnimationFrame(animate)
    }
    animate()
 }

<Audio
	width={100}
	height={100}
	dataCount={64}
	src="./assets/audio/sample.mp3"
	color="pink"
	playButton={<FaPlay/>}
	pauseButton={<FaPause/>}
	enableDuration={true}
	enableCurrentTime={true}
	clickableCanvas={true}
	currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
	durationClassName="absolute top-1/2 right-5 z-50 text-black"
	className="flex w-full flex-row-reverse relative shadow-md"
	toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
	rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
	canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
	cursor-pointer"
	customVisualizer={progressVisualizer}
/>`}>
    	<Audio
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
    		customVisualizer={progressVisualizer}
       />
	</TabSwitch>
    	<TabSwitch 
        title={"Audio Player Controls"}
    	description={"The following example shows how to use the <Audio/> component and craft a custom Audio Player with controls."}
    	code={`import { Audio } from "react-audio-canvas"

    	<Audio
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		hideVolume={false}
    		volumeLevel={true}
	        stopButton={true}
    		customStopButton={
		  <button className="absolute bottom-1.5 right-[22%] text-black" title="Stop Audio">
		    <FaStop/>
		  </button>
		}
    		customVolume={
		  <input type="range" className="" min={0} max={100} />
		}
    		volumeLabelStyle={{color:"black", marginLeft:"0.5rem"}}
    		volumeControlStyle={{ 
		    position:"absolute", bottom:"0%", right:"1.5%", 
		    transform:"translate(-50%,-8%)", display:"flex" }}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
/>`}>
    	<Audio
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		hideVolume={false}
    		volumeLevel={true}
	        stopButton={true}
    		customStopButton={
		  <button className="absolute bottom-1.5 right-[22%] text-black" title="Stop Audio">
		    <FaStop/>
		  </button>
		}
    		customVolume={
		  <input type="range" className="" min={0} max={100} />
		}
    		volumeLabelStyle={{color:"black", marginLeft:"0.5rem"}}
    		volumeControlStyle={{ 
		    position:"absolute", bottom:"0%", right:"1.5%", 
		    transform:"translate(-50%,-8%)", display:"flex" }}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
	</TabSwitch>
    	<TabSwitch 
        title={"Audio From Mic"}
    	description={"The following example shows how to use the <AudioStream/> component to grab the live Audio from the mic. The following component will animate the bars upon being played, upon pause it won't show any visualization."}
    	code={`import { AudioStream } from "react-audio-canvas"
    	<AudioStream
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
		unmuteButton={<FaMicrophoneSlash/>}
    		muteButton={<FaMicrophone/>}
    		customStartButton={
		  <button className="h-full relative z-50">
		    <FaPlay/>
		  </button>
		}
    		customStopButton={
	    	  <button className="absolute right-10 z-50">
		  <FaStop/>
		  </button>
    		}
	        stopButton={true}
    		className="flex w-full flex-row-reverse relative shadow-md"
		toggleClassName="absolute right-2 z-50"
    		controlsClassName="bg-white min-w-[150px] h-auto hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
`}>
    	<AudioStream
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
		unmuteButton={<FaMicrophoneSlash/>}
    		muteButton={<FaMicrophone/>}
    		customStartButton={
		  <button className="h-full relative z-50">
		    <FaPlay/>
		  </button>
		}
    		customStopButton={
	    	  <button className="absolute right-10 z-50">
		  <FaStop/>
		  </button>
    		}
	        stopButton={true}
    		className="flex w-full flex-row-reverse relative shadow-md"
		toggleClassName="absolute right-2 z-50"
    		controlsClassName="bg-white min-w-[150px] h-auto hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
	</TabSwitch>
    	<TabSwitch 
        title={"Dynamic Colors"}
    	description={"The following example shows how to render the <AudioPlayer/> bars with multiple colors."}
    	code={`<AudioPlayer
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		colorFunction={({ barHeight, index }) => {
		  return "hsl(" +  barHeight * index + " 100%, 50%)"
		}}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />`}
    >
    	<AudioPlayer
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		colorFunction={({ barHeight, index }) => {
		  return `hsl(${barHeight * index}, 100%, 50%)`
		}}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
       />
    </TabSwitch>
    	<TabSwitch 
        title={"Custom Visualizer"}
    	description={"The following example shows how to pass a customVisualizer function."}
    	code={`
const customVisual = ({
  barHeight,
  barWidth,
  canvasContext,
  x,
  color,
  colorFunction,
  audioDuration,
  dataArray,
  bufferLength,
  canvasNode,
}) => {
  const centerY = canvasNode.height / 2;
  for (let index = 0; index < bufferLength; index++) {
    barHeight = Math.abs(dataArray[index]) / 4;
    if(barHeight >= canvasNode.height / 2) barHeight = barHeight - (Math.ceil(50 * Math.random()))
    if (colorFunction) {
      color = colorFunction({
        barHeight,
        barWidth,
        index,
        dataArray,
        audioDuration,
      });
    }
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x, centerY);
    if (index % 2 === 0) {
      canvasContext.lineTo(x + barWidth / 2, centerY - barHeight);
    } else {
      canvasContext.lineTo(x + barWidth / 2, centerY + barHeight);
    }
    canvasContext.lineTo(x + barWidth, centerY);
    canvasContext.closePath();
    canvasContext.fill();
    x += barWidth;
  }
};

 <AudioPlayer
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		colorFunction={({ barHeight, index }) => {
		  return "hsl(" +  barHeight * index + " 100%, 50%)"
		}}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
    		customVisualizer={customVisual}
       /> }
`}
    >
    	<AudioPlayer
    		width={100}
    		height={100}
    		dataCount={64}
    		src="./assets/audio/sample.mp3" 
    		color="pink"
    		playButton={<FaPlay/>}
    		pauseButton={<FaPause/>}
    		enableDuration={true}
    		enableCurrentTime={true}
    		clickableCanvas={true}
    		colorFunction={({ barHeight, index }) => {
		  return `hsl(${barHeight * index}, 100%, 50%)`
		}}
    		currentTimeClassName="absolute top-1/2 left-[12%] z-50 text-black"
    		durationClassName="absolute top-1/2 right-5 z-50 text-black"
    		className="flex w-full flex-row-reverse relative shadow-md"
    		toggleClassName="bg-white min-w-[150px] h-full hover:bg-slate-200 outline-none
    		rounded-s-md flex items-center justify-center text-black px-2 border-2 border-gray-500"
    		canvasClassName="bg-white w-full h-[50px] rounded-e-md border-2 border-s-0 border-gray-500
    		cursor-pointer"
    		customVisualizer={customVisual}
       />
    </TabSwitch>
    </div>
  )
}
