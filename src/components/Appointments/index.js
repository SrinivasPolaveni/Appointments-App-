// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

const arrayList = []
// Write your code here
class Appointments extends Component {
  state = {
    commentList: arrayList,
    name: '',
    date: '',
    isActive: false,
    totalList: '',
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newContact],
      name: '',
      date: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeName1 = event => {
    this.setState({date: event.target.value})
  }

  toggleIsFavorite1 = id => {
    const {commentList} = this.state

    const resultList = commentList.filter(eachItem => eachItem.id !== id)

    this.setState({commentList: resultList})
  }

  onChangeListItems1 = () => {
    const {commentList, totalList} = this.state

    const resultList3 = totalList.map(eachItem => eachItem)

    this.setState({commentList: resultList3})

    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  onChangeListItems = () => {
    const {commentList, totalList} = this.state

    const resultList2 = commentList.map(eachItem => eachItem)

    const resultList1 = commentList.filter(
      eachItem => eachItem.isFavorite === true,
    )

    this.setState({commentList: resultList1, totalList: resultList2})

    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {commentList, name, date, isActive} = this.state

    return (
      <div className="bg-Container">
        <div className="Container1">
          <div className="Container">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form className="form-container" onSubmit={this.onAddContact}>
                <label htmlFor="titleText" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  value={name}
                  className="input"
                  id="titleText"
                  onChange={this.onChangeName}
                />
                <label htmlFor="titleText1" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={date}
                  className="input"
                  id="titleText1"
                  onChange={this.onChangeName1}
                />

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
                className="image"
              />
            </div>
          </div>

          <div className="card2">
            <h1 className="paragraph1">Appointments</h1>
            {isActive ? (
              <button
                type="button"
                className="paragraph0"
                onClick={this.onChangeListItems1}
              >
                Starred
              </button>
            ) : (
              <button
                type="button"
                className="paragraph2"
                onClick={this.onChangeListItems}
              >
                Starred
              </button>
            )}
          </div>
          <ul className="appointmentList">
            {commentList.map(eachItem => (
              <AppointmentItem
                key={eachItem.id}
                commentDetails={eachItem}
                toggleIsFavorite={this.toggleIsFavorite}
                toggleIsFavorite1={this.toggleIsFavorite1}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
