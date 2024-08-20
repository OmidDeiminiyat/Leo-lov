import style from './Staff.module.scss';
const Staff = ({StaffList}) => {
return (
    
    <div id='about'>
        <h1 className={style.myh1} >MØD HOLDET</h1>
        <section className={style.AllStaf}>
       { StaffList.map((items, index) => {
        return (
        <div className={style.cards} key={index}>
            <div className={style.myImage}><img src={items.image} alt="" /> </div>
            <h3>{items.name}</h3>
            <p>{items.Describe}</p>
            <hr />
            
        </div>
        )
       })}
       </section>
    </div>
)
}
export default Staff;