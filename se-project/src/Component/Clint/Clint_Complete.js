import Hi_clint from './Hi_clint';
import Clint_Services from './Clint_Services';
import Top_Rated_slider from './Top_Rated_slider';
import MostpopularServices from './MostpopularServices';
import Services_YoumayLike from './Services_YouMayLike';
import FooterOtherThanMap from '../Footer/FooterOtherThanMap';

const Clint_Complete = () => {


    return (
        <>
            
            <div className='Hi-clint'>
                <Hi_clint />
                <Clint_Services />
                <Top_Rated_slider />
                <MostpopularServices />
                <Services_YoumayLike />
            </div>
            <FooterOtherThanMap />
        </>
    )
}

export default Clint_Complete