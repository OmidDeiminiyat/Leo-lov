import style from './SecondCard.module.scss';

export const SecondCard = ({img, title, subsOne, subsTwo}) => {
return(
    <>
    <section className={style.WeidCard}>
                <div className={style.secondSection}>
                    <h1>{title}</h1>
                    <p>{subsOne}</p>
                    <p>{subsTwo}</p>
                </div>
                <img src={img} alt="" />
    </section>
    </>
)
}
export default SecondCard;