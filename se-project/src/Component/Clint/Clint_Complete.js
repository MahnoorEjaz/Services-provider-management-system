import HiClint from './Hi_clint';
import ClintServices from './Clint_Services';
import TopRatedSlider from './Top_Rated_slider';
import MostPopularServices from './MostpopularServices';
import ServicesYoumayLike from './Services_YouMayLike';
import FooterOtherThanMap from '../Footer/FooterOtherThanMap';

const Clint_Complete = () => {


    return (
        <>
            <div className='Hi-clint'>
                <HiClint /> 
                <ClintServices />
                <TopRatedSlider />
                <MostPopularServices />
                <ServicesYoumayLike />
            </div>
            <FooterOtherThanMap />
        </>
    )
}

export default Clint_Complete