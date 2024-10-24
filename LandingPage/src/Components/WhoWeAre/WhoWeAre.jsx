import classes from './WhoWeAre.module.css'
import pic from '../../assets/pic.jpg'
export default function WhoWeAre() {
    return (
        <div className={classes.WhoWeAre}>
            <img src={pic} alt="" className={classes.pic} />
            <div className={classes.container}>
                <h1>
                    من نحن
                </h1>
                <h1>
                    شركة إنطلاقة رقمية
                </h1>
                <p>
                    شركة انطلاقة رقمية هي شريكك في عالم التسويق الرقمي والحلول التقنية المتقدمة. بفضل خبرتنا العميقة وفريقنا المتخصص، نعمل على تقديم خدمات مبتكرة مصممة خصيصًا لدعم نمو الشركات وتعزيز حضورها الرقمي. نحن نؤمن بأن النجاح في السوق الرقمي اليوم يتطلب استراتيجيات متميزة تجمع بين الإبداع والتكنولوجيا، وهذا هو بالضبط ما نقدمه لعملائنا.
                </p>
            </div>
        </div>
    )
}