import './detailcard.css'

export const DetailCard = ({event}) => {



  return (
    <div>
        <div className='detail-container'>
          <img className='detail-image' src={event.image} alt="" />
            <div className='container-info'>
                <div className='detail-card'>
                    <h2 className='detail-name'>{event.name}</h2>
                    <p className='detail-description'>{event.description}</p>
                </div>
                <div className='detail-date-container'>
                    <span className='detail-date'>{event.date}</span>
                </div>
                <div className='detail-container-mid'>
                    <p className='detail-category'>Category: <span> {event.category}</span></p>
                    <p className='detail-price'>${event.price}</p>
                </div>
                <div className='container-footer'>
                    <p className='place-detail'>Place: <span>{event.place}</span></p>
                    <p className='capacity-detail'>capacity: <span>{event.capacity}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
