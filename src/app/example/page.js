import Container from "@/components/global/Container";
import AudioExample from "@/components/example/AudioExample";

export default function Example() {
  return (
    <Container className="flex flex-col w-full relative px-4 py-2 h-auto">
    <div className="dark:bg-gray-800/50 bg-slate-200/50 px-2 py-4 rounded-md mt-4">
    <p>
     The following example demonstrates how to use of the <strong className="text-blue-500">react-audio-canvas</strong> library.
    These examples are styled with <code className="text-blue-500">Tailwind CSS</code>.
    However, these components can be styles and customized with any CSS framework. These components are not dependent on the Tailwind CSS, even custom <code className="text-pink-500">CSS Classs</code> are supported.
    </p>
    <p className="mt-2">
    	Along with Tailwind CSS we have also used <code className="text-blue-500">react-icons</code> for the icons.
    </p>
    <p className="mt-2 text-rose-500">
    	Note that these examples are not responsive and they are crafted at very basic level & sloppyly.
    </p>
    <p className="mt-2">
	Inline styling is also supported, check out the <a className="text-blue-500 underline" href="/docs">docummentation</a> for more information.
    </p>
    </div>
	<AudioExample/>
    <div className="dark:bg-gray-800/50 bg-slate-200/50 px-2 py-4 rounded-md my-4">
    <p>
    	<code className="text-blue-500">react-audio-canvas</code> is still in it's experimental stage, it's not polished or perfected. However, it does few things quite well that we have discussed in the <a className="text-blue-500 underline" href="/docs">docs</a>.
    </p>
    <p className="mt-2 text-slate-400">
    We do need more people to support the project and feedback so that it can be a great addition to the react family.We also hope people will actively participate and add more examples to the project.
    </p>
    <p className="mt-2 text-slate-400">
    We do hope this project will grow further in future and by people. Thank you very much for visiting and checking it out!! 🩷 
    </p>
    </div>
    </Container>
  );
}
