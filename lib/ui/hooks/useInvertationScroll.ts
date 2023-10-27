export const useInvertationScroll = (entry: any, darkBackground: any) => {
  return function handleScroll() {
    const scrollPosition = window.scrollY;
    const thresholdTop = entry.target.offsetTop - 500; // Schwellenwert basierend auf der Position des div-Elements
    const thresholdBottom =
      entry.target.offsetTop + entry.target.offsetHeight - 300; // Schwellenwert basierend auf der Position des div-Elements
    const maxScroll = 100; // Bereich, über den der Farbwechsel stattfindet

    if (scrollPosition > thresholdBottom) {
      const scrollDiff = scrollPosition - thresholdBottom;
      const opacity = Math.min(scrollDiff / maxScroll, 1); // Interpolieren zwischen 0 und 1

      const endColor = [255, 255, 255]; // Startfarbe in RGB-Werten (hier: #FFFFFF)
      const startColor = [12, 13, 17]; // Endfarbe in RGB-Werten (hier: #0C0D11)

      const interpolatedColor = startColor.map((startValue, index) => {
        const endValue = endColor[index];
        const interpolatedValue = Math.round(
          startValue - (startValue - endValue) * opacity
        );
        return interpolatedValue;
      });

      const newColor = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
      darkBackground.style.backgroundColor = newColor;
    } else if (scrollPosition > thresholdTop) {
      const scrollDiff = scrollPosition - thresholdTop;
      const opacity = Math.min(scrollDiff / maxScroll, 1); // Interpolieren zwischen 0 und 1

      const startColor = [255, 255, 255]; // Startfarbe in RGB-Werten (hier: #FFFFFF)
      const endColor = [12, 13, 17]; // Endfarbe in RGB-Werten (hier: #0C0D11)

      const interpolatedColor = startColor.map((startValue, index) => {
        const endValue = endColor[index];
        const interpolatedValue = Math.round(
          startValue - (startValue - endValue) * opacity
        );
        return interpolatedValue;
      });

      const newColor = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
      darkBackground.style.backgroundColor = newColor;
    } else {
      darkBackground.style.backgroundColor = "#FFFFFF";
    }
  };
};
