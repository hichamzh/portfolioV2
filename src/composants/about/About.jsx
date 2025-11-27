
export default function About() {
  return (
    <>
      <section className="py-32 px-8 bg-[#0A0A0A]" id="about">
        <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="left-div">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-500/10 rounded-full">
              <span className="text-sm text-purple-400 font-semibold">
                À PROPOS
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Passionné par le code et l'innovation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Développeur web avec une expertise en technologies modernes, je
              crée des solutions web performantes et élégantes. Mon approche
              combine créativité technique et attention aux détails.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Chaque projet est une opportunité d'apprendre et de repousser les
              limites du possible avec le code.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-code"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="code"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                      ></path>
                    </svg>
                  </i>
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-400">Projets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-trophy"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trophy"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
                      ></path>
                    </svg>
                  </i>
                </div>
                <div>
                  <div className="text-2xl font-bold">1+</div>
                  <div className="text-sm text-gray-400">Années</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-div ">
          <img src="/dev.png" alt="Photo de setup avec deux écrans montrant du code" className=" rounded-md"/></div>
        </div>
      </section>
    </>
  );
}
