import style from './Footer.module.scss';
import icone from '../assets/icone/Vector.svg';
import iconeTwo from '../assets/icone/Vector-1.svg';
const Footers = ({FooterData}) => {
    return (
        <footer className={style.footer}>
            {FooterData.map((item, index) => {
    return (
            <div>
                <h1>{item.h1}</h1>
                <p>{item.paraf}</p>
                <p>{item.secondParaf}</p>
                <p>{item.SecondBreak}</p>
            </div>
    )
            })}
            <span className={style.image1}><img src={icone} alt="" /></span>
           <span className={style.image2}><img src={iconeTwo} alt="" /></span>     
        </footer>
    )
}
export default Footers;