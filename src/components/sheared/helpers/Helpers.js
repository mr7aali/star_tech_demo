const { default: Image } = require("next/image");

export const SliderImage = ({ img }) => {
    
    return (
        <div >
            <div className="keen-slider__slide number-slide ">
                <div >
                    <div className='sub-banner-img-container'>
                        <Image
                            width={600}
                            height={300}
                            src={img}
                            alt='Banner'
                            as='image'
                            priority={true}
                            sizes='100vw'
                            style={{
                                width: "100%",
                                height: "100%",
                            }}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}