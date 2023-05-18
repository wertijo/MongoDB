const express = require('express');
const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log(`Listeing in port http://localhost:8080`);
});


const mongoose = require('mongoose');


(async () => {
  try {
    await mongoose.connect('mongodb+srv://jalejandroreyes:MH6mhhGiT0LdT9YC@cluster0.uh0tbwx.mongodb.net/musica');
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
})();


/*crear esquema de artista*/
const schema = new mongoose.Schema({ nombre: String });
const artista = mongoose.model('artista', schema);

/* Ver artistas*/
app.get('/artistas', async (req, res) => {
  try {
    const artistas = await artista.find();
    res.json(artistas);
  } catch (error) {
    console.log(error);
  };
});

/*Añadir artista*/
const addArtista = {
  nombre: 'Airod'
};
/*
const addArtista = {
  nombre: 'Alex Stein'
};
const addArtista = {
  nombre: 'Amotik'
};
const addArtista = {
  nombre: 'Andrea Signore'
}; 
const addArtista = {
  nombre: 'Arthur Rober'
}; 
const addArtista = {
  nombre: 'Calvin Logue'
}; 
const addArtista = {
  nombre: 'Camel Logue'
}; 
const addArtista = {
  nombre: 'CamelPhat'
}; 
const addArtista = {
  nombre: 'Dom Noid'
}; 
const addArtista = {
  nombre: 'A*S*Y*S'
}; */

/* Sirve para agregar el nuevo artista*/
app.get('/add-artista', async (req, res) => {
  try {
    const a = await artista.create(addArtista);
    await a.save();
    res.json(a);
  } catch (error) {
    console.log(error);
  };
});





/*Crear esquema de genero*/
const schema1 = new mongoose.Schema({ nombre: String, canciones: Array });
const genero = mongoose.model('genero', schema1);

/* ver genero*/
app.get('/generos', async (req, res) => {
  try {
    const generos = await genero.find();
    res.json(generos);
  } catch (error) {
    console.log(error);
  };
});

/*Añadir genero*/
const addGenero = {
  nombre: 'Acid',
  canciones: ['Time', 'Selected', 'Formula', 'Form', 'Ac/Id', 'Injection', 'The Acid', 'Dark Light']
};
/*const addGenero={
  nombre: 'Hard',
  canciones: ['Asura','Straight Into Your Face','Orderly Chaos','Into The Unknown','Interference','Injection']
};
const addGenero = {
  nombre: 'Melodic',
  canciones: ['Less Is More','Breathe','Deep Mind','Hidden T','A Million Souls','Flutes']
};
const addGenero = {
  nombre: 'Techno',
  canciones: ['The Age Of Love','Divine Power','Rise','The Phoenix','Unness','Heaven or Hell','Cautious','Kataract']
}*/

/* Sirve para agregar el nuevo genero*/
app.get('/add-genero', async (req, res) => {
  try {
    const a = await genero.create(addGenero);
    await a.save();
    res.json(a);
  } catch (error) {
    console.log(error);
  };
});





/*crear esquema de Camelot*/
const schema2 = new mongoose.Schema({ clave: String, claves_recomendadas: Array });
const camelot = mongoose.model('camelot', schema2);

/* Ver artistas*/
app.get('/camelot', async (req, res) => {
  try {
    const claves = await camelot.find();
    res.json(claves);
  } catch (error) {
    console.log(error);
  };
});

/*Añadir camelot*/
/*
const addCamelot = {
  clave: 'A maj',
  claves_recomendadas:['D maj','E maj']
};
const addCamelot = {
  clave: 'A min',
  claves_recomendadas: ['D min','E min']
}
const addCamelot = {
  clave: 'A# min',
  claves_recomendadas: ['B♭ min','F min','D# min', 'E♭ min']
}
const addCamelot = {
  clave: 'B maj',
  claves_recomendadas: ['C♭ maj','E maj','F# maj', 'G♭ maj']
}
const addCamelot = {
  clave: 'B min',
  claves_recomendadas: ['E min' ,'F# min']
}
const addCamelot = {
  clave: 'B♭ min',
  claves_recomendadas: ['A# min',  'F min',  'D# min', 'E♭ min']
}
const addCamelot = {
  clave: 'D♭ maj',
  claves_recomendadas: ['C# maj' , 'F# maj' , 'G♭ maj' , 'A♭ maj']
}
const addCamelot = {
  clave: 'E♭ min',
  claves_recomendadas: ['D# min' , 'G# min' , 'A♭ min' , 'B♭ min' , 'A# min']
}
const addCamelot = {
  clave: 'F min',
  claves_recomendadas: ['B♭ min' , 'A# min', 'A min']
}*/
const addCamelot = {
  clave: 'G♭ maj',
  claves_recomendadas: ['F# maj', 'C# maj', 'D♭ maj', 'B maj', 'C♭ maj']
}

/* Sirve para agregar nuevo camelot */
app.get('/add-camelot', async (req, res) => {
  try {
    const a = await camelot.create(addCamelot);
    await a.save();
    res.json(a);
  } catch (error) {
    console.log(error);
  };
});
