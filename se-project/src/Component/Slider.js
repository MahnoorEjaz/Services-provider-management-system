import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import P2 from './Pic/P3.jpg';
import P1 from './Pic/P1.jpg';
import P3  from './Pic/P1.jpg';
import P4 from './Pic/P4.jpg'
import useResizeObserver from "use-resize-observer";

export default function App() {
  const { ref, width = 1, height = 1 } = useResizeObserver();
  const sliderImages = [
    {
      url: P1,
    },
    {
      url: P2,
    },
    {
      url: P3,
    },
    {
      url: P4,
    },
  ];
  return (
    <div ref={ref} className="Slider"  >
      <SimpleImageSlider
        width={width}
        height={height} 
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      /> 
    </div>

  );
}
