import Header_Clint from './Clint';
import Hi_clint from './Hi_clint';
import Clint_Services from './Clint_Services';
import Top_Rated_slider from './Top_Rated_slider';

const Clint_Complete = () => {
   

    return (
        <>
            <Header_Clint />
            <div className='Hi-clint'>
                <Hi_clint />
                <Clint_Services />
                <Top_Rated_slider/> 
                
                <h1 style={{marginTop:'1110px'}}>
                    h1
                </h1>
            </div>
        </>
    )
}

export default Clint_Complete