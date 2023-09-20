const { default: Image } = require("next/image");

export const SliderImage = ({ img }) => {
    console.log(img);
    return (
        <div>
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