import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface IAppProps {
  message?: string;
}

export default class App extends React.Component<IAppProps> {
  public render(): React.ReactElement {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            { this.props.message || 'DEFAULT MESSAGE' }
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}