import classes from './CardP.module.css'
import pic from '../../../assets/pic.jpg'
export default function CardP() {
    return (
        <div className={classes.card}>
            <img src={pic} alt="" className={classes.img} />
            <div className={classes.content}>
                <p>تصاميم المواقع</p>
                <p>صمم موقعكم معنا بكل احترافيه</p>
                <p>اعرف المزيد</p>
            </div>
        </div>
    )
}