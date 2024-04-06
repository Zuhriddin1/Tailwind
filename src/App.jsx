import Logo1 from "./assets/icon-1.svg";
import Logo3 from "./assets/icon-3.svg";
import Logo2 from "./assets/Frame.svg";
function App() {
  return (
    <>
      <div className="flex justify-between mt-5 items-center mr-[200px] ml-[200px]">
        <div className="">
          <h1 className="text-white text-2xl">Alifreza.</h1>
        </div>
        <div className="flex">
          <ul className="flex  gap-8  mt-3">
            <li className="cursor-pointer hover:text-white hover:font-bold">
              Home
            </li>
            <li className="cursor-pointer hover:text-white hover:font-bold">
              Services
            </li>
            <li className="cursor-pointer hover:text-white hover:font-bold">
              Work
            </li>
            <li className="cursor-pointer hover:text-white hover:font-bold">
              About us
            </li>
            <li className="mr-[25px]">Blog</li>
          </ul>
          <button className="btn btn-ghost border-green-600">Contact</button>
        </div>
      </div>
      <main className="mr-[200px] ml-[200px] mt-[150px]">
        <div className="w-[751px] h-[394px]">
          <h1 className="font-bold text-green-700 text-3xl">
            Hello, I’m Alif Reza
          </h1>
          <h1 className="text-white text-6xl font-extrabold">
            Product Designer
          </h1>
          <div>
            <p className="w-[550px] h-[82px] mt-7 text-sm">
              I’m from Singapore and I have been working as a Product Designer
              for <br /> more than 7 years. I’ve worked for a <br /> Hanziree
              company Pabloo as a Product Designer and Front-end Developer for 3
              years.
            </p>
            <div className="flex gap-5">
              <button className="btn cursor-pointer  btn-success">
                Email Me
              </button>
              <button className="btn cursor-pointer">Download CV</button>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className="flex mr-[200px] ml-[200px]">
          <h1 className="text-white text-3xl">7+ years experience working</h1>
          <div className="ml-[400px] translate-x-20">
            <span className="text-green-800">
              {" "}
              {"---                                      "}Services
            </span>
            <p className="">
              Discover the best services I offer, designed to <br /> ensure the
              success of your project.
            </p>
          </div>
        </div>
      </main>
      <div className="flex mb-24 mt-20">
        <div className="card w-96 mt-14 translate-x-52 bg-base-100 shadow-xl">
          <figure>
            <img src={Logo1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product design</h2>
            <p>
              I offer innovative and attention-grabbing product design services.
              From initial ideation to implementation.
            </p>
          </div>
        </div>

        <div className="card w-96 mt-14 translate-x-56 bg-base-100 shadow-xl">
          <figure>
            <img src={Logo2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Frontend develop</h2>
            <p>
              Specialize in responsive and interactive front-end development.
              With a deep understanding of HTML, CSS, and JS.
            </p>
          </div>
        </div>
        <div className="card w-96 mt-14  translate-x-64 bg-base-100 shadow-xl">
          <figure>
            <img src={Logo3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand strategy</h2>
            <p>
              I help design strong and captivating brand strategies. Through
              thorough research and market analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
