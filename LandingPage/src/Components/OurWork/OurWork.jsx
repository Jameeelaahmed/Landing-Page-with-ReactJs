import Card from "./Card/Card";
import classes from './OurWork.module.css';
export default function OurWork() {
    return (
        <div className={classes.ourwork}>
            <p className={classes.title}>أعمالنا</p>
            <div className={classes.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}