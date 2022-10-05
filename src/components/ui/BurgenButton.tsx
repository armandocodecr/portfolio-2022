import './Styles.css'

interface Props {
  clicked: boolean,
  handleClick: () => void ;
}

function BurgenButton( {clicked, handleClick}: Props  ) {
  return (
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
  )
}

export default BurgenButton