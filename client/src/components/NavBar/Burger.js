import PropTypes from 'prop-types';
import {StyledBurger} from './StyledBurger'

const Burger = ({open, setOpen, ...props}) => {
  // const [open, setOpen] = useState(false)

  const isExpanded = open? true:false;
  return (
      <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}{...props}>
        <div className='bar1'/>
        <div className='bar2'/>
        <div className='bar3' />
      </StyledBurger>
      // <RightNav open={open} setOpen={open}/>
  )
}
Burger.propTypes = {
  open:PropTypes.bool.isRequired,
  setOpen:PropTypes.func.isRequired,
}

export default Burger