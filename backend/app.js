const express = require('express');
const mongoose = require('mongoose');
const { from } = require('rxjs');
const user = require('./models/user.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const bcrypt = require('bcrypt');
const app = express()
const path = require('path');
const formation = require('./models/foramtion.js');
const session = require('./models/session.js');
const note = require('./models/note.js');
const emplois = require('./models/emplois.js');
const service = require('./models/service.js');
const login = require('./models/login.js');
const Event = require('./models/event.js');
const traveau = require('./models/traveau.js');
var jwt = require('jsonwebtoken');




// access to folder images
app.use('/images', express.static(path.join('backend/images')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const uri = "mongodb://localhost:27017/academieDB";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(err);
    else console.log("mongo connect ");
});




// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
// variable storge pour affecter la distination des images 
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter  la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;//reformulation des nom de fichier 
        //Affecter file name
        cb(null, imgName);
    }
});
///
//traitement de creation  de contact 

app.get("/api/contacts", (req, res) => {
    console.log("Here in BE Contacts");
    // Connect to DB
    Contact.find((err, documents) => {
        if (err) {
            console.log("Err in CNX with DB");
        } else {
            res.status(200).json({
                message: "OK, here all objects",
                contacts: documents
            });
        }
    });
});

app.post("/api/addContact", (req, res) => {
    console.log('here contact', req.body);
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,

        objet: req.body.objet

    });
    contact.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Contact is Added'
                })
            }
        }
    );
});

app.delete("/api/deleteContact/:id", (req, res) => {
    Contact.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: "Deleted Successfully",
        })
    );
});

app.get("/api/getContact/:id", (req, res) => {
    Contact.findOne({ _id: req.params.id }).then((document) => {
        res.status(200).json({
            contact: document
        });
    });
});

app.put("/api/editContact/:id", (req, res) => {
    const contact = new Contact({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        title: req.body.title,
        subject: req.body.subject
    });

    Contact.update({ _id: req.params.id }, contact).then((result) => {
        if (result) {
            res.status(201).json({
                message: "Updated successfully",
            });
        } else {
            console.log("here error");
        }
    });
});
//traitement de creation  de service 

app.post('/api/addService', (req, res) => {


    let Service = new service({
        categorie: req.body.categorie,
        type: req.body.type,
        session: req.body.session,
        etudiant: req.body.etudiant,
        idetudiant: req.body.idetudiant,
        message: req.body.message,
        traitement: req.body.traitement,
    });
    console.log('addded service', Service);

    Service.save();
    res.status(200).json({
        message: 'service added with success'
    })

});

app.get('/api/Service/traitement/:id', (req, res) => {
    var ObjectID = require('mongodb').ObjectID;
    let id;
    id = req.params.id;

    var query = { id: id };
    var newvalues = { $set: { traitement: "traitée" } };
    service.updateOne({ "_id": ObjectID(id) }, newvalues).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited Service .successufly"
                })
            }
        }
    );

}
);
app.put('/api/editService/:id', (req, res) => {

    let id;
    id = req.params.id;
    console.log('here in edit session ', id);
    let Service = {
        categorie: req.body.categorie,
        type: req.body.type,
        etudiant: req.body.etudiant,
        idetudiant: req.bode.idetudiant,
        session: req.body.session,
        traitement: req.body.traitement,


    };
    console.log("xxxxxxxxxxx", Service);

    service.updateOne({ _id: id }, Service).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited Service .successufly"
                })
            }
        }
    )

});
app.get('/api/allServices', (req, res) => {

    console.log('hello in BE to get all service')


    service.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                services: docs
            });
        }
    })
});
app.get('/api/Servicebyid/:id', (req, res) => {

    console.log('hello in BE to get all servise')
    let id;
    id = req.body.params
    service.find({ idetudiant: id }, (err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                services: docs
            });
        }
    })
});

//traitment delete service
app.delete('/api/deleteservice/:id', (req, res) => {
    console.log('here in delete service');
    let id = req.params.id;
    console.log('id', id);
    service.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }

    )

});
// Traitement de add emplois

