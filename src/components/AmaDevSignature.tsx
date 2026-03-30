import { motion } from 'framer-motion';

export default function AmaDevSignature() {
  return (
    <div className="flex items-center justify-center py-4 text-sm text-gray-400 font-sans">
      <span className="mr-1">Experiência digital por</span>
      <a 
        href="https://amadev.com.br" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-bold text-gray-500 transition-colors duration-300 hover:text-[#5C3BBD] group flex items-center gap-1"
      >
        AmaDev
        {/* O asterisco pixelado que só aparece/ganha cor no hover */}
        <span className="font-pixel text-[10px] text-transparent transition-colors duration-300 group-hover:text-[#8BD928]">
          *
        </span>
      </a>
    </div>
  );
}