/*
   Animation for the Pages
*/
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
      // staggerChildren will apply this animation to all the other children tags but need to define it in the parent tag
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.4,
    },
  },
};

/*
   Animation for the tags
*/
export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.62,
      ease: "easeOut",
    },
  },
};

export const photoAnimation = {
  hidden: {
    y: 80,
    scale: 1,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      // ease: "easOut",
      duration: 0.75,
    },
  },
};

export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const descriptionAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const delayedDescriptionAnimation = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 6,
      ease: "easeOut",
    },
  },
};

export const lineAnimation = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  },
};

export const leftIconAnimation = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const rightIconAnimation = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const timelineAnimation = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "1rem",
    transition: {
      duration: 1,
    },
  },
};

export const backAndForth = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: [
      -70, 0, -40, 0, -30, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, -40, -70,
    ],
    transition: {
      type: "spring",
      delay: 3,
      duration: 7,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
