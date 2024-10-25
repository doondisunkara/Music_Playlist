import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongCard = props => {
  const {trackDetails, removeTrack} = props
  const {id, name, genre, imageUrl, duration} = trackDetails

  const onClickDeleteBtn = () => removeTrack(id)

  return (
    <li className="song-item-card">
      <img className="song-img" src={imageUrl} alt="track" />
      <div className="song-details-container">
        <p className="song-name">{name}</p>
        <p className="song-genre">{genre}</p>
      </div>
      <div className="song-duration-container">
        <p className="song-duration">{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="delete-btn"
          onClick={onClickDeleteBtn}
        >
          <AiOutlineDelete size={20} className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongCard
