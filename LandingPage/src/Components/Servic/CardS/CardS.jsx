import classes from './CardS.module.css'
import * as FaIcons from 'react-icons/fa6';
export default function CardS({ title, description }) {
    return (
        <div className={classes.card}>
            <div className={classes.icon}>
                <FaIcons.FaReact className={classes.i} />
            </div>
            <h3>{title}</h3>
            <p className={classes.details}>
                {description}
            </p>
        </div>
    )
}