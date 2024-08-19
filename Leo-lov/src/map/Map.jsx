import style from './Map.module.scss';
const Map = ({maps, Title, Paraf, Address}) => {
    return (
        <>
        <section className={style.WeidCard}>
                 <img src={maps} alt="" />
                    <div className={style.secondSection}>
                        <h1>{Title}</h1>
                        <p>{Paraf}</p>
                        <p>{Address}</p>
                    </div>
        </section>
        </>
    )
}
export default Map;