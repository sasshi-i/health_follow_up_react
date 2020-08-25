import UserList from './UserList';
import { getUsers } from '../actions';
import { connect } from 'react-redux'

const mapDispatchToProps = ({ getUsers })

export default connect(null, mapDispatchToProps)(UserList);
