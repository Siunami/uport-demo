import { connect } from 'react-redux'
import IssueButton from './IssueButton'
import { issueToken } from './issueActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIssueClick: (event) => {
      event.preventDefault();

      dispatch(issueToken())
    }
  }
}

const IssueButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueButton)

export default IssueButtonContainer
