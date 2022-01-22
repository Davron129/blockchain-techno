import Styles from './ContactStyles.module.css';

const ContactFooter = () => {
    return (
        <div className={Styles.contact__footer}>
            <span className={Styles.info}>
                “Blockchain Texno” saytida eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.
                <br /> <br />
                {/* Guvohnoma: №0001. Berilgan sanasi: 22.06.2022-yil. Muassis: “Yoko Digital” MCHJ. Tahririyat manzili: 100037, Toshkent shahri, 12-uy. Elektron manzil: info@blockchaintexno.uz.
                <br /> <br /> */}
                Saytda eʼlon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga tegishli va ular Blockchain Texno tahririyati nuqtai nazarini ifoda etmasligi mumkin.
            </span>
        </div>
    )
}

export default ContactFooter