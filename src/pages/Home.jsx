import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store'; 
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
    
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img src='./threejs.png' alt='logo' className="w-20 h-20 object-contain"/>
                </motion.header>

                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h3 className="head-text">
                           Create <br className='xl:block hidden'/>
                           Your Own <br className='xl:block hidden'/>
                           T-Shirt <br className='xl:block hidden'/>
                        </h3>
                    </motion.div>
                    <motion.div {...headContentAnimation}
                    className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-base'>
                            Create the one unique for You T-Shirt. 
                            <strong> Show Your style</strong>{""} and Your Character.
                        </p>

                        <CustomButton 
                            type="filled"
                            title="Customie It"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit-px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home