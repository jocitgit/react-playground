import { connect } from 'react-redux'
import ErrorDisplay from '../components/ErrorDisplay'

const mapStateToProps = state => {
    return {
        err: state.dbError
    }
}

const DBError = connect(
    mapStateToProps
)(ErrorDisplay)

export default DBError