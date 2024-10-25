import {Component} from 'react'
import {FiSearch} from 'react-icons/fi'

import NoSongs from '../NoSongs'
import SongCard from '../SongCard'

import './index.css'

class SongPlaylist extends Component {
  state = {inputSearch: '', tracksList: []}

  componentDidMount() {
    this.initializeTracksList()
  }

  initializeTracksList = () => {
    const {initialTracksList} = this.props
    this.setState({tracksList: initialTracksList})
  }

  removeTrack = trackId => {
    this.setState(prev => ({
      tracksList: prev.tracksList.filter(track => track.id !== trackId),
    }))
  }

  updateInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  filterTracks = () => {
    const {inputSearch, tracksList} = this.state
    const filteredTracksList = tracksList.filter(each =>
      each.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return filteredTracksList
  }

  renderSongs = () => {
    const filteredTracksList = this.filterTracks()
    if (filteredTracksList.length === 0) {
      return <NoSongs />
    }
    return (
      <ul className="tracks-list-container">
        {filteredTracksList.map(each => (
          <SongCard
            trackDetails={each}
            removeTrack={this.removeTrack}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="playlist-container">
        <div className="playlist-header">
          <h1 className="playlist-heading">Songs Playlist</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-field"
              onChange={this.updateInputSearch}
            />
            <FiSearch size={20} className="search-icon" />
          </div>
        </div>
        {this.renderSongs()}
      </div>
    )
  }
}

export default SongPlaylist
