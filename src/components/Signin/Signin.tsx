import * as React from 'react';

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }

  login(): void {
    const { email, password } = this.state;
    // TODO: ログイン処理の実装
  }

  render() {
    return (
      <form action="/users">
        <p>メールアドレス</p>
        <input type="text" autoComplete="email" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({email: e.target.value})}/>
        <p>パスワード</p>
        <input type="password" autoComplete="password" onKeyPress={(e) => e.key === 'Enter' && this.login()} onChange={(e) => this.setState({password: e.target.value})}/>
        <input type="submit" onClick={this.login}/>
      </form>
    );
  }
}

export default Signin;
