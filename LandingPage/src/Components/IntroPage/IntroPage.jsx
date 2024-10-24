import { useEffect, useState } from "react";
import classes from "./IntroPage.module.css"
export default function IntroPage() {
    const [svgPath, setSvgPath] = useState(
        "M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,192C560,160,640,96,720,64C800,32,880,32,960,64C1040,96,1120,160,1200,165.3C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    );

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                // Update to the new path after scrolling past 100px
                setSvgPath(
                    "M0,256L40,224C80,192,160,128,240,96C320,64,400,64,480,74.7C560,85,640,107,720,144C800,181,880,235,960,245.3C1040,256,1120,224,1200,213.3C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                );
            } else {
                // Reset to the original path when scrolled back up
                setSvgPath(
                    "M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,192C560,160,640,96,720,64C800,32,880,32,960,64C1040,96,1120,160,1200,165.3C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                );
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={classes.landing_page}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00a6a2" fillOpacity="1" d={svgPath}></path>
            </svg>
        </div>
    )
}