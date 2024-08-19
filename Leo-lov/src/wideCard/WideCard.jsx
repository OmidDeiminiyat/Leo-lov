import style from './WideCard.module.scss';

export const FirstCard = ({image, tit, sub1, sub2}) => {
return(
    <>
    <section className={style.WeidCard}>
             <img src={image} alt="" />
                <div className={style.secondSection}>
                    <h1>{tit}</h1>
                    <p>{sub1}</p>
                    <p>{sub2}</p>
                </div>
    </section>
    </>
)
}
export default FirstCard;