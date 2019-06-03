import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    game:[]
  }

  componentDidMount() {
    let game = [];
    for(var i=0;i<3;i++)
    {
      let game_row=[]
      for (var j=0;j<20;j++) {
        game_row.push(1+Math.floor(Math.random()*4))
      }
      game.push(game_row)
    }
    let game_row=[]
    for (var j=0;j<20;j++) {
      game_row.push(Math.floor(Math.random()*5))
    }
    game.push(game_row)
    this.setState({game})
  }
  render() {
    return (
      <table>
        <tbody>
        {

          this.state.game.map((row,index)=>{
            return (<tr key={index}>
              {
                row.map((col,index) => {
                  return (
                    <td key={index} >
                     <span className={`circle col_${col}`}> </span>
                    </td>
                  )
                })
              }
            </tr>)
          })
        }
        </tbody>
      </table>
    )
  }
}

export default App;
