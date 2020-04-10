var playlist = {[]"Alison"]: "Alison", ["Sometimes"]: "My Bloody Valentine"}
function destructivelyUpdatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {["Kygo"]: "Higher Love"});
}
