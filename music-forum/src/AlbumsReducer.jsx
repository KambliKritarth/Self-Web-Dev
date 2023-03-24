export default function albumsReducer( action,albums) {
  switch (action.type) {
    case 'added_album':
      return [...albums,albums]
    case 'deleted_album':
      return albums.filter(album => album.id!==action.id)
    case 'liked_album':
      return albums.map(album => {
      if (album.id === action.id) {
        return {...album,likes:album.likes+1}
      } else {
        return album
      }
    })
    case 'disliked_album':
      return albums.map(album => {
      if (album.id === action.id) {
        return {...album,likes:album.likes-1}
      } else {
        return album
      }
    })
    case 'sorted_albums':
      return [...albums].sort((a,b) => b.likes -a.likes)
  }
}