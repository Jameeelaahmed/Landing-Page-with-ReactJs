import classes from './Sidebar.module.css'
import * as FaIcons from 'react-icons/fa6'

export default function Sidebar({ closeSidebar, isOpen }) {
    return (
        <div className={`${classes.sidebar} ${isOpen ? classes.open : ''}`}> {/* Conditionally add the 'open' class */}
            <div className={classes.iconn}>
                <FaIcons.FaX onClick={closeSidebar} className={classes.i} />
            </div>
            <img src="" alt="logo" className={classes.logo} />
            <div className={classes.bottom}>
                <div className={`${classes.list} ${classes.hiddinOnLarge}`}>
                    <ul>
                        <li>
                            <a href="#intro">الرئيسية</a>
                        </li>
                        <li>
                            <a href="#work">أخر الاعمال</a>
                        </li>
                        <li>
                            <a href="#who">من نحن</a>
                        </li>
                        <li>
                            <a href="#services">خدماتنا</a>
                        </li>
                        <li>
                            <a href="#portfolio">معرضنا</a>
                        </li>
                        <li>
                            <a href="#contact">تواصل معنا</a>
                        </li>

                    </ul>
                </div>
                <p className={`${classes.text} ${classes.hiddenOnSmall}`}>شركة انطلاقة الرقمية للتسويق الالكتروني والبرمجة والخدمات الالكترونية.</p>
                <div className={classes.icons}>
                    <div className={classes.icon_cover}>
                        <FaIcons.FaFacebook className={classes.icon} />
                    </div>
                    <div className={classes.icon_cover}>
                        <FaIcons.FaTwitter className={classes.icon} />
                    </div>
                    <div className={classes.icon_cover}>
                        <FaIcons.FaInstagram className={classes.icon} />
                    </div>
                </div>
                <div className={`${classes.contact_us} ${classes.hiddenOnSmall}`}>
                    <p>تواصل معنا</p>
                    <div>
                        <FaIcons.FaPhone className={classes.bottom_icon} />
                        <p>+966598003639</p>
                    </div>
                    <div>
                        <FaIcons.FaEnvelope className={classes.bottom_icon} />
                        <p>info@dgrowthad.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
