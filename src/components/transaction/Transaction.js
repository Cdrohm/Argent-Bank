import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { transactionDetailSelector } from "../../utils/selectors"
import { getTransactionDetails, deleteTransactionDetails, updateTransactionDetails } from "../../utils/slice/userIdSlice"
import PropTypes from 'prop-types';

/**
 * takes in value props,in order to produce Transaction ticket component
 * @param {object} data - values to build the transaction ticket
 * @param {string} token - token to access the API
 * @param {number} index - index number of the ticket
 * @returns react component.
 */
const Transaction = ({ data, token, index }) => {
    const dispatch = useDispatch()
    const { id, date, description, amount, balance } = data
    const { type, category, notes } = useSelector(state => transactionDetailSelector(state, index))
    const [newType, setType] = useState(type)
    const [newCategory, setCategory] = useState(category)
    const [newNotes, setNotes] = useState(notes)
    const [edit, setEdit] = useState(false)
    const details = useRef(null)

    //get values from Store
    useEffect(() => {
        setType(type)
        setCategory(category)
        setNotes(notes)
    }, [type, category, notes])

    //display details by accessing API and add show className
    function displayDetails() {
        dispatch(getTransactionDetails(token, id))
        setEdit(true)
        details.current.className = 'transaction details show'
    }

    //hide details
    function hideDetails() {
        console.log('NEW VALUES FOR DETAILS -', newType, newCategory, newNotes);
        dispatch(updateTransactionDetails(token, id, { newType, newCategory, newNotes }))
        setEdit(false)
        details.current.className = 'transaction details'
    }

    //change type from select box
    function changeType(e) {
        setType(e.target.value)
    }

    function deleteDetails() {
        dispatch(deleteTransactionDetails(token, id))
        setEdit(false)
        details.current.className = 'transaction details'
    }

    //return 
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="transaction account-title">{description} ({id})</h3>
                <div className='amounts'>
                    <div className='amount'>
                        <p className="transaction account-amount">${amount}</p>
                        <p className="transaction account-amount-description">Amount</p>
                    </div>
                    <div className='balance'>
                        <p className="transaction account-amount">${balance}</p>
                        <p className="transaction account-amount-description">Available Balance</p>
                    </div>
                </div>
            </div>
            <div className='transaction details' ref={details}>
                <div><span>Type</span>
                    <form className="details-input">
                        <select className="type" value={newType || ''} onChange={e => changeType(e)}>
                            <option value='-'>-</option>
                            <option value='Electronic'>Electronic</option>
                            <option value='Services'>Services</option>
                            <option value='Representation'>Representation</option>
                            <option value='Furnitures'>Furnitures</option>
                            <option value='Other'>Other</option>
                        </select>
                    </form>
                </div>
                <div><span>Category</span>
                    <input
                        className="details-input category"
                        type="text"
                        value={newCategory || ''}
                        onChange={e => setCategory(e.target.value)} />
                </div>
                <div><span>Notes</span>
                    <textarea
                        className="details-input notes"
                        rows='2'
                        value={newNotes || ''}
                        onChange={e => setNotes(e.target.value)} />
                </div>
            </div>
            <div className="transaction account-content-wrapper cta">
                <p className="transaction account-amount-description">{date}</p>
                {edit ?
                    (<div>
                        <button className="transaction-button save" onClick={hideDetails}>Save Details</button>
                        <button className="transaction-button" onClick={deleteDetails}>Delete Details</button>
                    </div>)
                    :
                    <button className="transaction-button" onClick={displayDetails}>View Details</button>
                }
            </div>
        </section>
    )
}

//PropTypes
Transaction.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    token: PropTypes.string,
    index: PropTypes.number,
}

export default Transaction

