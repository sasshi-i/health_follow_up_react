import * as React from 'react';
import { getUserJwtToken } from '../../utils/auth';

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }
// TODO: jwtトークンの期限が切れていた時に再度ログインしてもらう処理
  login(): void {
    const { email, password } = this.state;
    getUserJwtToken(email, password);
  }

  render() {
    return (
      <div>
        <form action="/users">
          <p>メールアドレス</p>
          <input type="text" autoComplete="email" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({email: e.target.value})}/>
          <p>パスワード</p>
          <input type="password" autoComplete="password" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({password: e.target.value})}/>
          <input type="submit" onClick={this.login}/>
        </form>
      </div>
    );
  }
}

export default Signin;
