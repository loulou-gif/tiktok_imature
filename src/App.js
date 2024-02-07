import './App.css';
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { Info } from './Data';
import { useState } from 'react';

function App() {
  const [activatedStates, setActivatedStates] = useState(Info.map(() => false));

  const toggleActivation = (index) => {
    const newActivatedStates = [...activatedStates];
    newActivatedStates[index] = !newActivatedStates[index];
    setActivatedStates(newActivatedStates);
    console.log("c'est okey");
  };

  const infos = Info.map((e, index) => (
    <div key={index} className={`bg-neutral-300 p-3 flex justify-center items-center w-full ${activatedStates[index] ? 'activated' : ''}`}>
      <div className='w-8/12 bg-white h-24 rounded-xl  flex justify-around items-center'>
        <p className='text-black w-6/12 text-3xl'>{e.name}</p>
        <div className=''>
          <LiaToggleOnSolid className={`text-7xl transition text-green-500 cursor-pointer ${activatedStates[index] ? 'hidden duration-300' : 'duration-300'}`} onClick={() => toggleActivation(index)} />
          <LiaToggleOffSolid className={`text-7xl text-neutral-400 cursor-pointer ${activatedStates[index] ? 'duration-300' : 'hidden duration-300'}`} onClick={() => toggleActivation(index)} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="App bg-neutral-300 h-[1095px]">
      {infos}
    </div>
  );
}

export default App;
