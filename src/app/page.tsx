import Image from "next/image";
import landingPage from '../../assets/landing_page.png'

export default function Home() {


  return (
    <>

      <div className="w-full flex justify-center">
        <div className=" relative w-full h-[80vh] overflow-hidden">
          <Image
            src={landingPage}
            alt="kitchen with food on table"
            className="absolute inset-0 object-cover w-full h-full z-0 select-none"
            draggable={false}
            priority />

          {/* Gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-50 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(255,255,255,1), transparent)',
              zIndex: 10,
            }}
          />

          <div className="absolute inset-0 bottom flex items-center justify-center z-11">
            <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold text-center text-shadow">
              Mise at Home
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
