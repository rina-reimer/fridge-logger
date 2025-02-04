"use client"
import {SiGithub} from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="grid bg-yellow border-t-4 border-purple w-screen h-[10dvh]">
      <div className="grid grid-cols-2 text-purple items-start justify-items-center">
        <div className="font-title text-2xl self-center">&copy; Rina Reimer</div>
        <div className="self-center grid grid-rows-1 justify-items-center">
          Find more of my work!
          <a href="https://github.com/rina-reimer" title="Rina-Reimer Github" target="_blank" rel="noopener noreferrer">
            <span className="ico-circle"><SiGithub size={48} className='p-1' /></span>
          </a>
        </div>
      </div>   
    </footer>
  )
}