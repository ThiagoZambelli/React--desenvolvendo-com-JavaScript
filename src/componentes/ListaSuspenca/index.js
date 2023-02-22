import './ListaSuspenca.css'

const ListaSuspenca = (props) => {
    return(
        <div className='lista-suspenca'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}               
            </select>
        </div>
    )
}

export default ListaSuspenca