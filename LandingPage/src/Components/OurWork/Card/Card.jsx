import * as FaIcons from 'react-icons/fa6';
import classes from './Card.module.css';
export default function Card({ h, p }) {
    return (
        <div className={classes.card}>
            <div className={classes.icon}>
                <FaIcons.FaReact className={classes.i} />
            </div>
            <h3>{h}</h3>
            <p className={classes.details}>{p}</p>
        </div>
    )
}