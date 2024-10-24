import classes from './ContactUs.module.css'
import * as FaIcons from 'react-icons/fa6'
export default function ContactUs() {
    return (
        <div className={classes.container}>

            <div className={classes.contact_us}>
                <div className={classes.text}>
                    <h4 className={classes.contact}>تواصل معنا</h4>
                    <p className={classes.headline}>هل لديك أي خطة مشروع في ذهنك؟</p>
                    <p className={classes.des}>نحن نساعدك في تنفيذ وتطوير خطتك ونكون شريكك المثالي في النجاح .</p>
                    <div className={classes.sec}>
                        <div className={classes.icon}>
                            <FaIcons.FaMessage className={classes.i} />
                        </div>
                        <div className={classes.section}>
                            <p>راسلنا 24/7:</p>
                            <a>
                                dgrowthad@gmail.com</a>
                        </div>
                    </div>
                    <div className={classes.sec}>
                        <div className={classes.icon}>
                            <FaIcons.FaRing className={classes.i} />
                        </div>
                        <div className={classes.section}>
                            <p>للحصول على مساعدة عاجلة؛</p>
                            <a>+966598003639</a>
                        </div>
                    </div>
                </div>
                <form action="" className={classes.form}>
                    <div className={classes.input_container}>
                        <label htmlFor="name">اسمك بالكامل</label>
                        <input type="text" name='name' dir='auto' />
                    </div>
                    <div className={classes.input_container}>
                        <label htmlFor="email">اميلك</label>
                        <input type="email" name='email' dir='auto' />
                    </div>
                    <div className={classes.input_container}>
                        <label htmlFor="message">نص الرساله</label>
                        <textarea type="text" name='message' dir='auto' />
                    </div>
                    <button className={classes.button}>ارسل </button>
                </form>
            </ div>
        </div>
    )
}