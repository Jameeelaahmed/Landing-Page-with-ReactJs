import * as FaIcons from 'react-icons/fa6'
import classes from './Footer.module.css'
export default function Footer() {
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.right}>
                    <img src="" alt="logo" className={classes.logo} />
                    <div className={classes.text}>
                        <p>?Need a successful projects
                        </p>
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
                            <div className={classes.icon_cover}>
                                <FaIcons.FaLinkedin className={classes.icon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.left}>
                    <div className={classes.section}>
                        <h3>الخدمات</h3>
                        <p>تصميم العلامة التجارية</p>
                        <p>تطوير المواقع</p>
                        <p>تصميم التطبيقات</p>
                        <p>التسويق الارقمي</p>
                        <p>تطوير المنتجات</p>
                    </div>
                    <div className={classes.section}>
                        <h3>الموارد</h3>
                        <p>المدونة</p>
                        <p>دراسة الحاله</p>
                        <p>المقالات</p>
                        <p>صفحات الفريق</p>
                    </div>
                    <div className={classes.section}>
                        <h3>الدعم</h3>
                        <p>اتصل بنا</p>
                        <p>سياسة الخصوصية</p>
                        <p>الشروط والاحكام</p>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <div>
                    <p>الخصوصية والشروط</p>
                    <p>اتصل بنا</p>
                </div>
                <div>
                    <p>حقوق النشر ©2024 . بواسطة </p>
                </div>
                <div>
                    <p>من نحن </p>
                    <p>المدونة</p>
                </div>
            </div>

        </>
    )
}