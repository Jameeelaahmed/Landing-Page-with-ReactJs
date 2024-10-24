import classes from "./IntroPage.module.css";
import * as FaIcons from 'react-icons/fa6';
export default function IntroPage() {

    return (
        // <motion.div
        // variants={{
        //     hidden: { opacity: 0, y: 75 },
        //     visible: { opacity: 1, y: 0 }
        // }}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 0.5, delay: 0.25 }}
        // >
        <div className={classes.landing_page}>
            <div className={classes.content}>
                <h1>إنطلاقة رقمية للتسويق الالكتروني والخدمات البرمجية</h1>
                <div className={classes.text}>
                    <p></p>
                    <button>ابدأ معنا</button>
                    <FaIcons.FaPlay className={classes.icon} />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00a6a2" fillOpacity="1" d="M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,192C560,160,640,96,720,64C800,32,880,32,960,64C1040,96,1120,160,1200,165.3C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
            </svg>
        </div>
        // </motion.div>
    );
}
