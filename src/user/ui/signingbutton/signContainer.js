import { connect } from 'react-redux'
import SignButton from './SignButton'
import { signUser } from './signActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSigningClick: (event) => {
      event.preventDefault();

      dispatch(signUser())
    }
  }
}

const SignButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignButton)

export default SignButtonContainer
