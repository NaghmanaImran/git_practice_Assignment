

export default function Home() {
  return (

 <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-2">
  <div className="bg-blue-800 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Header</div>
  <div className="bg-blue-200 row-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Sidebar</div>
  <div className="bg-blue-400  text-[36px] font-bold text-center content-center border-2 border-white">Hero</div>
  <div className="bg-blue-700  text-[36px] font-bold text-center content-center border-2 border-white">content-1</div>
  <div className="bg-blue-100  text-[36px] font-bold text-center content-center border-2 border-white">content-2</div>
  <div className="bg-pink-400  text-[36px] font-bold text-center content-center border-2 border-white">content-3</div>
  <div className="bg-blue-800 col-span-3 text-[36px] font-bold text-center contant-center border-2 border-green-300">Footer</div>

</div> 
  );
}
