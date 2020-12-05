import React, { useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'

function Slider() {
    const [viewportRef, embla] = useEmblaCarousel({ loop: true });
    const imgArr = [1,2,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    useEffect(() => {
      if (viewportRef) {
        // Embla API is ready
      }
    }, [viewportRef]);

    return (
        <section className="slider" id="gallery">
            <div className="slider__container" ref={viewportRef}>
                <div className="slider__wrapper">
                    {
                        imgArr.map(num => {
                            return <div key={num} className="slider__slide"><img src={`/img/20201202-01-2431RockdellSt-LaCrescenta,CA-${pad(num, 3)}-Small.jpg`} alt={`2431 rockdell - ${num}`} /></div>
                        })
                    }
                </div>
                <div className="slider__buttons">
                    <button className="slider__btn" onClick={scrollPrev}>
                        <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
                            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
                        </svg>
                    </button>
                    <button className="slider__btn" onClick={scrollNext}>
                        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
                            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .slider {
                    background-color: #000;
                    padding-top: 3em;
                }
                .slider__buttons {
                    align-items: center;
                    height: 100%;
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
                .slider__container {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                .slider__wrapper {
                    display: flex;
                }
                .slider__slide {
                    display: flex;
                    justify-content: center;
                    min-width: 100%;
                    user-select: none;
                }
                @media (max-width: 1024px) {
                    .slider__slide > img {
                        width: 100%;
                    }
                }
                .embla__button__svg {
                    fill: #fff;
                    width: 3em;
                    height: 3em;
                }
                .slider__btn {
                    background: transparent;
                    border: none;
                }
                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
}
export default Slider;