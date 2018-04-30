import { connect } from 'react-redux'
import AttestButton from './AttestButton'
import { identityAttesation } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAttestUserClick: (event) => {
      event.preventDefault();

      dispatch(identityAttesation())
    }
  }
}

const AttestButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttestButton)

export default AttestButtonContainer
