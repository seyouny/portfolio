import React from 'react'
import Board from 'react-trello'
import "./style.css"
// const data = {
//     lanes: [
//       {
//         id: 'Idea board',
//         title: 'Planned Tasks',
//         label: '2/2',
//         cards: [
//           {id: 'Card1', title: 'Climate Change Model using Python Machine Learning', description: 'Use Streamlit, Climate Change AI, APIs to make prediction models', label: '2 min', draggable: true},
//           {id: 'Card2', title: 'Spotify Playlist Creator', description: 'Use Spotify API to create a fun customizable playlist for occasions and to send to lonely friends', label: '5 mins', metadata: {sha: 'be312a1'}}
//         ]
//       },
//       {
//         id: 'Currently Building',
//         title: 'Currently Building',
//         label: '0/0',
//         cards: []
//       },
//     ]
//   }


export default class Kanban extends React.Component {
  // NewCardForm = ()=>{

  // }
  render() {
    return <Board data={{
      lanes: [
              {
                id: 'Idea board',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                  {id: 'Card1', title: 'Climate Change Model', description: ' using Python Machine Learning, Use Streamlit, Climate Change AI, APIs to make prediction models', label: '2 min', draggable: true},
                  {id: 'Card2', title: 'Spotify Playlist Creator', description: 'Use Spotify API to create a fun customizable playlist for occasions and to send to lonely friends', label: '5 mins', metadata: {sha: 'be312a1'}}
                ]
              },
              {
                id: 'Currently Building',
                title: 'Currently Building',
                label: '0/0',
                cards: [],
                
              },
            ]
    }} style={{padding: '30px 20px',fontFamily: 'Verdana', background:'none'}} laneStyle={{}} cardStyle={{}}  className="boardContainer" />
  }
}
// editable components={{NewCardForm: {NewCardForm}}}