app.post('/api/addEmplois', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here in add emplois', req.body);
    let url = req.protocol + '://' + req.get('host');//construire url et pour recuperer le port  
    console.log('here URL', url);
    let Emplois = new emplois({
        idSession: req.body.idSession,

        img: url + '/images/' + req.file.filename

    });
    console.log('addded emplois', Emplois);

    Emplois.save();

    res.status(200).json({
        message: "added"

    });

});
//traitement de get all emplois
app.get('/api/allemplois', (req, res) => {

    console.log('hello in BE to get all emplois')


    emplois.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                emplois: docs
            });
        }
    })
});



app.get('/api/allemplois/:id', (req, res) => {


    let id;
    id = req.params.id;//Req.params:recuperer paramettre du req (url)
    console.log('id', id)
    emplois.findOne({ _id: id }).then((doc) => {
        console.log('finded emplois ', doc);



        res.status(200).json({
            emplois: doc
        });
    }
    );


});


//traitment delete emplois
app.delete('/api/deleteEmplois/:id', (req, res) => {
    console.log('here in delete emplois');
    let id = req.params.id;
    console.log('id', id);
    emplois.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
//traitement de creation  de traveau

app.post('/api/addTraveau', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here in add trveau', req.body);
    let url = req.protocol + '://' + req.get('host');//construire url et pour recuperer le port  
    console.log('here URL', url);

    let Traveau = new traveau({
        idEnseignant: req.body.idEnseignant,
        idEtudiant: req.body.idEtudiant,
        description: req.body.description,
        nomEtudiant:req.body.nomEtudiant,
        prenomEtudiant:req.body.prenomEtudiant,
        nomEnseignat:req.body.nomEnseignat,
        img: url + '/images/' + req.file.filename,

    });
    console.log('addded Traveau', Traveau);

    Traveau.save();

    res.status(200).json({
        message: "added"

    });

});



//traitement de get all traveau
app.get('/api/allTraveaux', (req, res) => {

    console.log('hello in BE to get all traveaux')

    traveau.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                traveaux: docs
            });
        }
    })
});

//traitment delete traveau
app.delete('/api/deletetraveau/:id', (req, res) => {
    console.log('here in delete document');
    let id = req.params.id;
    console.log('id', id);
    traveau.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
//traitement de creation  de note
app.post('/api/addNote', (req, res) => {


    let Note = new note({
        IDenseignant: req.body.IDenseignant,
        Etudiant: req.body.Etudiant,
        formation: req.body.formation,
        resultat: req.body.resultat,
        mention: req.body.mention,
        nomEtudiant: req.body.nomEtudiant,
        prenomEtudiant: req.body.prenomEtudiant,



    });
    console.log('addded note', Note);

    Note.save();
    res.status(200).json({
        message: 'session added with success'
    })



});
//traitement de get all note
app.get('/api/allnotes', (req, res) => {

    console.log('hello in BE to get all sessions')


    note.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                notes: docs
            });
        }
    })
});

//get note by idEtudiant 

app.get('/api/allnote/:id', (req, res) => {


    let id;
    id = req.params.id;//Req.params:recuperer paramettre du req (url)
    console.log('id', id)
    note.findOne({ idEtudiant: id }).then((doc) => {
        console.log('finded note ', doc);



        res.status(200).json({
            note: doc
        });
    }
    );


});
//get traveau by idetudiant 

app.get('/api/allTraveaux/:id', (req, res) => {


    let id;
    id = req.params.id;//Req.params:recuperer paramettre du req (url)
    console.log('id', id)
    traveau.find({ idEtudiant: id }).then((docs) => {
        console.log('finded traveau ', docs);



        res.status(200).json({
            traveau: docs
        });
    }
    );


});
//traitment delete note
app.delete('/api/deleteNote/:id', (req, res) => {
    console.log('here in delete Session');
    let id = req.params.id;
    console.log('id', id);
    note.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
// ...................................
//traitement de get all sessions 
app.get('/api/allsessions', (req, res) => {

    console.log('hello in BE to get all sessions')


    session.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                sessions: docs
            });
        }
    })
});

// traitement edit session 
app.put('/api/editSession/:id', (req, res) => {

    let id;
    id = req.params.id;
    console.log('here in edit session ', id);
    let Session = {
        _id: req.params.id,
        nom: req.body.nom,
        nbheures: req.body.nbheures,
        prix: req.body.prix,
        d2d: req.body.d2d,
        d2c: req.body.d2c,
        formation: req.body.formation,
        formateur: req.body.formateur


    };
    console.log("xxxxxxxxxxx", Session);

    session.updateOne({ _id: id }, Session).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited.successufly"
                })
            }
        }
    )

});

app.get('/api/allsession/:id', (req, res) => {

    let id;
    id = req.params.id;//Req.params:recuperer paramettre du req (url)
    console.log('id', id)
    session.findOne({ _id: id }).then((doc) => {
        console.log('finded session ', doc);
        res.status(200).json({
            session: doc
        });
    }
    );


});
//traitement de creation  de session 

app.post('/api/addSession', (req, res) => {


    let Session = new session({
        nom: req.body.nom,
        nbheures: req.body.nbheures,
        prix: req.body.prix,
        d2d: req.body.d2d,
        d2c: req.body.d2c,
        formation: req.body.formation,
        formateur: req.body.formateur,



    });
    console.log('addded session', Session);

    Session.save();
    res.status(200).json({
        message: 'session added with success'
    })



});

//search par session
app.post('/api/getEtudiantBySession', (req, res) => {
    console.log('Hello in BE to get etudiant by session');

    console.log('here search value', req.body.session);
    let searchedVal = req.body.session;


    session.find({
        $or: [
            { Session: { $regex: `.*${searchedVal}` } },
            { nom: { $regex: `.*${searchedVal}` } }]
    }).then(
        (docs) => {
            if (docs) {
                console.log('Error in DB');
                res.status(200).json({
                    users: docs
                });
            }
        });
});


//traitment delete session
app.delete('/api/deleteSession/:id', (req, res) => {
    console.log('here in delete Session');
    let id = req.params.id;
    console.log('id', id);
    session.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
//traitement de get all formation 
app.get('/api/allformations', (req, res) => {

    console.log('hello in BE to get all formations')


    formation.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                formations: docs
            });
        }
    })
});
// traitement edit formation 
app.put('/api/editFormation/:id', (req, res) => {

    let id;
    id = req.params.id;
    console.log('here in edit formation ', id);
    let Formation = {
        _id: req.params.id,
        nom: req.body.nom,

        description: req.body.description
    };
    console.log("xxxxxxxxxxx", Formation);

    formation.updateOne({ _id: id }, Formation).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited.successufly"
                })
            }
        }
    )

});
app.get('/api/allformation/:id', (req, res) => {


    let id;
    id = req.params.id;//Req.params:recuperer paramettre du req (url)
    console.log('id', id)
    formation.findOne({ _id: id }).then((doc) => {
        console.log('finded formation ', doc);



        res.status(200).json({
            formation: doc
        });
    }
    );


});
//traitement de creation  de formation 

app.post('/api/addFormation', (req, res) => {


    let Formation = new formation({
        nom: req.body.nom,

        description: req.body.description,

    });
    console.log('addded formation', Formation);

    Formation.save();
    res.status(200).json({
        message: 'formation added with success'
    })



});

//traitment delete formation
app.delete('/api/deleteFormation/:id', (req, res) => {
    console.log('here in delete Formation');
    let id = req.params.id;
    console.log('id', id);
    formation.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
//traitement de get all users 
app.get('/api/allUsers', (req, res) => {

    console.log('hello in BE to get all users')


    user.find((err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    })
});
//traitement de get all ensignants
app.get('/api/allensignants', (req, res) => {

    console.log('hello in BE to get all users')


    user.find({ role: 'Enseignant' }, (err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    })
});
//traitement de get all etudiants

app.get('/api/alletudiants', (req, res) => {

    console.log('hello in BE to get all users')


    user.find({ role: 'Etudiant' }, (err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    })
});
//traitement de get all admins
app.get('/api/alladmins', (req, res) => {

    console.log('hello in BE to get all admin')


    user.find({ role: 'Admin' }, (err, docs) => {
        if (err) {
            console.log('erro in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    })
});

//edit user
app.put('/api/editUser/:id', (req, res) => {

    let id;
    id = req.params.id;
    console.log('here in edit user ', id);
    let User = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        linkedin: req.body.linkedin,
        cin: req.body.cin,
        pwd: req.body.pwd,
        telephone: req.body.telephone,
        email: req.body.email,


    };
    console.log("xxxxxxxxxxx", User);

    user.updateOne({ _id: id }, User).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited.successufly"
                })
            }
        }
    )

});

