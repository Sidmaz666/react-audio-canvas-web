import Code from "@/components/global/Code";

export default function ContentContainer() {
return (
  <div
    className="flex flex-col space-y-2 w-full 
    bg-slate-200/50 dark:bg-gray-800/20 items-center p-2"
  >
    <Installation />
    <Imports />
    <AudioDocs />
    <AudioPlayerDocs />
    <AudioStreamDocs />
    <UseAudioDocs/>
    <UseCanvasDocs/>
    <DetectNotesDocs/>
    <Notes/>
    <Developement/>
    <Contributions/>
    <FootNote />
  </div>
);
}

function FootNote() {
return (
  <div className="h-52 flex justify-center items-end pb-4 w-full relative space-x-2">
    <span className="text-xs md:text-md">
      Documented by{" "}
      <a href="#" className="text-blue-500">
	Sidmaz666
      </a>{" "}
      © 2024
    </span>
  </div>
);
}

function Installation() {
return (
  <div
    className="p-4 text-gray-900 dark:text-gray-100 w-full"
    id="installation"
  >
    <h1 className="text-xl md:text-3xl font-bold mb-4">Introduction</h1>
    <p className="text-md md:text-lg">
      The React library offers components like{" "}
      <code className="text-blue-500">&lt;AudioPlayer /&gt;</code>,{" "}
      <code className="text-blue-500">&lt;Audio /&gt;</code>, and{" "}
      <code className="text-blue-500">&lt;AudioStream /&gt;</code> for
      versatile audio playback, visualization, and streaming, including
      support for dynamic and static visualizations. Its hooks, such as{" "}
      <code className="text-blue-500">useAudio</code>,{" "}
      <code className="text-blue-500">useCanvas</code>, and{" "}
      <code className="text-blue-500">detectNotes</code>, provide
      comprehensive audio handling, canvas management, and musical note
      detection features.
    </p>
    <h1 className="text-xl md:text-3xl font-bold my-4">Compaitibility</h1>
    <p className="text-md md:text-lg">
      This library is compatible with React supporting libraries such as{" "}
      <code className="text-blue-500">Vite</code>,{" "}
      <code className="text-blue-500">Next.js</code>, and{" "}
      <code className="text-blue-500">Remix</code>.
    </p>
    <h1 className="text-xl md:text-3xl font-bold my-4">Installation</h1>
    <Code>{"npm install react-audio-canvas"}</Code>
  </div>
);
}

function Imports() {
return (
  <div className="p-4 text-gray-900 dark:text-gray-100 w-full" id="imports">
    <h1 className="text-xl md:text-3xl font-bold mb-4">Imports</h1>
    <p className="text-md md:text-lg mt-3 mb-2">Available React Components</p>
    <Code language="javascript">
      {'import {AudioPlayer, Audio, AudioStream} from "react-audio-canvas"'}
    </Code>
    <p className="text-md md:text-lg mt-3 mb-2">Available React Hooks</p>
    <Code language="javascript">
      {
	'import { useAudio, useCanvas, detectNotes } from "react-audio-canvas"'
      }
    </Code>
  </div>
);
}

