import * as FaIcons from 'react-icons/fa6';
import classes from './Card.module.css';
export default function Card() {
    return (
        <div className={classes.card}>
            <div className={classes.icon}>
                <FaIcons.FaReact className={classes.i} />
            </div>
            <h3>التصميم الابداعي</h3>
            <p className={classes.details}>نقدم تصميم الهوية البصرية والعلامة التجارية وتصميم الاعلانات والمواد التسويقية وتصاميم السوشيال ميديا</p>
        </div>
    )
}