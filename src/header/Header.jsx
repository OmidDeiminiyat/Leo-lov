import style from './Header.module.scss';
export const Headers = ({Title, SecTit, Subtitle}) => {
    return (
        <section className={style.HeaderStyle}>
            <span>
                <h1>{Title}<span>{SecTit}</span></h1>
                <p>{Subtitle}</p>
            </span>
        </section>
    )
}
export default Headers;