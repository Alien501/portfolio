import { ReactLenis, useLenis } from 'lenis/react';

const SmoothScrolling = ({ children }) => {

    return(
        <ReactLenis root options={{
            lerp: 1.5,
            duration: 3.5,
            smoothTouch: true,
        }}>
            {
                children
            }
        </ReactLenis>
    )
}

export default SmoothScrolling;