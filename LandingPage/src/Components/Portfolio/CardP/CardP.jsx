import classes from './CardP.module.css'
import * as FaIcons from 'react-icons/fa6'
export default function CardP({ small, more, pic }) {
    return (
        <div className={classes.card}>
            <img src={pic} alt="" className={classes.img} />
            <div className={classes.content}>
                <p className={classes.small}>{small}</p>
                <p className={classes.large}>{more}</p>
                <div className={classes.more_content}>
                    <FaIcons.FaAnglesLeft className={classes.i} />
                    <p className={classes.more}>اعرف المزيد</p>
                </div>
            </div>
        </div>
    )
}