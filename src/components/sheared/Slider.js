import { SliderImage } from "./helpers/Helpers"
import { useKeenSlider } from "keen-slider/react";
import { ThumbnailPlugin } from "@/components/sheared/helpers/Helpers"
import "keen-slider/keen-slider.min.css";



export default function Slider({ images }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {
                    images.map((img, index) => <>
                        <SliderImage key={index} img={img.url} />
                    </>)
                }
            </div>
            {/* -------------------------- thumbnail ---------------------- */}
            <div ref={thumbnailRef} className="keen-slider flex justify-center thumbnail">
                {
                    images.map((img, index) => <>
                        <SliderImage key={index} img={img.url} />
                    </>)
                }
            </div>
        </>
    )
}