function AudioDocs() {
return (
  <div className="p-6 w-full" id="audio">
    <h2 className="text-xl md:text-3xl font-bold mb-4">{`<Audio/>`}</h2>
    <p className="mb-4">
      The <code className="text-blue-500">&lt;Audio/&gt;</code> component is a
      versatile and customizable audio player with various options for
      controlling playback, visualization, volume, and more.It shows the full
      Audio visualization upon load, the visualization is not dynamic, it's
      more on like a spectrograph of the audio input.It allows integration
      with custom visualizers, buttons, and volume controls. Below is a
      detailed documentation of the props available for this component.
    </p>
    <h3 className="text-lg md:text-2xl font-bold my-4">Props</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
	<thead>
	  <tr className="bg-slate-200/50 dark:bg-gray-800/50">
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Prop Name
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Default Value
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Valid Value / Description
	    </th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>src</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>null</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      The audio source URL as a string.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>clickableCanvas</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, clicking on the canvas toggles
	      audio playback.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>width</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>500</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The width of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>height</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>100</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The height of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controls</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, playback controls are displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>pauseButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Pause"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> or <code>React.Component</code> - Text or a
	      custom React component to display for the pause button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>playButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Play"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> or <code>React.Component</code> - Text or a
	      custom React component to display for the play button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>dataCount</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>64</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The number of data points used in the
	      visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>className</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controlsClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>constrolsStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom volume control
	      component. Example:{" "}
	      <code>
		&lt;input type="range" min={"{"}0{"}"} max={"{"}100{"}"} /&gt;
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLevel</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the current volume level is
	      displayed as a percentage.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>enableDuration</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the audio duration is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>durationClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the duration
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>durationStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the duration element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>enableCurrentTime</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the current playback time is
	      displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>currentTimeClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the current time
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>currentTimeStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the current time
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>hideVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the volume control is hidden.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeControlClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classess for the main element of the volume control.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeControlStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>{`{}`}</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline style for the main element of the volume control.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classess for the volume label. 
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>{`{}`}</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> -  Inline style for the volume label. 
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelIndicator</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"%"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Volume level indicator.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>disableVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the volume is set to 0.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>style</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the play/pause
	      button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the play/pause button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>stopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, a stop button is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customStopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom stop button component.
	      Example:{" "}
	      <code>
		&lt;button onClick={"{"}stopAudio{"}"}&gt;Stop&lt;/button&gt;
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barWidth</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Width of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barHeight</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Height of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>horizontalOffset</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>0</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Horizontal offset for the visualizer
	      drawing.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>color</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"black"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Default color for the visualizer bars.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>colorFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function to determine the color
	      of each bar. Example:{" "}
	      <code>
		({"{"}barHeight, barWidth, index, dataArray, audioDuration
		{"}"}) =&gt; {"{"} return ``rgb(${"{"}barHeight * index{"}"}
		,0,0)``; {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customVisualizer</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom visualizer function. Example:{" "}
	      <code>
		({"{"}barHeight,barWidth, canvasContext,x,color,colorFunction,
		audioDuration, dataArray, bufferLength, canvasNode {"}"})
		=&gt; {"{"} canvasContext.fillRect(x, y, width, height); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function that receives audio
	      data. Example:{" "}
	      <code>
		({"{"}audioNode,audioFrequencyData,audioDuration{"}"}) =&gt;{" "}
		{"{"} console.log({"{"}
		audioNode,audioFrequencyData,audioDuration{"}"}); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	</tbody>
      </table>
    </div>
    <h3 className="text-lg md:text-2xl font-bold my-4">Example Usage</h3>
    <Code language="javascript" floatCopyButton={true}>
      {`
import {Audio} from "react-audio-canvas"

const CustomVisualizer =  ({
      barHeight,barWidth,canvasContext,x, color, colorFunction, dataArray,canvasNode
      }) => {
      if(dataArray == null) return
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
};

export default function App() {
      return (
	      <Audio
		src="path/to/audio/file.mp3"
		width={600}
		height={150}
		customVisualizer={CustomVisualizer}
		pauseButton={<button>Pause Audio</button>}
		playButton={<button>Play Audio</button>}
		customStopButton={<button>Stop Audio</button>}
		hideVolume={false}
		customVolume={<input type="range" min={0} max={100} />
	      />
      );
}`}
    </Code>
    <h3 className="text-lg md:text-2xl font-bold my-4">Structure</h3>
    <Code language="pug" floatCopyButton={true}>
      {`
- div
- className: (dynamic, based on 'className' prop)
- style: (dynamic, based on 'style' prop)

|__ Canvas
    - onClick: (optional, based on 'clickableCanvas' prop)
    - className: (dynamic, based on 'canvasClassName' prop)
    - style: (dynamic, based on 'canvasStyle' prop)
    
|__ (optional) div
    - className: (dynamic, based on 'controlsClassName' prop)
    - style: (dynamic, based on 'constrolsStyle' prop)
    
    |__ button
	- className: (dynamic, based on 'toggleClassName' prop)
	- style: (dynamic, based on 'toggleStyle' prop)
	- onClick: toggleAudio
	- Text: (Play/Pause based on 'isPlaying')
	
    |__ (optional) button
	- onClick: stopAudio
	- Text: Stop
	
	|__ (optional) CustomStopButton
	    - onClick: stopAudio

    |__ (optional) div (for custom volume control)
	- className: (dynamic, based on 'className' prop)
	- style: (dynamic, based on 'style' prop)
	
	|__ input[type="range"]
	    - min: 0
	    - max: 100
	    - value: audioVolume
	    - onChange: setVolume
	    
	|__ (optional) p
	    - className: (dynamic, based on 'labelClassName' prop)
	    - style: (dynamic, based on 'labelStyle' prop)
	    - Text: (audioVolume percentage + 'labelIndicator')
	    
    |__ (optional) input[type="range"]
	- min: 0
	- max: 100
	- value: audioVolume
	- onChange: setVolume
	
	|__ (optional) p
	    - Text: (audioVolume percentage)

    |__ (optional) p (for current time display)
	- className: (dynamic, based on 'currentTimeClassName' prop)
	- style: (dynamic, based on 'currentTimeStyle' prop)
	- Text: (formatted current time)

    |__ (optional) p (for duration display)
	- className: (dynamic, based on 'durationClassName' prop)
	- style: (dynamic, based on 'durationStyle' prop)
	- Text: (formatted duration)
`}
    </Code>
  </div>
);
}

function AudioPlayerDocs() {
return (
  <div className="p-6 w-full" id="audioplayer">
    <h2 className="text-xl md:text-3xl font-bold mb-4">{`<AudioPlayer/>`}</h2>
    <p className="mb-4">
      The <code className="text-blue-500">&lt;AudioPlayer/&gt;</code>{" "}
      component is a customizable audio player with various options for
      controlling playback, visualization, volume, and more. It shows Audio
      visualization while the audio is playing, the visualization is dynamic.
      It allows you to integrate custom visualizers, buttons, and volume
      controls. Below is a detailed documentation of the props available for
      this component.
    </p>
    <h3 className="text-lg md:text-2xl font-bold my-4">Props</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
	<thead>
	  <tr className="bg-slate-200/50 dark:bg-gray-800/50">
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Prop Name
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Default Value
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Valid Value / Description
	    </th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>src</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>null</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      The audio source URL as a string.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>clickableCanvas</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, clicking on the canvas toggles
	      audio playback.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>width</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>500</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The width of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>height</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>100</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The height of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controls</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, playback controls are displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>pauseButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Pause"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> or <code>React.Component</code> - Text or a
	      custom React component to display for the pause button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>playButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Play"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> or <code>React.Component</code> - Text or a
	      custom React component to display for the play button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>dataCount</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>64</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The number of data points used in the
	      visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>className</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controlsClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>constrolsStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom volume control
	      component. Example:{" "}
	      <code>
		&lt;input type="range" min={"{"}0{"}"} max={"{"}100{"}"} /&gt;
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLevel</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the current volume level is
	      displayed as a percentage.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>enableDuration</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the audio duration is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>durationClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the duration
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>durationStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the duration element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>enableCurrentTime</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the current playback time is
	      displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>currentTimeClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the current time
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>currentTimeStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the current time
	      element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>hideVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the volume control is hidden.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeControlClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classess for the main element of the volume control.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeControlStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>{`{}`}</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline style for the main element of the volume control.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classess for the volume label. 
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>{`{}`}</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> -  Inline style for the volume label. 
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>volumeLabelIndicator</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"%"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Volume level indicator.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>disableVolume</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, the volume is set to 0.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>style</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the play/pause
	      button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the play/pause button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>stopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, a stop button is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customStopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom stop button component.
	      Example: <code>&lt;button&gt;Stop&lt;/button&gt;</code>.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barWidth</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Width of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barHeight</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Height of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>horizontalOffset</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>0</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Horizontal offset for the visualizer
	      drawing.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>color</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"black"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Default color for the visualizer bars.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>colorFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function to determine the color
	      of each bar. Example:{" "}
	      <code>
		({"{"}barHeight, barWidth, index, dataArray, audioDuration
		{"}"}) =&gt; {"{"} return ``rgb(${"{"}barHeight * index{"}"}
		,0,0)``; {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customVisualizer</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom visualizer function. Example:{" "}
	      <code>
		({"{"}barHeight,barWidth, canvasContext,x,color,colorFunction,
		audioDuration, dataArray, bufferLength, canvasNode {"}"})
		=&gt; {"{"} canvasContext.fillRect(x, y, width, height); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function that receives audio
	      data. Example:{" "}
	      <code>
		({"{"}audioNode,audioDuration, dataArray, bufferLength{"}"})
		=&gt; {"{"} console.log({"{"}audioNode,audioDuration,
		dataArray, bufferLength{"}"}); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	</tbody>
      </table>
    </div>
    <h3 className="text-lg md:text-2xl font-bold my-4">Example Usage</h3>
    <Code language="javascript" floatCopyButton={true}>
      {`import {AudioPlayer} from "react-audio-canvas"

const CustomVisualizer = ({
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
// Custom visualizer logic
for (let i = 0; i < bufferLength; i++) {
  // Drawing bars
  barHeight = Math.abs(dataArray[i]) / 2.5;
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, canvasNode.height - barHeight, barWidth, barHeight);
  x += barWidth;
}
};

export default function App() {
      return (
	      <AudioPlayer
		src="path/to/audio/file.mp3"
		width={600}
		height={150}
		customVisualizer={CustomVisualizer}
		pauseButton={<button>Pause Audio</button>}
		playButton={<button>Play Audio</button>}
		customStopButton={<button>Stop Audio</button>}
		hideVolume={false}
		customVolume={<input type="range" min={0} max={100} />
	      />
      );
}
`}
    </Code>
    <h3 className="text-lg md:text-2xl font-bold my-4">Structure</h3>
    <Code language="pug" floatCopyButton={true}>
      {`
- div
- className: (dynamic, based on 'className' prop)
- style: (dynamic, based on 'style' prop)

|__ Canvas
    - onClick: (optional, based on 'clickableCanvas' prop)
    - className: (dynamic, based on 'canvasClassName' prop)
    - style: (dynamic, based on 'canvasStyle' prop)

|__ (optional) div
    - className: (dynamic, based on 'controlsClassName' prop)
    - style: (dynamic, based on 'constrolsStyle' prop)

    |__ button
	- className: (dynamic, based on 'toggleClassName' prop)
	- style: (dynamic, based on 'toggleStyle' prop)
	- onClick: toggleAudio
	- Text: (Play/Pause based on 'isPlaying')

    |__ (optional) button
	- onClick: stopAudio
	- Text: Stop

	|__ (optional) CustomStopButton
	    - onClick: stopAudio

    |__ (optional) div (for custom volume control)
	- className: (dynamic, based on 'className' prop)
	- style: (dynamic, based on 'style' prop)

	|__ input[type="range"]
	    - min: 0
	    - max: 100
	    - value: audioVolume
	    - onChange: setVolume

	|__ (optional) p
	    - className: (dynamic, based on 'labelClassName' prop)
	    - style: (dynamic, based on 'labelStyle' prop)
	    - Text: (audioVolume percentage + 'labelIndicator')

    |__ (optional) input[type="range"]
	- min: 0
	- max: 100
	- value: audioVolume
	- onChange: setVolume

	|__ (optional) p
	    - Text: (audioVolume percentage)

    |__ (optional) p (for current time display)
	- className: (dynamic, based on 'currentTimeClassName' prop)
	- style: (dynamic, based on 'currentTimeStyle' prop)
	- Text: (formatted current time)

    |__ (optional) p (for duration display)
	- className: (dynamic, based on 'durationClassName' prop)
	- style: (dynamic, based on 'durationStyle' prop)
	- Text: (formatted duration)
`}
    </Code>
  </div>
);
}

function AudioStreamDocs() {
return (
  <div className="p-6 w-full" id="audiostream">
    <h2 className="text-xl md:text-3xl font-bold mb-4">{`<AudioStream/>`}</h2>
    <p className="mb-4">
      The <code className="text-blue-500">&lt;AudioStream/&gt;</code>{" "}
      component provides a customizable interface for streaming audio with
      various controls and visualizations. It supports microphone input,
      custom visualizations, and configurable buttons for controlling audio
      playback and visualization. Below is the detailed documentation of the
      props available for this component.
    </p>
    <h3 className="text-lg md:text-2xl font-bold my-4">Props</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
	<thead>
	  <tr className="bg-slate-200/50 dark:bg-gray-800/50">
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Prop Name
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Default Value
	    </th>
	    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      Valid Value / Description
	    </th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>clickableCanvas</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, clicking on the canvas toggles
	      the microphone state (mute/unmute).
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>width</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>500</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The width of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>height</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>100</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The height of the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controls</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, playback controls are displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>muteButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Mute"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Text to display for the mute button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>unmuteButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"Unmute"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Text to display for the unmute button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>dataCount</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>64</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - The number of data points used in the
	      visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>className</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>controlsClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>constrolsStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the controls{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>style</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the root{" "}
	      <code>div</code> element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>canvasStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the canvas element.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleClassName</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>""</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Custom CSS classes for the mute/unmute
	      button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>toggleStyle</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>object</code> - Inline styles for the mute/unmute button.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>stopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, a stop button is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customStopButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom stop button component.
	      Example: <code>&lt;button&gt;Stop&lt;/button&gt;</code>.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>startButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>true</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>boolean</code> - If true, a start button is displayed.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customStartButton</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>React.Component</code> - A custom start button component.
	      Example: <code>&lt;button&gt;Start&lt;/button&gt;</code>.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barWidth</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Width of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>barHeight</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Height of each bar in the visualizer.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>horizontalOffset</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>0</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>number</code> - Horizontal offset for the visualizer
	      drawing.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>color</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>"black"</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>string</code> - Default color for the visualizer bars.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>colorFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function to determine the color
	      of each bar. Example:{" "}
	      <code>
		({"{"}barHeight, barWidth, index, dataArray, audioDuration
		{"}"}) =&gt; {"{"} return \
	      </code>
	      rgb(${"{"}barHeight * index{"}"},0,0)<code>; {"}"}</code>.
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customVisualizer</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom visualizer function. Example:{" "}
	      <code>
		({"{"}barHeight, barWidth, canvasContext, x, color,
		colorFunction, audioDuration, dataArray, bufferLength,
		canvasNode {"}"}) =&gt; {"{"} canvasContext.fillRect(x, y,
		width, height); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	  <tr>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">
	      <strong>customFunction</strong>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>false</code>
	    </td>
	    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
	      <code>function</code> - Custom function that receives audio
	      data. Example:{" "}
	      <code>
		({"{"}audioNode,microphoneSource, mediaStream{"}"}) =&gt;{" "}
		{"{"} console.log({"{"}audioNode,microphoneSource, mediaStream
		{"}"}); {"}"}
	      </code>
	      .
	    </td>
	  </tr>
	</tbody>
      </table>
    </div>
    <h3 className="text-lg md:text-2xl font-bold my-4">Example Usage</h3>
    <Code language="javascript" floatCopyButton={true}>
      {`import {AudioStream} from "react-audio-canvas";

export default function App(params) {
      return (
	  <AudioStream
	    width={600}
	    height={150}
	    muteButton={<button>Mute Audio</button>}
	    unmuteButton={<button>Unmute Audio</button>}
	    colorFunction={({ barHeight, barWidth, index }) => {
		  return 'rgb(' + barHeight * index + ',0,0)' 
	    }}
      )
}
/>
`}
    </Code>
    <h3 className="text-lg md:text-2xl font-bold my-4">Structure</h3>
    <Code language="pug" floatCopyButton={true}>
      {`
- div
- className: (dynamic, based on 'className' prop)
- style: (dynamic, based on 'style' prop)

|__ Canvas
    - onClick: (optional, based on 'clickableCanvas' prop)
    - className: (dynamic, based on 'canvasClassName' prop)
    - style: (dynamic, based on 'canvasStyle' prop)

|__ (optional) div
    - className: (dynamic, based on 'controlsClassName' prop)
    - style: (dynamic, based on 'constrolsStyle' prop)

    |__ (optional) button
	- onClick: (if 'customStartButton' is false) captureMicrophone
	- Text: Start

	|__ (optional) CustomStartButton
	    - onClick: captureMicrophone

    |__ button
	- className: (dynamic, based on 'toggleClassName' prop)
	- style: (dynamic, based on 'toggleStyle' prop)
	- onClick: toggleMic
	- Text: (isMute ? unmuteButton : muteButton)

    |__ (optional) button
	- onClick: (if 'customStopButton' is false) stopMicrophone
	- Text: Stop

	|__ (optional) CustomStopButton
	    - onClick: stopMicrophone

`}
    </Code>
  </div>
);
}

function Notes(){
return(
    <div
      className="p-4 text-gray-900 dark:text-gray-100 w-full"
      id="notes"
    >
    <h1 className="text-xl md:text-3xl font-bold mb-4">Notes</h1>
    <ul className="list-disc list-inside">
      <li>The valid values for <code className="text-blue-500">dataCount</code> prop are :- <code className="text-pink-500">32</code>,<code className="text-pink-500">64</code>,<code className="text-pink-500">128</code>,<code className="text-pink-500">256</code>, <code className="text-pink-500">512</code>, <code className="text-pink-500">1024</code>, <code className="text-pink-500">2048</code> and <code className="text-pink-500">4096</code>.</li>
<li>Ensure that your application has the appropriate permissions to access the microphone.</li>
<li>The <code>audioToBase64</code> function supports both <code>File</code> and <code>Blob</code> sources, as well as URLs.</li>
      </ul>
    </div>
  )
}

function UseAudioDocs(){
  return(
      <div
	className="p-4 text-gray-900 dark:text-gray-100 w-full"
    	id="useaudio"
      >
      <h1 className="text-xl md:text-3xl font-bold mb-4">
    	useAudio
      </h1>
  <p className="mb-4">
    The <code className="text-blue-500">useAudio</code> hook provides a comprehensive set of functionalities for handling audio in a React application. This hook supports playing, pausing, stopping, and controlling audio, as well as capturing and analyzing audio from a microphone. It also includes utilities for converting audio to Base64 and detecting musical notes.
   </p>
    <h2 className="text-xl md:text-2xl font-bold mb-4">
	API
    </h2>
<Code language="javascript" floatCopyButton={true}>
{`import {useAudio} from "react-audio-canvas";
useAudio(src, fftSize = 64, detector = false)`}
</Code>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Parameters
    </h2>
<ul className="list-disc list-inside">
<li><code className="text-blue-500">src</code> (<code className="text-pink-500">string | File | Blob</code>): The source of the audio. Can be a URL, File, or Blob.</li>
<li><code className="text-blue-500">fftSize</code> (<code className="text-pink-500">number</code>): The size of the FFT used for frequency analysis. Defaults to <code>64</code>.</li>
<li><code className="text-blue-500">detector</code> (<code className="text-pink-500">boolean</code>): If <code>true</code>, enables pitch detection. Defaults to <code>false</code>.</li>
</ul>
  <h2 className="text-xl md:text-2xl font-bold my-4">
	Returns
  </h2>
<p className="mb-4">An object containing the following properties and methods:</p>
<ul className="list-disc list-inside">
<li><code className="text-blue-500">audioNode</code>: The <code  className="text-pink-500">Audio</code> element used for playback.</li>
<li><code className="text-blue-500">audioContext</code>: The <code className="text-pink-500">AudioContext</code> used for audio processing.</li>
<li><code className="text-blue-500">audioSource</code>: The <code className="text-pink-500">MediaElementSourceNode</code> created from the <code>audioNode</code>.</li>
<li><code className="text-blue-500">isPlaying</code>: A boolean indicating whether the audio is currently playing.</li>
<li><code className="text-blue-500">play()</code>: Starts playback of the audio.</li>
<li><code className="text-blue-500">pause()</code>: Pauses playback of the audio.</li>
<li><code className="text-blue-500">toggleAudio()</code>: Toggles between playing and pausing the audio.</li>
<li><code className="text-blue-500">stopAudio()</code>: Stops playback and resets the audio to the beginning.</li>
<li><code className="text-blue-500">setVolume(volume)</code>: Sets the volume of the audio. <code className="text-pink-500">volume</code> is a number between <code className="text-pink-500">0</code> and <code className="text-pink-500">100</code>.</li>
<li><code className="text-blue-500">analyzer</code>: The <code className="text-pink-500">AnalyserNode</code> used for frequency analysis.</li>
<li><code className="text-blue-500">bufferLength</code>: The length of the frequency data array.</li>
<li><code className="text-blue-500">dataArray</code>: The frequency data array.</li>
<li><code className="text-blue-500">audioToBase64(source)</code>: Converts an audio source to a Base64 encoded string. Supports <code className="text-pink-500">File</code>, <code className="text-pink-500">Blob</code>, and URL sources.</li>
<li><code className="text-blue-500">captureMicrophone()</code>: Starts capturing audio from the microphone.</li>
<li><code className="text-blue-500">muteMicrophone()</code>: Mutes the microphone.</li>
<li><code className="text-blue-500">unmuteMicrophone()</code>: Unmutes the microphone.</li>
<li><code className="text-blue-500">stopMicrophone()</code>: Stops capturing audio from the microphone and cleans up resources.</li>
<li><code className="text-blue-500">microphoneSource</code>: The <code className="text-pink-500">MediaStreamAudioSourceNode</code> created from the microphone stream.</li>
<li><code className="text-blue-500"	>mediaStream</code>: The <code className="text-pink-500">MediaStream</code> obtained from the microphone.</li>
<li><code className="text-blue-500">isMute</code>: A boolean indicating whether the microphone is muted.</li>
<li><code className="text-blue-500">audioFrequencyData</code>: The frequency data array for the audio.</li>
<li><code className="text-blue-500">audioDuration</code>: The duration of the audio in seconds.</li>
<li><code className="text-blue-500">audioCurrentTime</code>: The current playback time of the audio in seconds.</li>
<li><code className="text-blue-500">audioVolume</code>: The current volume level of the audio.</li>
<li><code className="text-blue-500">detectedNotes</code>: An array of detected musical notes if <code className="text-pink-500">detector</code> is enabled.</li>
</ul>
<p className="mt-3">For further customization or issues, please refer to the source code or open an issue on the repository.</p>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Example Usage
    </h2>
  <Code language="javascript" floatCopyButton={true}>{`import React, { useEffect } from 'react';
import {useAudio} from 'react-audio-canvas';

function AudioComponent() {
  const {
    audioNode,
    isPlaying,
    play,
    pause,
    stopAudio,
    setVolume,
    captureMicrophone,
    muteMicrophone,
    unmuteMicrophone,
    stopMicrophone,
    detectedNotes
  } = useAudio('https://example.com/audio.mp3', 2048, true);

  useEffect(() => {
    captureMicrophone();
  }, [captureMicrophone]);

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stopAudio}>Stop</button>
      <button onClick={() => setVolume(50)}>Set Volume to 50%</button>
      <button onClick={muteMicrophone}>Mute Microphone</button>
      <button onClick={unmuteMicrophone}>Unmute Microphone</button>
      <button onClick={stopMicrophone}>Stop Microphone</button>
      <div>
        Detected Notes: {detectedNotes.join(', ')}
      </div>
    </div>
  );
}
`}</Code>
  </div>
  )
}


function UseCanvasDocs(){
  return(
      <div
	className="p-4 text-gray-900 dark:text-gray-100 w-full"
    	id="usecanvas"
      >
      <h1 className="text-xl md:text-3xl font-bold mb-4">
    	useCanvas
      </h1>
  <p className="mb-4">
    The <code className="text-blue-500">useCanvas</code>hook provides a convenient way to manage a canvas element and its context in a React component. It returns a <code className="text-blue-500">Canvas</code> component that you can use to render a <code className="text-blue-500">{`<canvas>`}</code> element and provides access to the canvas context through the <code className="text-blue-500">canvasContext</code> property.   </p>
    <h2 className="text-xl md:text-2xl font-bold mb-4">
	API
    </h2>
<Code language="javascript" floatCopyButton={true}>
{`import {useCanvas} from "react-audio-canvas";
useCanvas(width,height)`}
</Code>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Parameters
    </h2>
<ul className="list-disc list-inside">
 <li>
      <code className="text-blue-500">width</code> (number): The width of the canvas.
    </li>
    <li>
      <code className="text-blue-500">height</code> (number): The height of the canvas.
    </li></ul>
  <h2 className="text-xl md:text-2xl font-bold my-4">
	Returns
  </h2>
  <p className="mb-4">
    The <code className="text-blue-500">useCanvas</code> hook returns an object with the following
    properties:
  </p>
<ul className="list-disc list-inside">
    <li>
      <code className="text-blue-500">Canvas</code>: A React component that renders a{" "}
      <code className="text-pink-500">&lt;canvas&gt;</code> element with the specified width and height.
    </li>
    <li>
      <code className="text-blue-500">canvasContext</code>: The 2D rendering context of the canvas, or{" "}
      <code className="text-pink-500">null</code> if the canvas is not yet rendered. Or <code className="text-pink-500">null</code> if the canvas is not yet initialized.
    </li>
    <li>
      <code className="text-blue-500">canvasNode</code>: The actual <code className="text-pink-500">&lt;canvas&gt;</code> DOM
      element, or <code className="text-pink-500">null</code> if the canvas is not yet rendered.
    </li>
</ul>
<p className="mt-3">For further customization or issues, please refer to the source code or open an issue on the repository.</p>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Example Usage
    </h2>
  <Code language="javascript" floatCopyButton={true}>{`import React from 'react';
import {useCanvas} from 'react-audio-canvas';

function MyComponent() {
  const { Canvas, canvasContext, canvasNode } = useCanvas({ width: 800, height: 600 });

  useEffect(() => {
    if (canvasContext) {
      // You can now use canvasContext to draw on the canvas
      canvasContext.fillStyle = 'blue';
      canvasContext.fillRect(0, 0, 100, 100);
    }
  }, [canvasContext]);

  return (
    <div>
      <Canvas />
    </div>
  );
}`}</Code>
  </div>
  )
}



function DetectNotesDocs(){
  return(
      <div
	className="p-4 text-gray-900 dark:text-gray-100 w-full"
    	id="detectnotes"
      >
      <h1 className="text-xl md:text-3xl font-bold mb-4">
    	detectNotes
      </h1>
  <p className="mb-4">
    Detects musical notes from an array of audio sample data using auto-correlation.
    </p>
    <h2 className="text-xl md:text-2xl font-bold mb-4">
	API
    </h2>
<Code language="javascript" floatCopyButton={true}>
{`import {detectNotes} from "react-audio-canvas";
detectNotes(dataArray, sampleRate = 44100)`}
</Code>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Parameters
    </h2>
<ul className="list-disc list-inside">
   <li>
      <code className="text-blue-500">dataArray</code>
    (<code className="text-pink-500">Float32Array</code> or <code className="text-pink-500">Unit8Array</code> ): An array of audio
    sample data. The data should be in the range of 0 to 255.
  </li>
  <li>
      <code className="text-blue-500">sampleRate</code>
    (<code className="text-pink-500">number</code>, optional): The sample rate of the audio data. Defaults
    to <code className="text-pink-500">44100</code>.
  </li>   
 </ul>
  <h2 className="text-xl md:text-2xl font-bold my-4">
	Returns
  </h2>
  <p className="mb-4">
    An array of detected notes, each represented as an object containing the
    following properties:
  </p>
<ul className="list-disc list-inside">
    <li>
        <code className="text-blue-500">frequency</code>
      (<code className="text-pink-500">string</code>): The fundamental frequency of the note.
    </li>
    <li>
        <code className="text-blue-500">pitch</code>
      (<code className="text-pink-500">string</code>): The musical pitch of the note, including its
      octave.
    </li>
    <li>
        <code className="text-blue-500">octave</code>
      (<code className="text-pink-500">number</code>): The octave number of the note.
    </li>
    <li>
        <code className="text-blue-500">confidence</code>
      (<code className="text-pink-500">string</code>): The confidence level of the note detection.
    </li>
    <li>
        <code className="text-blue-500">note</code>
      (<code className="text-pink-500">string</code>): The note name (e.g., 'C', 'D#').
    </li>
    <li>
        <code className="text-blue-500">cents</code>
      (<code className="text-pink-500">number</code>): The deviation in cents from the exact pitch.
    </li>
</ul>
<p className="mt-3">
    If no notes are detected, returns <code className="text-pink-500">null</code>.
  </p>
    <h2 className="text-xl md:text-2xl font-bold my-4">
  	Description
    </h2>
<p className="mt-3">
  The <code className="text-blue-500">detectNotes</code> function analyzes the given audio sample data to detect musical notes. It uses auto-correlation to identify peaks in the signal and calculates the fundamental frequency of each peak. The function then converts the frequency to a musical note and calculates its octave, confidence, and deviation in cents.
  </p>
    <h2 className="text-xl md:text-2xl font-bold my-4">
	Example Usage
    </h2>
  <Code language="javascript" floatCopyButton={true}>{`import {detectNotes} from 'react-audio-canvas';

const audioData = new Float32Array([...]); // Example audio data
const notes = detectNotes(audioData);

if (notes) {
  notes.forEach(note => {
    console.log(note);
  });
} else {
  console.log('No notes detected');
}
`}</Code>
  </div>
  )
}

function Developement(){
  return(
      <div
	className="p-4 text-gray-900 dark:text-gray-100 w-full"
    	id="developement"
      >
      <h1 className="text-xl md:text-3xl font-bold mb-4">
    	Developement
      </h1>
  <p className="mb-4">
    To get started with development, simply clone the repository and use <code className="text-pink-500">npm install</code>. Then, run `npm install` to install dependencies. You can use <code className="text-pink-500">npm link</code> to link the package locally and <code className="text-pink-500">npm run build</code> to compile your changes. We appreciate all contributions and look forward to building something amazing together!
    </p>
    <Code language="auto" floatCopyButton={true} >
{`git clone https://github.com/Sidmaz666/react-audio-canvas.git
cd react-audio-canvas
//Install the dependencies
npm install
//Compile the code
npm run build
// Make the package available locally for your system
npm link
cd test-project
// Link the package
npm link react-audio-canvas
`}
    </Code>
    </div>
  )
}

function Contributions(){
  return(
      <div
	className="p-4 text-gray-900 dark:text-gray-100 w-full min-h-[500px]"
    	id="contributions"
      >
      <h1 className="text-xl md:text-3xl font-bold mb-4">
    	Contributions
      </h1>
  <p className="mb-4">
    We welcome and encourage contributions to our open-source React library! Whether you're interested in improving existing features, adding new components, or fixing bugs, your contributions are invaluable. However, it is advised to follow the few code of conduct as mentioned below:-
  </p>
    <ul className="list-disc list-inside mt-3">
    <li>
    	Selft Explainatory Variable & Function Names
    </li>
    <li>
	Comprehensive Documentation of newly added features/patches/code.
    </li>
    <li>
	Anything new should make sense for the library and should be useful.
    </li>
    <li>
    	Keep it Vanilla, no external dependencies.
    </li>
    </ul>
    </div>
  )
}
