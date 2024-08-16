import style from './Cards.module.scss';
export const MyCards = ({CardItems}) => {
    return (
        <>
        <section className={style.CardsStyle}>
        {CardItems.map((items, index) => {
            return (
            <div className={style.DiVStyle} key={index}>
                <h1>{items.key1}</h1>
                <p>{items.key2}</p>
            </div>
            )
        })}
        </section>
        </>
    )
}
export default MyCards;