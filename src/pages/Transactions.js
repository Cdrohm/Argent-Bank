import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    getUserProfile,
    initProfile,
    getUserTransactions
} from '../utils/slice/userIdSlice'

import { transactionsSelector } from '../utils/selectors'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Transaction from '../components/transaction/Transaction'

const Transactions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userId } = useParams()
    const token = sessionStorage.ARGENTBANK_token
    const id = JSON.parse(localStorage.getItem('ARGENTBANK_userInfos')).id
    const transactions = useSelector(state => transactionsSelector(state))
    const [isLoading, setLoading] = useState(true)

    //token to grant access or throw to /sign-in page
 
    useEffect(() => {
        if (!token) {
            dispatch(initProfile())
            navigate('/signin')
        }
        else {
            try {
                dispatch(getUserProfile(token))
                dispatch(getUserTransactions(token))
            } catch (error) {
                console.log('ERROR GETTING USER/TRANSACTIONS DATA -', error)
                dispatch(initProfile())
                navigate('/signin')
            }
        }
  
    }, [token])


    // protect and secure userId route
    
    useEffect(() => {
        //console.log('PARAMID-', userId, 'ID-', id);
        //console.log('TRANSACTIONS -', transactions)
        if (userId !== id) {
            dispatch(initProfile())
            navigate('/signin')
        }
   
    }, [id])

    // wait for data to be fetched
    useEffect(() => {
        if (transactions.status === 'resolved') {
            setLoading(false)
        }
    }, [transactions])


    return (
        <main className="main bg-dark">
            { console.log('ca marche ici') }
            <div className="header transactions-header">
                <div className='back'>
                    <Link to={`/user/${userId}`}><FontAwesomeIcon className='fa fa-sign-out' icon="arrow-left" /> Back </Link>
                </div>
                <h3>Argent Bank Checking (x8349)</h3>
                <h1>$2,082.79</h1>
            </div>
            <h2 className="sr-only">Transactions</h2>
            { console.log(transactions)}
            
            {!isLoading && transactions.data.map((transaction, i) => (

                <Transaction data={transaction} token={token} index={i} key={`transaction-${i}`} />
                
            ))}
        </main>
    )
}

export default Transactions