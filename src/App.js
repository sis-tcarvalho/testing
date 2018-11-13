import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
/*import { FontAwesomeIcon} from '@fortawesome/fontawesome-free' */
/*import { faTwitter } from '@fortawesome/free-brands-svg-Icons'*/
/*import Button from '@material-ui/core/Button';*/
/* import logo from './logo.svg'; */ 
// tried to pass props to the button component
import './App.css';
/*import QuoteMachine from './components/QuoteMachine'*/



const Button = ( {buttonDisplayName, clickhandler} ) => (
  <button className='pure-material-button-contained' onClick={clickhandler}>{buttonDisplayName}</button>
);




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    // when creating a function that is using the variable 'this'
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  // fectch API simply sends a get request to a web site and gets data from it

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json()) // parsing it out
    .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));

  }
  // call a regular variable {this.selectedQuote ? ...}
   j
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    } 
  return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /**
   * Returns an integer representing in state.quotes
   * if state.quotes is empty, returns undefined
   */
  generateNewQuoteIndex() {
    if(!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() })
  }

  render() {
    
    return (
      <div  className='App-header' id='quote-box'>
        
        <Card>
          <CardContent >
        
            <Typography id='text'>
          
          { this.selectedQuote ?  
        `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}"`: '' } 
          
            </Typography>

          </CardContent>
             <CardActions>
  
          <Button id='new-quote' clickhandler={this.assignNewQuoteIndex} buttonDisplayName='Próxima quote!!' />
                <IconButton id='tweet-quote'>
              
                <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world"
  data-size="large">
Tweet</a>



                </IconButton>
             </CardActions>
          
        
        </Card>
        
      </div>
    );
  }
}


export default App;


// A rever e a fundamentar os meus conhecimentos em relação à programação, neste caso react