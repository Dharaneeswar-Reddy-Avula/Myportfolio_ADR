// src/components/LayoutGrid.js
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "../utils/cn"; // Assuming your utility classnames

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full py-4 md:py-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0  w-full h-1/2 md:w-1/2 m-auto z-30 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#141c27] rounded-xl h-full w-full"
                : "bg-[#141c27] rounded-xl h-[250px] w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id ? (
  <SelectedCard selected={selected} />
) : (
  card.content
)}

          </motion.div>
        </div>
      ))}

     <motion.div
  onClick={handleOutsideClick}
  className={cn(
    "absolute inset-0 z-10transition-all duration-300 ease-in-out",
    selected?.id ? "pointer-events-auto" : "pointer-events-none"
  )}
  initial={{ opacity: 0 }}
  animate={{ opacity: selected?.id ? 0.4 : 0 }}
  exit={{ opacity: 0 }}
/>
    </div>
  );
};

// const ImageComponent = ({ card }) => {
//   return (
//     <motion.img
//       layoutId={`image-${card.id}-image`}
//       src={card.thumbnail}
//       height="500"
//       width="500"
//       className="object-fit object-top absolute inset-0 h-full w-full transition duration-200"
//       alt="thumbnail"
//     />
//   );
// };

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-[#55e6a5]/10 p-4 h-[400px] w-full flex flex-col justify-center rounded-lg shadow-2xl relative z-[20]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black/10 opacity-60 z-10 top-0"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-[40] "
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
