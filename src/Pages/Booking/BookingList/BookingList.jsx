import { serviceListData } from '../../../assets/Data';
import BookingListCard from './BookingListCard';

const BookingList = () => {
    return (
        <section className='lg:pr-32'>
            <h1 className="lg:hidden block text-center text-lg py-2 text-gray">Booking list</h1>
            <div className='lg:flex lg:gap-10 space-y-4'>
                {
                    serviceListData.map((serviceListInfo) => <BookingListCard
                        key={serviceListInfo}
                        serviceListInfo={serviceListInfo}
                    ></BookingListCard>)
                }
            </div>
        </section>
    );
};

export default BookingList;