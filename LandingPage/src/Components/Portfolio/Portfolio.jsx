import CardP from './CardP/CardP'
import classes from './Portfolio.module.css'
export default function Portfolio() {
    return (
        <div className={classes.portfolio}>
            <div className={classes.header}>
                <p>معرضنا</p>
                <div>
                    <p> الكل</p>
                    <p>التصاميم</p>
                    <p>الموشن</p>
                </div>
            </div>
            <CardP />
            <CardP />
            <CardP />
            <CardP />
        </div>
    )
}