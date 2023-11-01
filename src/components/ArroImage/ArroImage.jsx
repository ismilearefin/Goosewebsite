/* eslint-disable react/prop-types */
import '../ArroImage/ArroImage.css';

export default function ArroImage({isleft}) {
  return (
    <div className={`clip-path ${isleft && 'left'}`}>
    </div>
  )
}
