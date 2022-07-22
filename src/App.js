import React, { Component } from 'react';
import CardList from './CardList';
import './App.scss';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchfield: '',
      sortedby: '',
    }
  }

  componentDidMount(){
    async function fetchCharacters(){
      const resp = await fetch('https://swapi.py4e.com/api/people/');
      const data = await resp.json();
      return data;
    }
    fetchCharacters().then(
      data =>{
        data.results.forEach((elem,index)=>{
          elem.id = index;
        })
        this.setState({ people: data.results })
      }
    );
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  handleChange = (event) => {
    let category = event.target.value;
    // if category is not selected, sort by id
    category = !!category?category:'id';
    this.setState({ sortedby: category })
    const data = this.state.people;
      function compare(a, b) {
        const firstEl = category === 'height' || category === 'id' ? Number(a[category]) : a[category];
        const secondEl = category === 'height' || category === 'id' ? Number(b[category]) : b[category];

        let comparison = 0;
        if (firstEl > secondEl) {
          comparison = 1;
        } else if (firstEl < secondEl) {
          comparison = -1;
        }
        // if it is sorted by id, list from 0.
        return category === 'id' ? comparison:comparison * -1;
      }
      this.setState({ people: data.sort(compare) })
  }

  render () {
    const filterPeople = this.state.people.filter(person => {
      return person.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f1'>{this.state.people.length === 0 ?'loading...':'Star Wars Characters'}</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <h2>sort by<br></br>
        <select name="category" onChange={(e) => this.handleChange(e)}>
          <option value="">--Please choose an option--</option>
          <option value="height">height</option>
          <option value="gender">gender</option>
          <option value="birth_year">birth year</option>
        </select>
        </h2>
        <CardList people={filterPeople} sortedby={this.state.sortedby} />
      </div>
    )
  }
}

export default App;
