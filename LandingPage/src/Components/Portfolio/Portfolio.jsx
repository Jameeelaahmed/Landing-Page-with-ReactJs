import { useState } from 'react';
import CardP from './CardP/CardP';
import classes from './Portfolio.module.css';
import pic1 from '../../assets/pic.jpg';
import pic2 from '../../assets/pexels-mikael-blomkvist-6476587.jpg';
export default function Portfolio() {
    const [activeContainer, setActiveContainer] = useState('all'); // State to track active container

    return (
        <div className={classes.portfolio}>
            <div className={classes.header}>
                <p>معرضنا</p>
                <div className={classes.nav}>
                    <p onClick={() => setActiveContainer('all')}> الكل</p>
                    <p onClick={() => setActiveContainer('design')}>التصاميم</p>
                    <p>الموشن</p>
                </div>
            </div>

            {activeContainer === 'all' && (
                <div className={classes.container_all}>
                    <div className={classes.cards}>
                        <CardP pic={pic1} small="تصاميم المواقع" more="صمم موقعكم معنا بكل احترافيه" />
                        <CardP pic={pic1} small="تصاميم المواقع" more="صمم موقعكم معنا بكل احترافيه" />
                    </div>
                    <div className={classes.cards}>
                        <CardP pic={pic1} small="تصاميم المواقع" more="صمم موقعكم معنا بكل احترافيه" />
                        <CardP pic={pic1} small="تصاميم المواقع" more="صمم موقعكم معنا بكل احترافيه" />
                    </div>
                </div>
            )}

            {activeContainer === 'design' && (
                <div className={classes.container_design}>
                    <div className={classes.cards}>
                        <CardP pic={pic2} small="Design Build" more="Business & Design Solution Online" />
                        <CardP pic={pic2} small="Design Build" more="Business & Design Solution Online" />
                    </div>
                    <div className={classes.cards}>
                        <CardP pic={pic2} small="Design Build" more="Business & Design Solution Online" />
                        <CardP pic={pic2} small="Design Build" more="Business & Design Solution Online" />
                    </div>
                </div>
            )}
        </div>
    );
}
