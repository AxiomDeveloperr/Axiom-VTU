import { useState, useEffect } from "react";
const useCarousel = (items, itemsPerView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(
    window.innerWidth >= 1024 ? itemsPerView.lg : itemsPerView.sm,
  );

  const totalItems = items.length;

  // Adjust number of items on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerView.lg);
      } else {
        setItemsToShow(itemsPerView.sm);
      }
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  // Calculate the end index for displayed items
  const endIndex = Math.min(currentIndex + itemsToShow, totalItems);

  // Slice the visible items
  const visibleItems = items.slice(currentIndex, endIndex);

  // Handlers for navigation
  const handlePrev = () => {    
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };

  const handleNext = () => {
    if (endIndex < totalItems) {
      setCurrentIndex(endIndex);
    }
  };

  return { currentIndex, endIndex,  handlePrev, handleNext, visibleItems };
};

export default useCarousel;
