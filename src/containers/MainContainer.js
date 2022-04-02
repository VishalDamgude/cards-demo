import React from 'react'

export default class MainContainer extends React.Component {

    state = {
        cards: []
      }

      render(){
        return (
          <div className="main-container">
            {/* <ToDoCardContainer cards={this.state.cards} addList={this.addList} handleClickList={this.handleClickList}/>
            <CreateCard createNewCard={this.createNewCard}/> */}
          </div>
        )
      }
}