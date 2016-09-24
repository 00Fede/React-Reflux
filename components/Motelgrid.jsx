import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../stores/MotelStore';

var MotelGrid = React.createClass({
	//instalar los mixins
	mixins: [Reflux.connect(MotelStore,'motelstore')],

	render: function(){
		if(this.state.motelstore)
		{
			return <div>
			{
				this.state.motelstore.map(function(image){
					return <div key={image.id} classname="image">
					<h4>{image.name}</h4>
					<a href={image.URL_WebPage}>
					<img src = {image.logo}></img>
					</a>
					<p>{image.description}</p>
					</div> 
				})

			}
			</div>
		}
		else
		{
			return(<p>No hay información para mostrar</p>);
		}

	}

});

module.export = MotelGrid;