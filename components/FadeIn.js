import {React, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'


const FadeIn = ({ children, variants }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true
    });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeIn;