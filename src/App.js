import logo from './logo.svg';
import './App.css';
function App() {
  componentDidMount() 
          fetch(
  'https://api.github.com/search/users?q=haseebmi%20in:login')
              .then((res) => res.json())
              .then((json) => {
                  this.setState({
                      items: json,
                      DataisLoaded: true
                  });
              })
      
      render() 
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    );
  return (
    <div className="App">
      <body className='App-body'>
        <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">name search</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<input class="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight">
              <a  href="#">ali</a><br/>
              <a  href="#">huzafa</a><br/>
              <a  href="#">shah hassan</a><br/>
              <a  href="#">aliza</a><br/>
              <a  href="#">arhman</a><br/>
              <a  href="#">adiba</a><br/>
              <a  href="#">tayyba </a><br/>
              <a  href="#">aqsa</a><br/>
              <a  href="#">hira</a><br/>
              <a  href="#">nazia </a><br/>
              <a  href="#">maqbool</a><br/>
              <a  href="#">hafsa</a><br/>
              <a  href="#">maheen</a><br/>
              <a  href="#">maryam</a><br/>
              <a  href="#">alia</a><br/>
              <a  href="#">haseeb</a><br/>
              <a  href="#">aqsa butt</a><br/>
              <a  href="#">waseem</a><br/>
              <a  href="#">junaid</a><br/>
              <a  href="#">arham</a><br/>
              <a  href="#">tamur</a><br/>
              <a  href="#">mahnoor</a><br/>
              <a  href="#">khansa</a><br/>
              <a  href="#">naba</a><br/>
            </div>
          </div>
        </header>
        <footer>
          all copy write by @ haseeb
        </footer>
      </body> 
    </div>
  );
  }
export default App;
