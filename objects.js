var playlist = {"Alison": "Slowdive", "Sometimes": "My Bloody Valentine"}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist
}
function removeFromPlaylist(artistName, songTitle) {
  delete playlist.artistName
  return playlist
}
