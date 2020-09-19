import * as React from 'react';
import { getUserJwtToken } from '../../utils/auth';

class Signin extends React.Component {
  // Propsの型を定義
  constructor(props: any) {
    super(props)
    this.login = this.login.bind(this);
  }
  // TODO: emailとパスワードはグローバルステートにしたい
  state = {
    email: '',
    password: '',
  }
// TODO: jwtトークンの期限が切れていた時に再度ログインしてもらう処理
  login(): void {
    const { email, password } = this.state;
    console.log('login##########')
    window.location.href = '/users'
    console.log('login@@@@@@@@@@@')
    // getUserJwtToken(email, password);
  }

  render() {
    return (
      <div>
        <form>
          <p>メールアドレス</p>
          <input type="text" autoComplete="email" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({email: e.target.value})}/>
          <p>パスワード</p>
          <input type="password" autoComplete="password" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({password: e.target.value})}/>
          <input type="button" value='ログイン' onClick={this.login}/>
        </form>
      </div>
    );
  }
}

export default Signin;
