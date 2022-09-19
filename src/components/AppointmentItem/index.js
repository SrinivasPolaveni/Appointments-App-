// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {commentDetails, toggleIsFavorite} = props
  const {name, isFavorite, date, id} = commentDetails

  const newDate = new Date(date)

  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const date6 = newDate.getDate()

  const date1 = format(new Date(year, month, date6), 'dd MMMM yyyy, EEEE')

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="item">
      <div className="card3">
        <p className="paragraph8">{name}</p>

        <button type="button" className="button2" onClick={onClickFavoriteIcon}>
          <img src={starImgUrl} alt="star" className="image2" />
        </button>
      </div>

      <p className="paragraph5">Date: {date1}</p>
    </li>
  )
}
export default AppointmentItem
