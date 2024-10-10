export const fadeAnimation = {
  hidden: {
    filter: 'blur(10px)',
    opacity: 0,
  },
  visible: (custom = 0) => ({
    filter: 'blur(0)',
    opacity: 1,
    transition: {
      opacity: { duration: 0.4, ease: 'easeOut', delay: custom * 0.3 },
      filter: { duration: 0.4, ease: 'easeOut', delay: custom * 0.3 },
    },
    ease: 'easeOut',
  }),
};
