import { CSSTransition, SwitchTransition } from 'react-transition-group';
import React from "react";
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      <div className={`${this.props.sortedby} cardlist`}>
        {this.props.people.map(charactor => (
          <SwitchTransition mode={'out-in'} >
            <CSSTransition
              key={charactor.id}
              timeout={300}
              classNames="fade"
            >
              <Card
                key={charactor.id}
                id={charactor.id}
                name={charactor.name}
                gender={charactor.gender}
                height={charactor.height}
                birthYear={charactor.birth_year}
              />
            </CSSTransition>
          </SwitchTransition>
        ))}
      </div>
    );
  }
}

export default CardList;
