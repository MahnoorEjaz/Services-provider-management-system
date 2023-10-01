import Header_Clint from './Clint';
import Hi_clint from './Hi_clint';
import Clint_Services from './Clint_Services';
import Sellar_Cart from '../Saller/Sellar_Cart';

const Clint_Complete = () => {
    return (
        <> 
            <Header_Clint />
            <div className='Hi-clint '> 
                <Hi_clint />
                <Clint_Services />
                <Sellar_Cart/> 
            </div>
        </>
    )
}

export default Clint_Complete