app.post('/api/addUser', (req, res) => {
    try {
    bcrypt.hash(req.body.pwd, 10).then(cryptedPwd => {
        console.log('here in add etudiant', req.body);

        let User = new user({
            role: req.body.role,
            nom: req.body.nom,
            prenom: req.body.prenom,
            cin: req.body.cin,
            email: req.body.email,
            pwd: cryptedPwd,
            telephone: req.body.telephone,
            absence: req.body.absence,
            linkedin: req.body.linkedin,
            status: req.body.status,
            session: req.body.session,
            formation: req.body.formation,


        });
        console.log('addded user', User);

        User.save();
        res.status(200).json({
            message: 'User added with success'
        })
        
    })
   
} catch (error) {
    res.status(200).send({ message: 'error' })
}

});
app.get("/api/allUser/:id", (req, res) => {
    user.findOne({ _id: req.params.id }).then((doc) => {
        res.status(200).json({
            user: doc
        });
    });
});
//traitement display users par id 
app.get('/api/allUser/:id', (req, res) => {


    let id;
    id = req.params.id;

    console.log('id', req.params.id)
    user.findOne({_id: id }).then((doc) => {
        console.log('finded user ', doc);



        res.status(200).json({
            user: doc
        });
    }
    )


});
//traitment delete users
app.delete('/api/deleteUser/:id', (req, res) => {
    console.log('here in delete users');
    let id = req.params.id;
    console.log('id', id);
    user.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "deleted successed"
                });
            }

            else {
                console.log("err dlt");
            }
        }


    )


});
// // //login 
app.post("/api/login", (req, res) => {
    console.log("Here in login", req.body);
    try {
        user.findOne({ email: req.body.email })
            .then((data) => {
                if (!data) {
                    res.status(400).send({
                        message: 'user not found' 
                    })

                }
                return bcrypt.compare(req.body.pwd, data.pwd);
            })
            .then((findedUser) => {
                console.log("findedUser", findedUser);
                if (!findedUser) {
                    res.status(404).send({
                        message: "user not found"

                    });
                }
                user.findOne({ email: req.body.email }).then((data) => {
                    console.log("data", data);
                    const user = {
                        email: req.body.email,
                        nom: data.nom,
                        prenom: data.prenom,
                        role: data.role,
                        id: data.id,
                        token: this.token
                    }
                    let token = jwt.sign({ id: data._id, role: data.role }, "SECRET")
                    res.status(200).send({ token, user })

                });
            })
    } catch (error) {
        res.status(400).send({ message: 'sent condition failed' })
    }
})


app.post('/api/addEmplois', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here in add emplois', req.body);
    let url = req.protocol + '://' + req.get('host');//construire url et pour recuperer le port  
    console.log('here URL', url);
    let Emplois = new emplois({
        idSession: req.body.idSession,

        img: url + '/images/' + req.file.filename

    });
    console.log('addded emplois', Emplois);

    Emplois.save();

    res.status(200).json({
        message: "added"

    });

});
////////////////////////// Event //////////////////////////

app.post("/api/addevent", multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here my file', req.file);

    let url = req.protocol + '://' + req.get('host');
    console.log('req.protocol', req.protocol);
    console.log('req.get("host")', req.get("host"));
    console.log('here URL', url);
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime,
        image: url + '/images/' + req.file.filename


    });
    event.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Event is Added'
                })
            }
        }
    );
});

app.get("/api/events", (req, res) => {
    console.log("Here in BE events");
    // Connect to DB
    Event.find((err, docs) => {
        if (err) {
            console.log("Err in CNX with DB");
        } else {
            res.status(200).json({
                message: "OK, here all objects",
                events: docs
            });
        }
    });
});

app.delete("/api/deleteEvent/:id", (req, res) => {
    console.log('here in delete event');
    Event.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: "Deleted Successfully",
        })
    );
});

app.get("/api/getEvent/:id", (req, res) => {
    Event.findOne({ _id: req.params.id }).then((document) => {
        res.status(200).json({
            event: document
        });
    });
});


app.put("/api/editEvent/:id", (req, res) => {
    let id;
    id = req.params.id;
    console.log('here in edit user ', id);
    const event = new Event({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime
    });

    Event.updateOne({ _id:id }, event).then((result) => {
        if (result) {
            res.status(201).json({
                message: "Updated successfully",
            });
        } else {
            console.log("here error");
        }
    });
});



module.exports = app;