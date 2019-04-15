import React, {Component} from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
   }

  submitForm(e) {
    e.preventDefault();
    
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    const config = {
     method: "POST",
     headers: { "Content-Type": "application/json",},
     body: JSON.stringify(this.state),
    };


    fetch(url, config)
    .then(res => res.json())
     .then(res => {
      if (res.error) {
       alert(res.error);
     } else {
       alert(`le film a bien été ajouté avec l'ID ${res}!`);
     }
   }).catch(e => {
     console.error(e);
     alert('Erreur lors de l\'ajout d\'un film');
   });
  

  }

    render() {
      return (
        
        <div className="FormEmployee">
          <h1>Saisir un film</h1>
          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Informations</legend>
              
              <div className="form-data">
                <label htmlFor="name">Nom du film</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.filmname}/>
              </div>
              <div className="form-data">
                <label htmlFor="poster">URL</label>
                <input
                  type="url"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.URL}/>
              </div>
              <div className="form-data">
                <label htmlFor="comment">Commentaire</label>
                <textarea
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.message}/>
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}
export default Film;